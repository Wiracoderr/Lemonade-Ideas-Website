import { NextResponse } from 'next/server';
import { google } from 'googleapis';

const TIMEZONE = 'America/Los_Angeles';

export async function POST(request: Request) {
  try {
    const { name, email, phone, notes, slotTime } = await request.json();

    if (!name || !email || !slotTime) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    if (!clientEmail || !privateKey || !calendarId) {
      console.error('Missing calendar credentials in .env.local');
      return NextResponse.json({ error: 'Calendar configuration is missing on server' }, { status: 500 });
    }

    // Use the same auth pattern that works in contact/route.ts
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: [
        'https://www.googleapis.com/auth/calendar',
        'https://www.googleapis.com/auth/calendar.events',
      ],
    });

    const calendar = google.calendar({ version: 'v3', auth });

    const startDateTime = new Date(slotTime);
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60000); // 60 min duration

    const event = {
      summary: `Consultation Call - ${name}`,
      description: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nNotes from client:\n${notes || 'None'}\n\n---\nBooked via Lemonade Ideas Website.`,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: TIMEZONE,
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: TIMEZONE,
      },
      reminders: {
        useDefault: true,
      },
    };

    const response = await calendar.events.insert({
      calendarId: calendarId,
      requestBody: event,
      sendUpdates: 'none',
    });

    // Also send lead to MailerLite "Contact" group
    const mlApiKey = process.env.MAILERLITE_API_KEY;
    if (mlApiKey) {
      try {
        await fetch('https://connect.mailerlite.com/api/subscribers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${mlApiKey}`
          },
          body: JSON.stringify({
            email,
            fields: {
              name: name || '',
              phone: phone || '',
              company: notes || '',
            },
            groups: ['184120526691633061'] // Contact group
          })
        });
      } catch (mlError) {
        // Don't fail the booking if MailerLite fails
        console.error('MailerLite submission error (non-blocking):', mlError);
      }
    }

    return NextResponse.json({ success: true, eventLink: response.data.htmlLink });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error booking calendar event:', error);
    return NextResponse.json({ error: 'Failed to book slot: ' + message }, { status: 500 });
  }
}
