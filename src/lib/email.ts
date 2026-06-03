import { render } from "@react-email/components";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.BREVO_SMTP_SERVER,
  port: Number(process.env.BREVO_SMTP_PORT) || 587,
  secure: false, // Use TLS (port 587 uses STARTTLS)
  auth: {
    user: process.env.BREVO_SMTP_LOGIN,
    pass: process.env.BREVO_SMTP_PASSWORD,
  },
});

export type SendEmailProps = {
  to: string | string[];
  subject: string;
  body: React.ReactElement;
  from?: string;
};
export async function sendEmail({ to, subject, body, from }: SendEmailProps) {
  try {
    // Convert React element to HTML string
    const emailHtml = await render(body);

    const info = await transporter.sendMail({
      from: from ?? `"Shop Stack" <${process.env.BREVO_SENDER_EMAIL}>`,
      to: Array.isArray(to) ? to.join(", ") : to,
      subject,
      html: emailHtml,
    });

    return { messageId: info.messageId };
  } catch (err) {
    console.error("Error sending email:", err);
    throw err;
  }
}
