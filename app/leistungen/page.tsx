import type { Metadata } from "next";
import ContactDialog from "@/components/contact-dialog";
import FooterCta from "@/components/footer-cta";
import Icon from "@/components/icon";
import PageHeader from "@/components/page-header";

export const metadata: Metadata = {
  title: "Leistungen | Die Glanzfabrik",
  description:
    "Zu unseren beliebtesten Leistungen zählen die Außenreinigung, Innenreinigung, Politur, Geruchtsentfernung, Versiegelung und mehr",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Unsere Leistungen"
        description="Ein sauberes Auto ist nicht nur ein Zeichen von Stolz, sondern auch ein wichtiger Beitrag zur Erhaltung seines Wertes und seiner Langlebigkeit. Wir verwenden ausschliesslich Produkte aus dem europäischen Raum, um sicherzustellen, dass Ihr Fahrzeug die bestmögliche Pflege erhält."
      />

      <div
        className="section"
        itemProp="makesOffer"
        itemScope
        itemType="http://schema.org/Offer"
      >
        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <article
            className="box"
            itemProp="itemOffered"
            itemScope
            itemType="http://schema.org/Service"
          >
            <Icon src="/icons/seat.svg" className="h-12 w-12" />

            <h2 className="h3 mb-4 mt-6" itemProp="name">
              Innenreinigung
            </h2>
            <p itemProp="description">
              Unser Ziel ist es, Ihren Fahrzeuginnenraum in einen makellosen
              Zustand zu versetzen. Wir reinigen nicht nur die Oberflächen,
              sondern kümmern uns auch um die Details wie Armaturenbrett,
              Türverkleidungen, Dachhimmel, Sitze und Fussmatten. Mit speziellen
              Reinigungsmitteln und Techniken sorgen wir dafür, dass Ihr Auto
              nicht nur sauber, sondern auch frisch riecht.
            </p>
          </article>

          <article
            className="box"
            itemProp="itemOffered"
            itemScope
            itemType="http://schema.org/Service"
          >
            <Icon src="/icons/outside.svg" className="h-12 w-12" />

            <h2 className="h3 mb-4 mt-6" itemProp="name">
              Aussenreinigung & Polieren
            </h2>
            <p itemProp="description">
              Die äussere Erscheinung Ihres Fahrzeugs ist oft der erste
              Eindruck, den es hinterlässt. Wir bieten eine gründliche und
              professionelle Aussenreinigung (nur Handwäsche) und Polituren an,
              um Ihr Auto vor den Elementen zu schützen und seinen Glanz zu
              bewahren. Wir verwenden hochwertige Produkte und Methoden, um
              Lackkratzer zu entfernen und eine glänzende Oberfläche zu
              erzielen.
            </p>
          </article>

          <article
            className="box"
            itemProp="itemOffered"
            itemScope
            itemType="http://schema.org/Service"
          >
            <Icon src="/icons/polish.svg" className="h-12 w-12" />

            <h2 className="h3 mb-4 mt-6" itemProp="name">
              Lackaufbereitung & Versiegelung
            </h2>
            <p itemProp="description">
              Für die langanhaltende Schönheit Ihres Fahrzeugs bieten wir
              Lackaufbereitungen und Versiegelungsdienste an. Durch die
              Entfernung von Flugrost, Hologrammen und kleinen Kratzern bringen
              wir den Lack zum Strahlen und schützen ihn anschliessend mit
              hochwertigen Versiegelungen vor Umwelteinflüssen.
            </p>
          </article>

          <article
            className="box"
            itemProp="itemOffered"
            itemScope
            itemType="http://schema.org/Service"
          >
            <Icon src="/icons/tire.svg" className="h-12 w-12" />

            <h2 className="h3 mb-4 mt-6" itemProp="name">
              Felgenreinigung & Felgenpflege
            </h2>
            <p itemProp="description">
              Felgen sind oft starken Verschmutzungen ausgesetzt und bedürfen
              daher einer speziellen Behandlung. Unsere Felgenreinigung und
              Felgenpflege sorgt dafür, dass Ihre Felgen glänzend und frei von
              Bremsstaub und Schmutzpartikeln sind.
            </p>
          </article>

          <article
            className="box"
            itemProp="itemOffered"
            itemScope
            itemType="http://schema.org/Service"
          >
            <Icon src="/icons/sale.svg" className="h-12 w-12" />

            <h2 className="h3 mb-4 mt-6" itemProp="name">
              Verkaufsaufbereitung
            </h2>
            <p itemProp="description">
              Die Verkaufsaufbereitung Ihres Autos ist der Schlüssel, um
              potenzielle Käufer anzuziehen und den Bestmöglichen Verkaufspreis
              zu erzielen. Unsere Autoaufbereitung bietet Ihnen eine umfassende
              Lösung, um Ihr Fahrzeug für den Verkauf optimal vorzubereiten. Auf
              Wunsch erhalten Sie Fotos von allen wichtigen Perspektiven für die
              Verkaufsplattformen.
            </p>
          </article>

          <article
            className="box"
            itemProp="itemOffered"
            itemScope
            itemType="http://schema.org/Service"
          >
            <Icon src="/icons/pickup.svg" className="h-12 w-12" />

            <h2 className="h3 mb-4 mt-6" itemProp="name">
              Bring- & Holdienst
            </h2>
            <p itemProp="description">
              Mit unserem bequemen und beliebten Bring- & Holdienst Ihres
              Fahrzeuges können Sie Ihre gewonnene Zeit in andere Dinge, wie
              z.B. in Familie, Hobby oder Arbeit investieren.
            </p>
          </article>
        </div>

        <ContactDialog />
      </div>

      <FooterCta />
    </>
  );
}
