import type { Metadata } from "next";
import ContactDialog from "@/components/contact-dialog";
import FooterCta from "@/components/footer-cta";
import Icon from "@/components/icon";
import PageHeader from "@/components/page-header";
import { getPages, getServices } from "@/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPages({ where: { name: "Unsere Leistungen" } });

  if (!page) return {};

  return {
    title: `${page.seoTitle} | Die Glanzfabrik`,
    description: page.seoDescription,
  };
}

export default async function Page() {
  const services = await getServices();
  const page = await getPages({ where: { name: "Unsere Leistungen" } });

  if (!page) return null;

  return (
    <>
      <PageHeader title={page.name} description={page.description} />

      <div
        className="section"
        itemProp="makesOffer"
        itemScope
        itemType="http://schema.org/Offer"
      >
        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {services?.servicesCollection.items.map((item) => (
            <article
              className="box"
              itemProp="itemOffered"
              itemScope
              key={item.name}
              itemType="http://schema.org/Service"
            >
              <Icon src={item.icon.url} className="h-12 w-12 invert" />

              <h2 className="h3 mb-4 mt-6" itemProp="name">
                {item.name}
              </h2>
              <p itemProp="description">{item.description}</p>
            </article>
          ))}
        </div>

        <ContactDialog />
      </div>

      <FooterCta />
    </>
  );
}
