import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PageHeader from "@/components/page-header";
import ContactForm from "@/components/contact-form";

let Leaflet = dynamic(() => import("@/components/leaflet-map"), { ssr: false });

export const metadata: Metadata = {
  title: "Kontakt | Die Glanzfabrik",
  description:
    "Wir erstellen Ihnen gerne ein individuelles Angebot für Ihr Fahrzeug. Nehmen Sie bequem Kontakt mit uns auf und wir kümmern uns um den Rest",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Kontakt & Anfahrt"
        description="Fragen, Anregungen oder Feedback? Wir freuen uns von Ihnen zu hören! Bitte zögern Sie nicht, uns telefonisch oder per E-Mail zu kontaktieren. Gerne können Sie auch unser Kontaktformular nutzen. Wir stehen Ihnen gerne zur Verfügung."
      />
      <div className="section mb-4 grid grid-cols-1 gap-4 pb-0 md:gap-8 lg:-mb-28 lg:grid-cols-2">
        <div className="pt-6">
          <div className="mb-8 grid grid-cols-2 gap-8">
            <div>
              <h2 className="h3 mb-4">Kontakt</h2>
              <div
                className="flex gap-3"
                itemProp="address"
                itemScope
                itemType="http://schema.org/PostalAddress"
              >
                <svg viewBox="0 0 24 24" className="mt-[6px] h-4 w-4">
                  <path
                    fill="currentColor"
                    d="M22 10c0-2.761-1.12-5.263-2.929-7.071s-4.31-2.929-7.071-2.929-5.263 1.12-7.071 2.929-2.929 4.31-2.929 7.071c0 0.569 0.053 1.128 0.15 1.676 0.274 1.548 0.899 3.004 1.682 4.32 2.732 4.591 7.613 7.836 7.613 7.836 0.331 0.217 0.765 0.229 1.109 0 0 0 4.882-3.245 7.613-7.836 0.783-1.316 1.408-2.772 1.682-4.32 0.098-0.548 0.151-1.107 0.151-1.676zM20 10c0 0.444-0.041 0.887-0.119 1.328-0.221 1.25-0.737 2.478-1.432 3.646-1.912 3.214-5.036 5.747-6.369 6.74-1.398-0.916-4.588-3.477-6.53-6.74-0.695-1.168-1.211-2.396-1.432-3.646-0.077-0.441-0.118-0.884-0.118-1.328 0-2.209 0.894-4.208 2.343-5.657s3.448-2.343 5.657-2.343 4.208 0.894 5.657 2.343 2.343 3.448 2.343 5.657zM16 10c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM14 10c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414z"
                  ></path>
                </svg>
                <p>
                  Glanzfabrik GmbH
                  <br />
                  <span itemProp="streetAddress">Lörracherstrasse 119</span>
                  <br />
                  <span itemProp="postalCode">4125</span>
                  <span itemProp="addressLocality">Riehen</span>
                  <br />
                  <span itemProp="addressCountry">Schweiz</span>
                </p>
              </div>

              <ul className="mt-4">
                <li>
                  <a
                    href="tel:+41 78 303 66 90"
                    className="link flex items-center gap-3"
                    itemProp="telephone"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4">
                      <path
                        fill="currentColor"
                        d="M23 16.92c0.016-0.714-0.236-1.404-0.673-1.943-0.46-0.566-1.129-0.967-1.925-1.080-0.8-0.098-1.695-0.314-2.586-0.646-0.433-0.159-0.893-0.218-1.344-0.174-0.663 0.064-1.307 0.349-1.819 0.855l-0.72 0.72c-1.77-1.117-3.36-2.667-4.583-4.589l0.726-0.726c0.322-0.33 0.563-0.726 0.707-1.156 0.212-0.632 0.214-1.336-0.039-2.011-0.289-0.753-0.518-1.644-0.644-2.595-0.104-0.714-0.456-1.345-0.963-1.804-0.539-0.486-1.256-0.779-2.027-0.771h-2.996c-0.088 0-0.182 0.004-0.273 0.012-0.824 0.075-1.542 0.478-2.033 1.066s-0.758 1.367-0.683 2.199c0.3 3.076 1.365 6.243 3.216 9.102 1.502 2.413 3.648 4.623 6.298 6.306 2.568 1.697 5.684 2.862 9.086 3.231 0.092 0.009 0.191 0.013 0.288 0.013 0.828-0.003 1.578-0.343 2.118-0.887s0.873-1.297 0.87-2.121zM21 16.92v3c0.001 0.28-0.109 0.53-0.29 0.712s-0.429 0.295-0.706 0.296c-3.149-0.336-5.961-1.391-8.263-2.912-2.428-1.543-4.359-3.537-5.702-5.694-1.697-2.62-2.655-5.481-2.924-8.238-0.024-0.268 0.064-0.526 0.229-0.724s0.403-0.33 0.678-0.355l3.088-0.005c0.271-0.003 0.507 0.094 0.687 0.256 0.17 0.154 0.288 0.366 0.323 0.608 0.142 1.072 0.408 2.117 0.757 3.025 0.081 0.216 0.080 0.447 0.010 0.658-0.049 0.145-0.131 0.281-0.242 0.395l-1.262 1.261c-0.324 0.324-0.379 0.814-0.162 1.201 1.584 2.785 3.839 4.957 6.381 6.378 0.397 0.222 0.882 0.144 1.195-0.166l1.27-1.27c0.166-0.164 0.377-0.257 0.598-0.279 0.152-0.015 0.31 0.005 0.459 0.060 1.022 0.381 2.070 0.636 3.034 0.754 0.241 0.034 0.462 0.166 0.615 0.355 0.147 0.181 0.231 0.412 0.226 0.682z"
                      ></path>
                    </svg>
                    +41 78 303 66 90
                  </a>
                  <a
                    href="mailto:info@dieglanzfabrik.ch"
                    className="link flex items-center gap-3"
                    itemProp="email"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4">
                      <path
                        fill="currentColor"
                        d="M3 7.921l8.427 5.899c0.34 0.235 0.795 0.246 1.147 0l8.426-5.899v10.079c0 0.272-0.11 0.521-0.295 0.705s-0.433 0.295-0.705 0.295h-16c-0.272 0-0.521-0.11-0.705-0.295s-0.295-0.433-0.295-0.705zM1 5.983c0 0.010 0 0.020 0 0.030v11.987c0 0.828 0.34 1.579 0.88 2.12s1.292 0.88 2.12 0.88h16c0.828 0 1.579-0.34 2.12-0.88s0.88-1.292 0.88-2.12v-11.988c0-0.010 0-0.020 0-0.030-0.005-0.821-0.343-1.565-0.88-2.102-0.541-0.54-1.292-0.88-2.12-0.88h-16c-0.828 0-1.579 0.34-2.12 0.88-0.537 0.537-0.875 1.281-0.88 2.103zM20.894 5.554l-8.894 6.225-8.894-6.225c0.048-0.096 0.112-0.183 0.188-0.259 0.185-0.185 0.434-0.295 0.706-0.295h16c0.272 0 0.521 0.11 0.705 0.295 0.076 0.076 0.14 0.164 0.188 0.259z"
                      ></path>
                    </svg>
                    info@dieglanzfabrik.ch
                  </a>
                </li>
              </ul>
            </div>
            <div
              itemProp="openingHoursSpecification"
              itemScope
              itemType="http://schema.org/OpeningHoursSpecification"
            >
              <h2 className="h3 mb-4">Öffnungszeiten</h2>
              <ul>
                <li>
                  <span itemProp="dayOfWeek">Montag - Freitag</span>:{" "}
                  <span itemProp="opens">nach Vereinbarung</span>
                </li>
                <li>
                  <span itemProp="dayOfWeek">Samstag</span>:{" "}
                  <span itemProp="opens">08:00</span> -{" "}
                  <span itemProp="closes">15:00</span>
                </li>
                <li>Sonn- & Feiertage: geschlossen</li>
              </ul>
            </div>
          </div>

          <h2 className="h3 mb-4">Anfahrt & Parkmöglichkeiten</h2>
          <p className="mb-4">
            Die Einfahrt zur Halle befindet sich in der Strasse &quot;Hinter der
            Mühle&quot;. Parkmöglichkeiten (Blaue Zone) finden Sie in der
            Strasse ebenfalls.
          </p>

          <p className="mb-8">
            Wir freuen uns drauf, Sie und Ihr Fahrzeug bei uns in der
            Glanzfabrik GmbH in Riehen begrüssen zu dürfen.
          </p>

          <div className="box">
            <p className="mb-4">
              <b className="text-white">Keine Zeit zu uns zu kommen?</b> Kein
              Problem mit unserem Bring- & Holdienst (nach Absprache). *
            </p>
            <p className="text-sm text-white/60">
              * Gilt nur für innerhalb der Schweiz und bis zu 10 km Entfernung.
              Ab 10 km zuzüglich 0,70 pro km
            </p>
          </div>
        </div>

        <ContactForm />
      </div>

      <div className="skew-t h-[70vw] lg:h-[600px]">
        <Leaflet className="h-full" />
      </div>
    </>
  );
}
