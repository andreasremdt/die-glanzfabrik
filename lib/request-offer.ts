"use server";

import { type RequestOfferSchema, requestOfferSchema } from "@/lib/schemas";

export default async function requestOffer(data: RequestOfferSchema) {
  let result = requestOfferSchema.safeParse(data);

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
        html: `
          <p>Hallo!</p>  
          <p>Sie haben Sie eine Nachricht von <b>${result.data.firstname} ${result.data.lastname}</b> über die <a href="https://die-glanzfabrik.ch">Glanzfabrik GmbH Webseite</a> erhalten:</p>
          <p>"${result.data.message}"</p>
          <p>Die Kontaktdaten des Absenders sind wie folgt:</p>
          <ul>
            <li><b>Name:</b> ${result.data.firstname} ${result.data.lastname}</li>
            <li><b>E-Mail:</b> ${result.data.email}</li>
            <li><b>Adresse:</b> ${result.data.zipcode} ${result.data.city}</li>
            <li><b>Telefon:</b> ${result.data.phone}</li>
            <li><b>Gewünschtes Paket:</b> ${result.data.package}</li>
            <li><b>Zusatzpakete:</b> ${result.data.extras.length ? `<br />${result.data.extras.join("<br />")}` : "-"}</li>
            <li><b>Fahrzeugtyp:</b> ${result.data.carType}</li>
          </ul>
          <p>Sie können dem Absender schreiben in dem Sie direkt auf diese E-Mail antworten.</p>
        `,
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
