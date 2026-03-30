import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const SUJETS: Record<string, string> = {
  bilan: "Bilan de Comp\u00e9tences",
  sst: "Formation SST initiale",
  "mac-sst": "Recyclage MAC SST",
  autre: "Autre demande",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, email, telephone, sujet, message } = body;

    if (!nom || !email || !sujet || !message) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants" },
        { status: 400 }
      );
    }

    const sujetLabel = SUJETS[sujet] || sujet;

    await resend.emails.send({
      from: "Formations And Co <contact@formations-and-co.com>",
      to: "formationsetco@gmail.com",
      replyTo: email,
      subject: `Nouvelle demande : ${sujetLabel} - ${nom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0F172A; border-bottom: 2px solid #06B6D4; padding-bottom: 10px;">
            Nouvelle demande de contact
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Nom</td>
              <td style="padding: 8px 0; color: #4B5563;">${nom}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #06B6D4;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">T\u00e9l\u00e9phone</td>
              <td style="padding: 8px 0; color: #4B5563;">${telephone || "Non renseign\u00e9"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Sujet</td>
              <td style="padding: 8px 0; color: #4B5563;">${sujetLabel}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #F0FDFA; border-radius: 8px; border-left: 4px solid #06B6D4;">
            <p style="font-weight: bold; color: #374151; margin: 0 0 8px 0;">Message :</p>
            <p style="color: #4B5563; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #9CA3AF;">
            Ce message a \u00e9t\u00e9 envoy\u00e9 depuis le formulaire de contact de formations-and-co.com
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi" },
      { status: 500 }
    );
  }
}
