import { NextRequest, NextResponse } from 'next/server';

// PLACEHOLDER: Connect this endpoint to your CRM / email service / database.
// Suggested integrations: Resend, Postmark, Notion API, Airtable, or a simple Google Sheet webhook.
// Auto-reply logic: send confirmation email to `email` with subject "Wir haben deine Anfrage erhalten".

interface CheckRequestBody {
  domain: string;
  email: string;
}

export async function POST(req: NextRequest) {
  let body: CheckRequestBody;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { domain, email } = body;

  if (!domain || !email) {
    return NextResponse.json({ error: 'domain and email are required' }, { status: 422 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 422 });
  }

  // PLACEHOLDER: Insert your backend logic here.
  // Example: await sendToAirtable({ domain, email });
  // Example: await sendConfirmationEmail({ to: email, domain });

  console.log(`[BFSG-Check] New request: domain=${domain}, email=${email}`);

  return NextResponse.json(
    { success: true, message: 'Anfrage erhalten. Bericht innerhalb von 24h.' },
    { status: 200 }
  );
}
