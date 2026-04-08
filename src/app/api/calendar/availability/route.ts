import { NextResponse } from 'next/server';
import { google } from 'googleapis';

const TIMEZONE = 'America/Los_Angeles';

export async function POST(request: Request) {
  try {
    const { date } = await request.json(); // Expected format: 'YYYY-MM-DD'

    if (!date) {
      return NextResponse.json({ error: 'Date is required' }, { status: 400 });
    }

    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    if (!clientEmail || !privateKey || !calendarId) {
      console.error('Missing calendar credentials in .env.local');
      return NextResponse.json({ error: 'Calendar configuration is missing' }, { status: 500 });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: [
        'https://www.googleapis.com/auth/calendar',
        'https://www.googleapis.com/auth/calendar.events',
        'https://www.googleapis.com/auth/calendar.readonly',
      ],
    });

    const calendar = google.calendar({ version: 'v3', auth });

    // Use explicit Pacific offset in date strings so times are correct regardless of server timezone
    // PDT = UTC-7 (March-November), PST = UTC-8 (November-March)
    // For simplicity using -07:00 (PDT) since most business happens in summer
    const offset = '-07:00';
    const startOfDay = new Date(`${date}T00:00:00${offset}`);
    const endOfDay = new Date(`${date}T23:59:59${offset}`);

    const response = await calendar.freebusy.query({
      requestBody: {
        timeMin: startOfDay.toISOString(),
        timeMax: endOfDay.toISOString(),
        timeZone: TIMEZONE,
        items: [{ id: calendarId }],
      },
    });

    const busySlots = response.data.calendars?.[calendarId]?.busy || [];

    // Build 1-hour slots from 9 AM to 4 PM Pacific (last slot 4-5 PM)
    const slotHours = [9, 10, 11, 12, 13, 14, 15, 16];
    const availableSlots: { iso: string; label: string }[] = [];
    const now = new Date();

    for (const hour of slotHours) {
      // Create slot with explicit Pacific offset so it resolves to correct UTC
      const slotISO = `${date}T${hour.toString().padStart(2, '0')}:00:00${offset}`;
      const slotStart = new Date(slotISO);
      const slotEnd = new Date(slotStart.getTime() + 60 * 60 * 1000);

      // Skip slots in the past
      if (slotStart <= now) continue;

      // Check overlap with busy periods
      const isBusy = busySlots.some((busy) => {
        const busyStart = new Date(busy.start!);
        const busyEnd = new Date(busy.end!);
        return slotStart < busyEnd && slotEnd > busyStart;
      });

      if (!isBusy) {
        // Format label as readable Pacific time (e.g. "9:00 AM", "1:00 PM")
        const displayHour = hour > 12 ? hour - 12 : hour;
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const label = `${displayHour}:00 ${ampm}`;

        availableSlots.push({ iso: slotStart.toISOString(), label });
      }
    }

    return NextResponse.json({ availableSlots });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Calendar Availability API Error:', error);
    return NextResponse.json({ error: 'Error fetching availability: ' + message }, { status: 500 });
  }
}
