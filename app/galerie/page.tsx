import Image from "next/image";
import FooterCta from "@/components/footer-cta";
import Gallery from "@/components/gallery";
import PageHeader from "@/components/page-header";
import Outside from "@/public/images/ford-mustang-outside.jpg";
import Inside from "@/public/images/ford-mustang-inside.jpg";

export default function Page() {
  return (
    <>
      <PageHeader
        title="Galerie"
        description="Bilder sprechen mehr als 1000 Worte. Schauen Sie sich das Vorher/Nachher von unserer bisherigen Arbeit an und überzeugen Sie sich selbst."
      />

      <article className="section pb-0 last-of-type:pb-16 md:last-of-type:pb-32">
        <header className="mb-8 text-center">
          <h2 className="h2 mb-4">Fiat 500</h2>
          <p className="text-lg">Innenreinigung</p>
        </header>

        <Gallery className="grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          <a
            href="/images/ford-mustang-outside.jpg"
            className="gradient-image block overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-110"
            data-fancybox="gallery"
            data-caption="Test Data"
          >
            <Image
              src={Outside}
              quality={75}
              placeholder="blur"
              alt=""
              className="object-cover"
            />
          </a>
          <a
            href="/images/ford-mustang-inside.jpg"
            className="gradient-image block overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-110"
            data-fancybox="gallery"
            data-caption="Test Data"
          >
            <Image
              src={Inside}
              quality={75}
              placeholder="blur"
              alt=""
              className="object-cover"
            />
          </a>
        </Gallery>
      </article>

      <FooterCta />
    </>
  );
}
