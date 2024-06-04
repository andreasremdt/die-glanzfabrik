"use server";

import { type ContactFormData, contactFormSchema } from "@/lib/schemas";
import { escapeHtml, getEmailTemplate } from "@/lib/utils";

export default async function send(data: ContactFormData) {
  let result = contactFormSchema.safeParse(data);

  if (!result.success) {
    return { error: true };
  }

  try {
    let response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: process.env.RESEND_SENDER,
        replyTo: result.data.email,
        to: process.env.RESEND_RECIPIENT,
        subject: "Anfrage über die-glanzfabrik.ch",
        html: getEmailTemplate(escapeHtml(result.data)),
      }),
    });

    let data = await response.json();

    if (response.ok && data.id) {
      return { error: false };
    }

    throw new Error(response.statusText);
  } catch (error) {
    return { error: true };
  }
}
