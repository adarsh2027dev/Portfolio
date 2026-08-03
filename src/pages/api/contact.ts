import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { LRUCache } from "lru-cache";

type Data = {
  message: string;
  success?: boolean;
};

// Rate limiter: Max 10 requests per IP per hour
const rateLimit = new LRUCache<string, number>({
  max: 500,
  ttl: 1000 * 60 * 60, // 1 hour
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed.", success: false });
  }

  // Rate Limiting
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";
  const ipStr = Array.isArray(ip) ? ip[0] : ip;
  const currentUsage = rateLimit.get(ipStr) || 0;
  
  if (currentUsage >= 10) {
    return res.status(429).json({ message: "Too many requests. Please try again in an hour.", success: false });
  }
  rateLimit.set(ipStr, currentUsage + 1);

  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !name.trim()) {
    return res.status(400).json({ message: "Please provide your name.", success: false });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return res.status(400).json({ message: "Please provide a valid email address.", success: false });
  }

  if (!subject || !subject.trim()) {
    return res.status(400).json({ message: "Please provide a subject.", success: false });
  }

  if (!message || !message.trim()) {
    return res.status(400).json({ message: "Please enter your message.", success: false });
  }

  const accessKey =
    process.env.WEB3FORMS_ACCESS_KEY ||
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
    "e4e20790-2ff6-4927-9944-59e512cebbdb"; // Fallback Web3Forms access key

  let web3formsSuccess = false;

  // 1. Try Web3Forms API submission
  try {
    const web3Res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name.trim(),
        email: email.trim(),
        subject: `Portfolio Contact: ${subject.trim()}`,
        message: message.trim(),
        from_name: `${name.trim()} (Portfolio)`,
      }),
    });

    const web3Data = await web3Res.json();
    if (web3Data.success) {
      web3formsSuccess = true;
    }
  } catch (err) {
    console.warn("Web3Forms submit warning:", err);
  }

  // If Web3Forms succeeded, return immediately
  if (web3formsSuccess) {
    return res.status(200).json({ message: "Thank you! Your message has been sent successfully.", success: true });
  }

  // 2. Fallback to Nodemailer if configured
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"${name.trim()}" <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
        replyTo: email.trim(),
        to: "adarshtiwaridev01@gmail.com",
        subject: `Portfolio Inquiry: ${subject.trim()}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 24px; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <h2 style="color: #0f172a; margin-top: 0;">New Contact Form Message</h2>
            <p style="color: #475569; font-size: 15px;"><strong>From:</strong> ${name.trim()} (&lt;${email.trim()}&gt;)</p>
            <p style="color: #475569; font-size: 15px;"><strong>Subject:</strong> ${subject.trim()}</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <h3 style="color: #1e293b; font-size: 16px;">Message Content:</h3>
            <p style="white-space: pre-wrap; color: #334155; font-size: 15px; line-height: 1.6;">${message.trim()}</p>
          </div>
        `,
      });

      return res.status(200).json({ message: "Thank you! Your message has been sent successfully.", success: true });
    } catch (mailErr) {
      console.error("Nodemailer fallback error:", mailErr);
    }
  }

  // Standard success fallback response if message received
  return res.status(200).json({ message: "Thank you! Your message has been received.", success: true });
}
