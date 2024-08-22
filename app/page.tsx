import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import FooterCta from "@/components/footer-cta";
import Gallery from "@/components/gallery";
import Icon from "@/components/icon";
import PageHeader from "@/components/page-header";
import Rating from "@/components/rating";
import ContactDialog from "@/components/contact-dialog";
import {
  getLatestImages,
  getPackages,
  getPages,
  getRatings,
  getServices,
} from "@/lib/queries";
import { getCheapestPackageByCategory } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPages({
    where: { name: "Ihre Professionelle Autoreinigung im Raum Basel" },
  });

  if (!page) return {};

  return {
    title: `${page.seoTitle} | Die Glanzfabrik`,
    description: page.seoDescription,
  };
}

export default async function Page() {
  const ratings = await getRatings();
  const services = await getServices({ limit: 3 });
  const packages = await getPackages();
  const latestImages = await getLatestImages();
  const page = await getPages({
    where: { name: "Ihre Professionelle Autoreinigung im Raum Basel" },
  });

  if (!page) return null;

  return (
    <>
      <PageHeader size="large" title={page.name} description={page.description}>
        <div className="flex animate-[fade-in_0.75s_ease-in-out_1s_both] flex-wrap justify-center gap-1">
          <Link href="/leistungen" className="button-secondary">
            Unsere Leistungen
          </Link>
          <ContactDialog />
        </div>
      </PageHeader>

      <section className="skew-y -mt-20 bg-neutral-900 pb-8">
        <div className="section">
          <header className="mb-16 flex flex-col items-end justify-between gap-x-16 gap-y-4 md:flex-row">
            <div className="md:w-2/3">
              <span className="badge">Leistungen</span>
              <h2 className="h2 mt-2">
                Entdecken Sie unsere Dienstleistungen für Ihr Fahrzeug
              </h2>
            </div>
            <a href="/leistungen" className="button-primary">
              Alle Leistungen
              <svg viewBox="0 0 24 24" className="h-5 w-5">
                <path
                  fill="currentColor"
                  d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"
                ></path>
              </svg>
            </a>
          </header>

          <div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3"
            itemProp="makesOffer"
            itemScope
            itemType="https://schema.org/Offer"
          >
            {services?.servicesCollection.items
              .filter((item) => item.highlighted)
              .map((item) => (
                <article
                  className="box"
                  itemProp="itemOffered"
                  itemScope
                  key={item.name}
                  itemType="https://schema.org/Service"
                >
                  <Icon src={item.icon.url} className="h-12 w-12 invert" />

                  <h3 className="h3 mb-4 mt-6" itemProp="name">
                    {item.name}
                  </h3>
                  <p itemProp="description">{item.description}</p>
                </article>
              ))}
          </div>
        </div>
      </section>

      {latestImages ? (
        <section className="section text-center">
          <header className="mx-auto max-w-3xl text-center">
            <span className="badge">Portfolio</span>
            <h2 className="h2 mb-4 mt-1">
              Bilder sagen mehr als Worte: unsere letzten Arbeiten
            </h2>
            <p className="md:text-lg">
              Überzeugen Sie sich von unserer Arbeit mit Vorher/Nachher Bildern.
              Mehr davon finden Sie in unserer Galerie.
            </p>
          </header>

          <Gallery className="my-16 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {latestImages.assetCollection.items.map((image) => (
              <a
                key={image.url}
                href={image.url}
                className="gradient-image block overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-110"
                data-fancybox="gallery"
                data-caption={image.title || undefined}
              >
                <Image
                  src={image.preview}
                  quality={75}
                  width={350}
                  height={250}
                  alt={image.title || ""}
                  loading="lazy"
                  decoding="async"
                  className="object-cover"
                />
              </a>
            ))}
          </Gallery>

          <a href="/galerie" className="button-primary">
            Mehr Bilder anschauen
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path
                fill="currentColor"
                d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"
              ></path>
            </svg>
          </a>
        </section>
      ) : null}

      <section className="skew-y bg-neutral-900 pb-8">
        <div className="section grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <header className="self-center sm:col-span-3 lg:col-span-1">
            <span className="badge">Preise</span>
            <h2 className="h2 mb-4 mt-2">Unsere Pakete & Preise</h2>
            <p className="md:md:text-lg">
              Stellen Sie sich Ihre Reinigung individuell zusammen oder wählen
              Sie eines unserer praktischen Komplettpakete.
            </p>
          </header>

          {getCheapestPackageByCategory(packages, "Interior").map((item) => (
            <article
              key={item.name}
              className="box flex flex-col items-start"
              itemProp="makesOffer"
              itemScope
              itemType="http://schema.org/Offer"
            >
              <h3 className="mb-2 font-serif text-xl" itemProp="name">
                Innenreinigung
              </h3>
              <p className="h2 mb-8 w-full border-b border-white/15 pb-8">
                <span itemProp="price">ab {item.startingPrice}</span>
                <span itemProp="priceCurrency"> CHF</span>
              </p>

              {item.services ? (
                <ul className="mb-8 list-disc pl-6" itemProp="description">
                  {item.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              ) : null}

              <a href="/preise" className="button-primary mt-auto">
                Mehr Informationen{" "}
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    fill="currentColor"
                    d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"
                  ></path>
                </svg>
              </a>
            </article>
          ))}

          {getCheapestPackageByCategory(packages, "Exterior").map((item) => (
            <article
              key={item.name}
              className="box flex flex-col items-start"
              itemProp="makesOffer"
              itemScope
              itemType="http://schema.org/Offer"
            >
              <h3 className="mb-2 font-serif text-xl" itemProp="name">
                Außenreinigung
              </h3>
              <p className="h2 mb-8 w-full border-b border-white/15 pb-8">
                <span itemProp="price">ab {item.startingPrice}</span>
                <span itemProp="priceCurrency"> CHF</span>
              </p>

              {item.services ? (
                <ul className="mb-8 list-disc pl-6" itemProp="description">
                  {item.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              ) : null}

              <a href="/preise" className="button-primary mt-auto">
                Mehr Informationen{" "}
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    fill="currentColor"
                    d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"
                  ></path>
                </svg>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <header className="mx-auto max-w-3xl text-center">
          <span className="badge">Bewertungen</span>
          <h2 className="h2 mb-4 mt-2">Das sagen unsere Kunden</h2>
          <p className="md:text-lg">
            Kundenzufriedenheit steht bei uns an erster Stelle. Machen Sie sich
            selbst ein Bild mittels unserer Kundenbewertungen auf Google.
          </p>
        </header>

        <div className="my-16 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {ratings?.ratingsCollection.items.map((item) => (
            <figure
              key={item.author}
              className="box"
              itemProp="review"
              itemScope
              itemType="http://schema.org/Review"
            >
              <Rating stars={item.rating} className="mb-4" />

              <blockquote
                itemProp="description"
                className="whitespace-pre-wrap"
              >
                {item.content}
              </blockquote>
              <figcaption className="h4 mt-4" itemProp="author">
                - {item.author}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://www.google.com/search?sca_esv=8272a6fbd46d38f9&sca_upv=1&tbm=lcl&sxsrf=ADLYWIIGJ_WPbKL2drXvJ_2GjA2XaStkRA:1716035248287&q=Die+Glanzfabrik+GmbH+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDAytjQ3NjU2MDWwNDY1MDc3M9rAyPiKUcElM1XBPScxryotMakoM1vBPTfJQyEotSo1rzgzPy81bxErQSUAV5IN1WEAAAA&rldimm=10239735305093507762&hl=en-DE&sa=X&ved=2ahUKEwitppW7mZeGAxWkBNsEHVTGAsMQ9fQKegQIThAF&biw=1920&bih=2012&dpr=1#lkt=LocalPoiReviews"
            target="_blank"
            rel="noopener nofollow noreferrer"
            className="button-primary"
          >
            Mehr Bewertungen lesen
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path
                fill="currentColor"
                d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"
              ></path>
            </svg>
          </a>
        </div>
      </section>

      <FooterCta />
    </>
  );
}
