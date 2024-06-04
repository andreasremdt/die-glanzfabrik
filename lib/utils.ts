import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ContactFormData } from "@/lib/schemas";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export function escapeHtml(data: ContactFormData) {
  function replace(html: string) {
    return html
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => [key, replace(value)]),
  ) as ContactFormData;
}

export function getEmailTemplate(data: ContactFormData) {
  return `
    <p>Hallo!</p>  
    <p>Sie haben Sie eine Nachricht von <b>${data.firstname} ${data.lastname}</b> über die <a href="https://die-glanzfabrik.ch">Glanzfabrik GmbH Webseite</a> erhalten:</p>
    <p>"${data.message}"</p>
    <p>Die Kontaktdaten des Absenders sind wie folgt:</p>
    <ul>
      <li><b>Name:</b> ${data.firstname} ${data.lastname}</li>
      <li><b>E-Mail:</b> ${data.email}</li>
      <li><b>Adresse:</b> ${data.zipcode} ${data.city}</li>
      <li><b>Telefon:</b> ${data.phone}</li>
    </ul>
    <p>Sie können dem Absender schreiben in dem Sie direkt auf diese E-Mail antworten.</p>
  `;
}
