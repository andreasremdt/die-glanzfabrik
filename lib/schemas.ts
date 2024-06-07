import z from "zod";

export let contactFormSchema = z.object({
  firstname: z
    .string({
      required_error: "Bitte geben Sie Ihren Vornamen an.",
    })
    .min(1, "Bitte geben Sie Ihren Vornamen an."),
  lastname: z
    .string({ required_error: "Bitte geben Sie Ihren Nachnamen an." })
    .min(1, "Bitte geben Sie Ihren Nachnamen an."),
  zipcode: z
    .string({ required_error: "Bitte geben Sie Ihre Postleitzahl an." })
    .optional(),
  city: z
    .string({ required_error: "Bitte geben Sie Ihren Wohnort an." })
    .optional(),
  email: z
    .string({
      required_error: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
    })
    .email("Bitte geben Sie eine gültige E-Mail-Adresse an."),
  phone: z
    .string({
      required_error: "Bitte geben Sie Ihre Telefonnummer an.",
    })
    .min(1, "Bitte geben Sie Ihre Telefonnummer an."),
  message: z
    .string({ required_error: "Bitte schreiben Sie mindestens 10 Zeichen." })
    .min(10, "Bitte schreiben Sie mindestens 10 Zeichen."),
});

export type ContactFormData = z.output<typeof contactFormSchema>;
export type ContactFormSchema = z.infer<typeof contactFormSchema>;

export let requestOfferSchema = contactFormSchema.extend({
  package: z.string(),
  extras: z.array(z.string()),
  carType: z.string(),
});

export type RequestOfferData = z.output<typeof requestOfferSchema>;
export type RequestOfferSchema = z.infer<typeof requestOfferSchema>;
