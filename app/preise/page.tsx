import type { Metadata } from "next";
import Image from "next/image";
import FooterCta from "@/components/footer-cta";
import PageHeader from "@/components/page-header";
import Outside from "@/public/images/ford-mustang-outside.jpg";
import Inside from "@/public/images/ford-mustang-inside.jpg";
import ExtraServices from "@/public/images/ford-mustang-aussenwaesche.jpg";
import PricingTable from "@/components/pricing-table";
import ContactDialog from "@/components/contact-dialog";

export const metadata: Metadata = {
  title: "Preise | Die Glanzfabrik",
  description:
    "Unsere Preise sind transparent und fair. Wir bieten verschiedene Pakete mit Individualisierungsoptionen an, welche perfekt auf Sie zugeschnitten sind.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Unsere Preise"
        description="Unsere Preise sind transparent und fair. Wir bieten verschiedene Pakete mit Individualisierungsoptionen an, welche
      perfekt auf Sie zugeschnitten sind."
      />

      <section
        className="section"
        itemProp="hasOfferCatalog"
        itemScope
        itemType="http://schema.org/OfferCatalog"
      >
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="h2 mb-4 mt-2" itemProp="name">
            Aussenreinigung
          </h2>
          <p className="md:text-lg" itemProp="description">
            Für die Aussenreinigung verwenden wir dem Verschmutzungsgrad
            entsprechende Vorreiniger. Um Ihr Fahrzeug noch mehr zum Glänzen zu
            bringen, können Sie eine einstufige oder eine mehrstufige
            Maschinenpolitur sowie eine passende Lackversiegelung dazu buchen
            (siehe Zusatzleistungen).
          </p>
        </header>

        <div className="my-16 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <figure className="gradient-image hidden overflow-hidden rounded-2xl lg:block">
            <Image
              placeholder="blur"
              src={Outside}
              alt=""
              quality={75}
              loading="eager"
              className="h-full object-cover"
            />
          </figure>
          <article
            className="box flex flex-col items-start p-0"
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/Offer"
          >
            <div className="p-4 sm:p-6">
              <h3 className="mb-2 font-serif text-xl">
                <span itemProp="price">ab 79</span>
                <span itemProp="priceCurrency">CHF</span>
              </h3>
              <p
                className="h2 mb-8 w-full border-b border-white/15 pb-8"
                itemProp="name"
              >
                Basic
              </p>

              <ul className="mb-8 list-disc pl-6" itemProp="description">
                <li>Gründliche Handwäsche mit Vorreinigung</li>
                <li>Insekten-, Teer- & Flugrostentfernung</li>
                <li>Reinigung der Einstiege & Falze</li>
                <li>Reinigung der Glasflächen</li>
                <li>Reinigung der Radkästen</li>
                <li>Reinigung des Tankdeckels</li>
                <li>Reinigung & Schwärzung der Reifen</li>
                <li>Felgenreinigung</li>
                <li>Gründliche Abtrocknung mittels weichen Microfasertücher</li>
                <li>Optional buchbar: siehe Zusatzleistungen</li>
              </ul>
            </div>

            <PricingTable prices={[79, 89, 89, 89, 89, 20]} />
          </article>

          <article
            className="box flex flex-col items-start p-0"
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/Offer"
          >
            <div className="p-4 sm:p-6">
              <h3 className="mb-2 font-serif text-xl">
                <span itemProp="price">ab 149</span>
                <span itemProp="priceCurrency">CHF</span>
              </h3>
              <p
                className="h2 mb-8 w-full border-b border-white/15 pb-8"
                itemProp="name"
              >
                Premium
              </p>

              <ul className="mb-8 list-disc pl-6" itemProp="description">
                <li>Alle Leistungen aus dem Basispaket</li>
                <li>Reinigung & Auffrischung der Kunststoffteile</li>
                <li>Reinigung & Schwärzung der Reifen</li>
                <li>Reinigung aller Spalten mittels Pinsel und Dampf</li>
                <li>Reinigung der Motorhaube (innen)</li>
                <li>Reinigung des Motorraums (oberflächig)</li>
                <li>Sprühwachsversiegelung (Lackschutz)</li>
                <li>Optional buchbar: siehe Zusatzleistungen</li>
              </ul>
            </div>

            <PricingTable prices={[149, 179, 179, 179, 179, 20]} />
          </article>
        </div>

        <ContactDialog />
      </section>

      <section
        className="section pt-0"
        itemProp="hasOfferCatalog"
        itemScope
        itemType="http://schema.org/OfferCatalog"
      >
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="h2 mb-4 mt-2" itemProp="name">
            Innenreinigung
          </h2>
          <p className="md:text-lg" itemProp="description">
            Für die Innenreinigung verwenden wir hochwertige Produkte und
            Materialien. Auf Wunsch ganz ohne Chemie. Bei extrem stark
            verschmutzten Innenräumen richtet sich der Preis nach Aufwand und
            Absprache mit Ihnen.
          </p>
        </header>

        <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <figure className="gradient-image hidden overflow-hidden rounded-2xl lg:block">
            <Image
              placeholder="blur"
              src={Inside}
              alt=""
              quality={75}
              className="h-full object-cover"
            />
          </figure>
          <article
            className="box flex flex-col items-start p-0"
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/Offer"
          >
            <div className="p-4 sm:p-6">
              <h3 className="mb-2 font-serif text-xl">
                <span itemProp="price">ab 129</span>
                <span itemProp="priceCurrency">CHF</span>
              </h3>
              <p className="h2 mb-2" itemProp="name">
                Basic
              </p>
              <p className="mb-8 w-full border-b border-white/15 pb-8 text-sm">
                Auf Wunsch ohne chemische Produkte
              </p>

              <ul className="mb-8 list-disc pl-6" itemProp="description">
                <li>
                  Saugen des kompletten Innenraumes (inkl. Sitze und Kofferraum)
                </li>
                <li>Reinigung der Einstiege</li>
                <li>Leder- oder Stoffsitze feucht abwischen</li>
                <li>
                  Reinigung & Auffrischung des Cockpit mittels Interieur
                  Reiniger und weichen Microfasertücher
                </li>
                <li>
                  Reinigung und Auffrischung der Türverkleidungen und
                  Ablagefächer mittels Interieurreiniger
                </li>
                <li>Reinigung der Glasflächen inkl. Rückspiegel</li>
                <li>Reinigung der Pedalerie und Fussstütze</li>
                <li>Optional buchbar: siehe Zusatzleistungen</li>
              </ul>
            </div>

            <PricingTable prices={[129, 149, 179, 179, 199]} />
          </article>

          <article
            className="box flex flex-col items-start p-0"
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/Offer"
          >
            <div className="p-4 sm:p-6">
              <h3 className="mb-2 font-serif text-xl">
                <span itemProp="price">ab 259</span>
                <span itemProp="priceCurrency">CHF</span>
              </h3>
              <p className="h2 mb-2" itemProp="name">
                Premium
              </p>
              <p className="mb-8 w-full border-b border-white/15 pb-8 text-sm">
                Auf Wunsch ohne chemische Produkte
              </p>

              <ul className="mb-8 list-disc pl-6" itemProp="description">
                <li>Alle Leistungen aus dem Basispaket</li>
                <li>Reinigung der Pedalerie und Fussstütze</li>
                <li>
                  Reinigung der Ledersitze mittels Lederreiniger und Lederpflege
                </li>
                <li>
                  Shampoonieren der Stoffsitze, Fussmatten und Kofferraummatte
                </li>
                <li>Reinigung und Pflege des Lenkrades</li>
                <li>Reinigung der Sonnenblenden</li>
                <li>Kunststoffpflege</li>
                <li>Gummipflege</li>
                <li>Optional buchbar: siehe Zusatzleistungen</li>
              </ul>
            </div>

            <PricingTable prices={[259, 299, 349, 349, 399]} />
          </article>
        </div>

        <ContactDialog />
      </section>

      <section
        className="section pt-0"
        itemProp="hasOfferCatalog"
        itemScope
        itemType="http://schema.org/OfferCatalog"
      >
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="h2 mb-4 mt-2" itemProp="name">
            Komplettpaket
          </h2>
          <p className="md:text-lg" itemProp="description">
            Dieses Paket beinhaltet die Innen- und Aussenreinigung. Sie können
            Ihre Kombination beliebig zusammenstellen (bspw. Aussenreinigung
            Basic und Innenreinigung Premium).
          </p>
        </header>

        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <article
            className="box flex flex-col items-start"
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/Offer"
          >
            <h3 className="mb-2 font-serif text-xl">
              <span itemProp="price">ab 199</span>
              <span itemProp="priceCurrency">CHF</span>
            </h3>
            <p className="h2 mb-2" itemProp="name">
              Basic
            </p>
            <p className="mb-8 w-full border-b border-white/15 pb-8 text-sm">
              Auf Wunsch ohne chemische Produkte
            </p>

            <ul className="list-disc pl-6" itemProp="description">
              <li>
                Kombination der <b>Basic</b> Aussen- und Innenreinigung
              </li>
              <li>Optional buchbar: siehe Zusatzleistungen</li>
            </ul>
          </article>

          <article
            className="box flex flex-col items-start"
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/Offer"
          >
            <h3 className="mb-2 font-serif text-xl">
              <span itemProp="price">ab 399</span>
              <span itemProp="priceCurrency">CHF</span>
            </h3>
            <p className="h2 mb-2" itemProp="name">
              Premium
            </p>
            <p className="mb-8 w-full border-b border-white/15 pb-8 text-sm">
              Auf Wunsch ohne chemische Produkte
            </p>

            <ul className="list-disc pl-6" itemProp="description">
              <li>
                Kombination der <b>Premium</b> Aussen- und Innenreinigung
              </li>
              <li>Optional buchbar: siehe Zusatzleistungen</li>
            </ul>
          </article>
        </div>

        <ContactDialog />
      </section>

      <section
        className="section pt-0"
        itemProp="hasOfferCatalog"
        itemScope
        itemType="http://schema.org/OfferCatalog"
      >
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="h2 mb-4 mt-2" itemProp="name">
            Zusatzleistungen
          </h2>
          <p className="md:text-lg" itemProp="description">
            Alle aufgeführten Zusatzleistungen sind einzeln buchbar. Ist Ihre
            gewünschte Dienstleistung nicht dabei? Bitte sprechen Sie uns darauf
            an.
          </p>
        </header>

        <div className="flex items-center">
          <div className="box z-10 backdrop-blur-md md:-mr-8 lg:w-2/3">
            <table className="w-full">
              <tbody>
                <tr
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/Offer"
                >
                  <td className="align-top" itemProp="name">
                    Saugen des Innenraumes
                  </td>
                  <td className="text-right align-top font-medium text-white">
                    <span itemProp="price">ab 29</span>{" "}
                    <span itemProp="priceCurrency">CHF</span>
                  </td>
                </tr>
                <tr
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/Offer"
                >
                  <td className="align-top" itemProp="name">
                    Teppich shampoonieren (pro Stk.)
                  </td>
                  <td className="text-right align-top font-medium text-white">
                    <span itemProp="price">19</span>{" "}
                    <span itemProp="priceCurrency">CHF</span>
                  </td>
                </tr>
                <tr
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/Offer"
                >
                  <td className="align-top" itemProp="name">
                    Kofferraummatte shampoonieren
                  </td>
                  <td className="text-right align-top font-medium text-white">
                    <span itemProp="price">29</span>{" "}
                    <span itemProp="priceCurrency">CHF</span>
                  </td>
                </tr>
                <tr
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/Offer"
                >
                  <td className="align-top" itemProp="name">
                    Stoffsitze shampoonieren (pro Stk.)
                  </td>
                  <td className="text-right align-top font-medium text-white">
                    <span itemProp="price">39</span>{" "}
                    <span itemProp="priceCurrency">CHF</span>
                  </td>
                </tr>
                <tr
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/Offer"
                >
                  <td className="align-top" itemProp="name">
                    Ledersitze Reinigung & Pflege (pro Stk.)
                  </td>
                  <td className="text-right align-top font-medium text-white">
                    <span itemProp="price">49</span>{" "}
                    <span itemProp="priceCurrency">CHF</span>
                  </td>
                </tr>
                <tr
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/Offer"
                >
                  <td className="align-top" itemProp="name">
                    Tierhaarentfernung (inkl. kleine Innenreinigung)
                  </td>
                  <td className="text-right align-top font-medium text-white">
                    <span itemProp="price">nach Aufwand, 100</span>{" "}
                    <span itemProp="priceCurrency">CHF</span> / h
                  </td>
                </tr>
                <tr
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/Offer"
                >
                  <td className="align-top" itemProp="name">
                    Scheibenreinigung (innen & aussen)
                  </td>
                  <td className="text-right align-top font-medium text-white">
                    <span itemProp="price">49</span>{" "}
                    <span itemProp="priceCurrency">CHF</span>
                  </td>
                </tr>
                <tr
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/Offer"
                >
                  <td className="align-top" itemProp="name">
                    Windschutzscheibe Versiegelung
                  </td>
                  <td className="text-right align-top font-medium text-white">
                    <span itemProp="price">99</span>{" "}
                    <span itemProp="priceCurrency">CHF</span>
                  </td>
                </tr>
                <tr
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/Offer"
                >
                  <td className="align-top" itemProp="name">
                    Cabrio Stoffverdeck Reinigung & Imprägnierung
                  </td>
                  <td className="text-right align-top font-medium text-white">
                    <span itemProp="price">ab 199</span>{" "}
                    <span itemProp="priceCurrency">CHF</span>
                  </td>
                </tr>
                <tr
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/Offer"
                >
                  <td className="align-top" itemProp="name">
                    Motorraumreinigung oberflächig
                  </td>
                  <td className="text-right align-top font-medium text-white">
                    <span itemProp="price">69</span>{" "}
                    <span itemProp="priceCurrency">CHF</span>
                  </td>
                </tr>
                <tr
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/Offer"
                >
                  <td className="align-top" itemProp="name">
                    Geruchsentfernung ohne Ozon (inkl. kleine Innenreinigung)
                  </td>
                  <td className="text-right align-top font-medium text-white">
                    <span itemProp="price">199</span>{" "}
                    <span itemProp="priceCurrency">CHF</span>
                  </td>
                </tr>
                <tr
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/Offer"
                >
                  <td className="align-top" itemProp="name">
                    Maschinenpolitur einstufige Lackauffrischung
                  </td>
                  <td className="text-right align-top font-medium text-white">
                    <span itemProp="price">ab 399</span>{" "}
                    <span itemProp="priceCurrency">CHF</span>
                  </td>
                </tr>
                <tr
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/Offer"
                >
                  <td className="align-top" itemProp="name">
                    Maschinenpolitur mehrstufig
                  </td>
                  <td className="text-right align-top font-medium text-white">
                    <span itemProp="price">nach Aufwand, 100</span>{" "}
                    <span itemProp="priceCurrency">CHF</span> / h
                  </td>
                </tr>
                <tr
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/Offer"
                >
                  <td className="align-top" itemProp="name">
                    Fahrzeugversiegelung je nach Produkt
                  </td>
                  <td className="text-right align-top font-medium text-white">
                    <span itemProp="price">199</span>{" "}
                    <span itemProp="priceCurrency">CHF</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <figure className="gradient-image hidden w-1/3 overflow-hidden rounded-2xl lg:block">
            <Image
              placeholder="blur"
              src={ExtraServices}
              alt=""
              quality={75}
              className="aspect-[1/1.5] object-cover"
            />
          </figure>
        </div>
      </section>

      <FooterCta />
    </>
  );
}
