"use client";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { type RequestOfferSchema, requestOfferSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import RadioGroup from "@/components/radio-group";
import { cn } from "@/lib/utils";
import Checkbox from "@/components/checkbox";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import Alert from "@/components/alert";
import requestOffer from "@/lib/request-offer";

const packages = [
  {
    name: "Komplettpaket Basic",
    description: "ab 199 CHF",
  },
  {
    name: "Komplettpaket Premium",
    description: "ab 399 CHF",
  },
  {
    name: "Aussenreinigung Basic",
    description: "ab 79 CHF",
  },
  {
    name: "Aussenreinigung Premium",
    description: "ab 149 CHF",
  },
  {
    name: "Innenreinigung Basic",
    description: "ab 129 CHF",
  },
  {
    name: "Innenreinigung Premium",
    description: "ab 259 CHF",
  },
];

const cars = [
  { name: "Kleinwagen & 2-Sitzer" },
  { name: "Mittelklasse & Sportwage" },
  { name: "Oberklasse & Kombis" },
  { name: "SUVs & große Limousinen" },
  { name: "Nutzfahrzeuge, Vans & Pick-Ups" },
];

export default function ContactDialog() {
  let [open, setOpen] = useState(false);
  let [loading, setLoading] = useState(false);
  let [step, setStep] = useState(1);
  let ref = useRef<HTMLFormElement>(null);
  let [state, setState] = useState({
    error: false,
    sent: false,
  });

  let {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    setError,
    clearErrors,
    reset,
    watch,
  } = useForm<RequestOfferSchema>({
    defaultValues: {
      extras: [],
    },
    resolver: zodResolver(requestOfferSchema),
  });

  function handleNext() {
    if (step === 1 && !getValues("package")) {
      setError("package", { message: "Bitte wählen Sie ein Paket aus." });

      return;
    }

    if (step === 2 && !getValues("carType")) {
      setError("carType", { message: "Bitte geben Sie Ihren Fahrzeugtyp an." });

      return;
    }

    if (step === 3 && ref.current) {
      ref.current.requestSubmit();

      return;
    }

    if (step < 3) {
      setStep((previous) => previous + 1);
    }
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="button-primary mx-auto block"
      >
        Angebot einholen
      </button>

      <Transition
        show={open}
        afterLeave={() => {
          setStep(1);
          setState({ error: false, sent: false });
          reset();
        }}
      >
        <Dialog onClose={handleClose} className="relative z-50">
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm"
              aria-hidden="true"
            />
          </TransitionChild>

          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <DialogPanel className="fancy-border max-h-[90vh] max-w-3xl overflow-y-auto rounded-xl bg-neutral-950/90 p-8 shadow-xl backdrop-blur-sm">
                <DialogTitle className="h3 mb-2 font-bold">
                  Angebot einholen
                </DialogTitle>
                <Description className="mb-8 border-b border-neutral-800 pb-8">
                  Gerne erstellen wir Ihnen ein individuelles Angebot für Ihr
                  Fahrzeug. Bitte füllen Sie dafür das Formular aus.
                </Description>

                <form
                  id="details"
                  ref={ref}
                  onSubmit={handleSubmit(async (data) => {
                    setLoading(true);

                    const result = await requestOffer(data);

                    setStep(5);
                    setState({ sent: true, error: result.error });
                    setLoading(false);
                  })}
                >
                  <fieldset className={cn({ hidden: step !== 1 })}>
                    <legend className="mb-4">
                      Welches Paket möchten Sie buchen?
                    </legend>

                    <RadioGroup
                      selected={watch("package")}
                      onChange={(selected) => {
                        clearErrors("package");
                        setValue("package", selected);
                      }}
                      className="grid grid-cols-2 gap-2"
                      options={packages}
                    />

                    {errors.package?.message ? (
                      <p
                        className="mt-2 text-sm text-rose-300"
                        aria-live="assertive"
                      >
                        {errors.package.message}
                      </p>
                    ) : null}
                  </fieldset>

                  <fieldset className={cn({ hidden: step !== 2 })}>
                    <legend className="mb-4">
                      Welchen Fahrzeugtyp haben Sie?
                    </legend>

                    <RadioGroup
                      selected={watch("carType")}
                      onChange={(selected) => {
                        clearErrors("carType");
                        setValue("carType", selected);
                      }}
                      className="grid grid-cols-2 gap-2"
                      options={cars}
                    />

                    {errors.carType?.message ? (
                      <p
                        className="mt-2 text-sm text-rose-300"
                        aria-live="assertive"
                      >
                        {errors.carType.message}
                      </p>
                    ) : null}
                  </fieldset>

                  <fieldset className={cn({ hidden: step !== 3 })}>
                    <legend className="mb-4">Ihre Daten</legend>

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
                          required:
                            "Bitte geben Sie eine gültige E-Mail-Adresse an.",
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
                        required:
                          "Bitte schreiben Sie mindestens 10 Buchstaben.",
                        minLength: 10,
                      })}
                    />
                  </fieldset>

                  {state.sent ? (
                    <div>
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
                    </div>
                  ) : null}
                </form>

                <div className="mt-8 flex justify-end gap-2 border-t border-neutral-800 pt-8">
                  <button
                    className="button-secondary"
                    disabled={loading}
                    onClick={() => {
                      if (step > 1 && !state.sent) {
                        setStep((previous) => previous - 1);
                      } else {
                        handleClose();
                      }
                    }}
                  >
                    {step === 1 || state.sent ? "Schließen" : "Zurück"}
                  </button>
                  {!state.sent ? (
                    <button
                      className="button-primary"
                      form={step === 3 ? "details" : undefined}
                      onClick={handleNext}
                      type="button"
                      disabled={loading}
                    >
                      {loading
                        ? "Bitte warten..."
                        : step === 3
                          ? "Anfrage senden"
                          : "Weiter"}
                    </button>
                  ) : null}
                </div>
              </DialogPanel>
            </div>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
}
