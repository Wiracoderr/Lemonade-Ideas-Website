import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, splitName, email, phone, website, message, services } = body;

    // Validate environment variables - using a dedicated GET_STARTED sheet ID
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const sheetId = process.env.GOOGLE_GET_STARTED_SHEET_ID;

    if (!clientEmail || !privateKey || !sheetId) {
      console.error("Missing Google Sheets credentials in .env.local (Get Started)");
      return NextResponse.json({ error: "Server Configuration Error" }, { status: 500 });
    }

    // Authenticate with Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare the row data
    // Tab (Get Started): Business Name, Contact Name, Email, Phone, Website, Terms Agreed, Services
    // Assuming the user created a new sheet or tab explicitly for this with the new ID
    const row = [name || "", splitName || "", email || "", phone || "", website || "", message || "", services || ""];
    
    // Defaulting to the first sheet (A:G) since it's a dedicated document now
    const targetTab = 'A:G';

    // Append to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: targetTab,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    });

    return NextResponse.json({ success: true, data: response.data });
  } catch (error) {
    console.error("Google Sheets API Error (Get Started):", error);
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 });
  }
}
