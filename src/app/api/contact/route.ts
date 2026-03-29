import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, email, telephone, sujet, message } = body;

    if (!nom || !email || !sujet || !message) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }

    // For now, log the contact form submission.
    // TODO: Integrate with an email service (Resend, SendGrid, etc.)
    console.log("=== Nouveau message de contact ===");
    console.log({ nom, email, telephone, sujet, message });
    console.log("==================================");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
