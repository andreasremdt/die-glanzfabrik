"use server";

import { type RequestOfferSchema, requestOfferSchema } from "@/lib/schemas";
import transporter from "@/lib/mailer";

export default async function requestOffer(data: RequestOfferSchema) {
  let result = requestOfferSchema.safeParse(data);

  if (!result.success) {
    return { error: true };
  }

  try {
    await transporter.sendMail({
      from: `"${result.data.firstname} ${result.data.lastname}" <noreply@dieglanzfabrik.ch>`,
      replyTo: result.data.email,
      to: "info@dieglanzfabrik.ch",
      subject: `Angebotsanfrage von ${result.data.firstname} ${result.data.lastname}`,
      html: `<p>Hallo!</p>  
<p>Sie haben Sie eine Nachricht von <b>${result.data.firstname} ${result.data.lastname}</b> über die <a href="https://die-glanzfabrik.ch">Glanzfabrik GmbH Webseite</a> erhalten:</p>
<p>"${result.data.message}"</p>
<p>Die Kontaktdaten des Absenders sind wie folgt:</p>
<ul>
  <li><b>Name:</b> ${result.data.firstname} ${result.data.lastname}</li>
  <li><b>E-Mail:</b> ${result.data.email}</li>
  <li><b>Adresse:</b> ${result.data.zipcode} ${result.data.city}</li>
  <li><b>Telefon:</b> ${result.data.phone}</li>
  <li><b>Gewünschtes Paket:</b> ${result.data.package}</li>
  <li><b>Fahrzeugtyp:</b> ${result.data.carType}</li>
</ul>
<p>Sie können dem Absender schreiben in dem Sie direkt auf diese E-Mail antworten.</p>`,
    });

    return { error: false };
  } catch (error) {
    return { error: true };
  }
}
