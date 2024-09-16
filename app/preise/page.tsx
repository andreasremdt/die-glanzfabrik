import type { Metadata } from "next";
import Image from "next/image";
import FooterCta from "@/components/footer-cta";
import PageHeader from "@/components/page-header";
import Outside from "@/public/images/ford-mustang-outside.jpg";
import Inside from "@/public/images/ford-mustang-inside.jpg";
import ExtraServices from "@/public/images/ford-mustang-aussenwaesche.jpg";
import PricingTable from "@/components/pricing-table";
import ContactDialog from "@/components/contact-dialog";
import { getPackages, getPages } from "@/lib/queries";
import { cn, getPackagesByCategory } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPages({ where: { name: "Unsere Preise" } });

  if (!page) return {};

  return {
    title: `${page.seoTitle} | Die Glanzfabrik`,
    description: page.seoDescription,
  };
}

export default async function Page() {
  const packages = await getPackages();
  const page = await getPages({ where: { name: "Unsere Preise" } });

  if (!page) return null;

  return (
    <>
      <PageHeader title={page.name} description={page.description} />

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

          {getPackagesByCategory(packages, "Exterior").map((item) => (
            <article
              key={item.name}
              className="box flex flex-col items-start p-0"
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/Offer"
            >
              <div className="p-4 sm:p-6">
                <h3 className="mb-2 font-serif text-xl">
                  <span itemProp="price">ab {item.startingPrice}</span>{" "}
                  <span itemProp="priceCurrency">CHF</span>
                </h3>
                <p
                  className={cn("h2", {
                    "mb-8 w-full border-b border-white/15 pb-8":
                      !item.description,
                    "mb-2": item.description,
                  })}
                  itemProp="name"
                >
                  {item.name}
                </p>
                {item.description ? (
                  <p className="mb-8 w-full border-b border-white/15 pb-8 text-sm">
                    {item.description}
                  </p>
                ) : null}

                {item.services ? (
                  <ul className="mb-8 list-disc pl-6" itemProp="description">
                    {item.services.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                ) : null}
              </div>

              {item.prices ? <PricingTable rows={item.prices} /> : null}
            </article>
          ))}
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

          {getPackagesByCategory(packages, "Interior").map((item) => (
            <article
              key={item.name}
              className="box flex flex-col items-start p-0"
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/Offer"
            >
              <div className="p-4 sm:p-6">
                <h3 className="mb-2 font-serif text-xl">
                  <span itemProp="price">ab {item.startingPrice}</span>{" "}
                  <span itemProp="priceCurrency">CHF</span>
                </h3>
                <p
                  className={cn("h2", {
                    "mb-8 w-full border-b border-white/15 pb-8":
                      !item.description,
                    "mb-2": item.description,
                  })}
                  itemProp="name"
                >
                  {item.name}
                </p>
                {item.description ? (
                  <p className="mb-8 w-full border-b border-white/15 pb-8 text-sm">
                    {item.description}
                  </p>
                ) : null}

                {item.services ? (
                  <ul className="mb-8 list-disc pl-6" itemProp="description">
                    {item.services.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                ) : null}
              </div>

              {item.prices ? <PricingTable rows={item.prices} /> : null}
            </article>
          ))}
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
          {getPackagesByCategory(packages, "Complete package").map((item) => (
            <article
              key={item.name}
              className="box flex flex-col items-start"
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/Offer"
            >
              <h3 className="mb-2 font-serif text-xl">
                <span itemProp="price">ab {item.startingPrice}</span>{" "}
                <span itemProp="priceCurrency">CHF</span>
              </h3>
              <p
                className={cn("h2", {
                  "mb-8 w-full border-b border-white/15 pb-8":
                    !item.description,
                  "mb-2": item.description,
                })}
                itemProp="name"
              >
                {item.name}
              </p>
              {item.description ? (
                <p className="mb-8 w-full border-b border-white/15 pb-8 text-sm">
                  {item.description}
                </p>
              ) : null}

              {item.services ? (
                <ul className="list-disc pl-6" itemProp="description">
                  {item.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
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
          {getPackagesByCategory(packages, "Extra services").map((item) => (
            <div
              className="box z-10 backdrop-blur-md md:-mr-8 lg:w-2/3"
              key={item.name}
            >
              <table className="w-full">
                <tbody>
                  {item.prices?.map((price) => (
                    <tr
                      key={price.key}
                      itemProp="itemListElement"
                      itemScope
                      itemType="http://schema.org/Offer"
                    >
                      <td className="align-top" itemProp="name">
                        {price.key}
                      </td>
                      <td className="text-right align-top font-medium text-white">
                        <span itemProp="price">{price.value}</span>
                        {price.value.includes("CHF") ? null : (
                          <span itemProp="priceCurrency"> CHF</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

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
