import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      organization,
      phone,
      email,
      service,
      siteType,
      city,
      message,
      websiteHoneypot,
    } = body;

    // 1. Honeypot check for spam bots
    if (websiteHoneypot) {
      // Quietly reject spam bots without error
      return NextResponse.json({ success: true, message: "Demande reçue" });
    }

    // 2. Server-side validation
    if (!fullName || !phone || !email || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Veuillez remplir tous les champs obligatoires (Nom, Téléphone, Email, Service et Message).",
        },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "L'adresse e-mail saisie n'est pas valide.",
        },
        { status: 400 }
      );
    }

    // 3. Log quote request server side
    console.log("[ATHENA SECURITY DEVIS]", {
      timestamp: new Date().toISOString(),
      fullName,
      organization: organization || "N/A",
      phone,
      email,
      service,
      siteType,
      city,
      messageLength: message.length,
    });

    // Note: In production with RESEND_API_KEY or SMTP configured, send email to athenasecurit@gmail.com

    return NextResponse.json({
      success: true,
      message: "Votre demande de devis a bien été transmise à l'équipe ATHENA SECURITY SARL.",
    });
  } catch (error) {
    console.error("API Devis error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Une erreur interne est survenue lors du traitement de la demande.",
      },
      { status: 500 }
    );
  }
}
