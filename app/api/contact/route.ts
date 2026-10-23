import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_EMAIL;

    if (!apiKey || !recipient) {
      return NextResponse.json(
        { success: false, message: "Contact service is not configured yet." },
        { status: 503 }
      );
    }

    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "Please complete all fields." },
        { status: 400 }
      );
    }

    if (
      name.length > 100 ||
      email.length > 254 ||
      subject.length > 200 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { success: false, message: "One or more fields are too long." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [recipient],
      replyTo: email,
      subject: `Portfolio message: ${subject}`,
      text: [
        `From: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend email error:", error.message);

      return NextResponse.json(
        { success: false, message: "Email delivery failed. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { success: false, message: "Unable to send your message right now." },
      { status: 500 }
    );
  }
}
