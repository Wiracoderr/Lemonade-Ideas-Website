import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, groupId, fields } = body;

    const apiKey = process.env.MAILERLITE_API_KEY;

    if (!apiKey) {
      console.error("Missing MailerLite API Key in environment variables.");
      return NextResponse.json({ error: "Server Configuration Error" }, { status: 500 });
    }
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Default MailerLite payload
    const mailerLitePayload: Record<string, unknown> = {
      email,
      fields: {
        name: name || "",
        ...fields
      }
    };

    // If a group was defined, array it for MailerLite v2 API
    if (groupId) {
      mailerLitePayload.groups = [groupId];
    }

    const mlResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(mailerLitePayload)
    });

    const data = await mlResponse.json();

    if (!mlResponse.ok) {
      console.error("MailerLite API Error:", data);
      return NextResponse.json({ error: "Failed to subscribe to MailerLite", details: data }, { status: mlResponse.status });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("MailerLite Route Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
