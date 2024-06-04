"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import Alert from "@/components/alert";
import { type ContactFormSchema, contactFormSchema } from "@/lib/schemas";
import send from "@/lib/send-email";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    error: false,
    sent: false,
  });

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  return (
    <form
      method="POST"
      className="box relative z-10 backdrop-blur-md"
      aria-live="polite"
      onSubmit={handleSubmit(async (data) => {
        setLoading(true);

        const result = await send(data);

        setState({ sent: true, error: result.error });
        setLoading(false);
      })}
    >
      <h2 className="h3 mb-4">Senden Sie uns eine Anfrage</h2>
      <p className="mb-4">
        Sehr gerne erstellen wir Ihnen ein auf Sie zugeschnittenes Angebot.
        Bitte teilen Sie uns folgendes mit:
      </p>
      <ul className="mb-8 list-disc border-b border-white/15 pb-8 pl-6">
        <li>welche Dienstleistungen Sie sich wünschen</li>
        <li>um welches Fahrzeug es sich handelt (Marke & Typ)</li>
        <li>unter welcher Telefonnummer wir Sie erreichen können</li>
      </ul>

      <div
        className={cn("transition-opacity", {
          "pointer-events-none opacity-50 blur-sm": state.sent,
        })}
      >
        <div className="mb-4 flex flex-col gap-4 sm:flex-row">
          <Input
            label="Vorname"
            required
            error={errors.firstname?.message}
            className="sm:w-1/2"
            id="firstname"
            {...register("firstname", {
              required: "Bitte geben Sie Ihren Vornamen an.",
            })}
          />
          <Input
            label="Nachname"
            required
            error={errors.lastname?.message}
            className="sm:w-1/2"
            id="lastname"
            {...register("lastname", {
              required: "Bitte geben Sie Ihren Nachnamen an.",
            })}
          />
        </div>
        <div className="mb-4 flex gap-4">
          <Input
            label="Postleitzahl"
            className="w-1/3"
            id="zipcode"
            {...register("zipcode")}
          />
          <Input
            label="Wohnort"
            className="w-2/3"
            id="city"
            {...register("city")}
          />
        </div>
        <div className="mb-4 flex flex-col gap-4 sm:flex-row">
          <Input
            label="E-Mail-Adresse"
            required
            type="email"
            error={errors.email?.message}
            className="sm:w-1/2"
            id="email"
            {...register("email", {
              required: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
            })}
          />
          <Input
            label="Telefonnummer"
            required
            error={errors.phone?.message}
            className="sm:w-1/2"
            id="phone"
            {...register("phone", {
              required: "Bitte geben Sie Ihre Telefonnummer an.",
            })}
          />
        </div>
        <Textarea
          label="Ihre Nachricht"
          required
          error={errors.message?.message}
          className="mb-4"
          id="message"
          {...register("message", {
            required: "Bitte schreiben Sie mindestens 10 Buchstaben.",
            minLength: 10,
          })}
        />
      </div>

      {state.sent ? (
        <Alert
          title={
            state.error
              ? "Das hat leider nicht geklappt..."
              : "Vielen Dank für Ihre Nachricht."
          }
          description={
            state.error
              ? "Leider konnte Ihre Anfrage nicht gesendet werden. Bitte versuchen Sie es später erneut oder schreiben uns direkt per E-Mail."
              : "Wir werden uns schnellst möglich bei Ihnen melden."
          }
        />
      ) : null}

      <button
        type="submit"
        className="button-primary w-full justify-center"
        disabled={loading || state.sent}
      >
        {loading ? "Bitte warten..." : "Anfrage senden"}
      </button>
    </form>
  );
}
