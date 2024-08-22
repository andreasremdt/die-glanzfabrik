import type { Metadata } from "next";
import Image from "next/image";
import FooterCta from "@/components/footer-cta";
import Gallery from "@/components/gallery";
import PageHeader from "@/components/page-header";
import { getGallery } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Autoreinigung im Raum Basel | Die Glanzfabrik",
  description:
    "Wir sind Spezialisten in der Autoreinigung und bieten Aussenreinigung, Innenreinigung, Autoaufbereitung, Geruchsentfernung, Versiegelung und mehr",
};

export default async function Page() {
  const gallery = await getGallery();

  return (
    <>
      <PageHeader
        title="Galerie"
        description="Bilder sprechen mehr als 1000 Worte. Schauen Sie sich das Vorher/Nachher von unserer bisherigen Arbeit an und überzeugen Sie sich selbst."
      />

      {gallery?.galleryCollection.items.map((item, index) => (
        <article
          className="section pb-0 last-of-type:pb-16 md:last-of-type:pb-32"
          key={item.carName}
        >
          <header className="mb-8 text-center">
            <h2 className="h2 mb-4">{item.carName}</h2>
            {item.services ? <p className="text-lg">{item.services}</p> : null}
          </header>

          <Gallery className="grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {item.imagesCollection.items.map((image) => (
              <a
                key={image.url}
                href={image.url}
                className="gradient-image block overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-110"
                data-fancybox={item.carName}
                data-caption={image.title || undefined}
              >
                <Image
                  src={image.preview}
                  quality={75}
                  width={350}
                  height={250}
                  alt={image.title || ""}
                  loading={index > 1 ? "lazy" : "eager"}
                  decoding="async"
                  className="object-cover"
                />
              </a>
            ))}
          </Gallery>
        </article>
      ))}

      <FooterCta />
    </>
  );
}
