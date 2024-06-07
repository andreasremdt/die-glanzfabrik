import Image from "next/image";
import Link from "next/link";
import FooterCta from "@/components/footer-cta";
import Gallery from "@/components/gallery";
import Icon from "@/components/icon";
import PageHeader from "@/components/page-header";
import Outside from "@/public/images/ford-mustang-outside.jpg";
import Inside from "@/public/images/ford-mustang-inside.jpg";
import Rating from "@/components/rating";
import ContactDialog from "@/components/contact-dialog";

export default function Page() {
  return (
    <>
      <PageHeader
        size="large"
        title="Ihre Professionelle Autoreinigung im Raum Basel"
        description="Ein sauberes Auto ist nicht nur ein Zeichen von Stolz, sondern auch ein wichtiger Beitrag zur Erhaltung seines
      Wertes und seiner Langlebigkeit. Dafür sind wir der richtige Ansprechpartner."
      >
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
            <article
              className="box"
              itemProp="itemOffered"
              itemScope
              itemType="https://schema.org/Service"
            >
              <Icon src="/icons/seat.svg" className="h-12 w-12" />

              <h3 className="h3 mb-4 mt-6" itemProp="name">
                Innenreinigung
              </h3>
              <p itemProp="description">
                Unser Ziel ist es, Ihren Fahrzeuginnenraum in einen makellosen
                Zustand zu versetzen. Wir reinigen nicht nur die Oberflächen,
                sondern kümmern uns auch um die Details wie Armaturenbrett,
                Türverkleidungen, Dachhimmel, Sitze und Fussmatten.
              </p>
            </article>

            <article
              className="box"
              itemProp="itemOffered"
              itemScope
              itemType="https://schema.org/Service"
            >
              <Icon src="/icons/outside.svg" className="h-12 w-12" />

              <h3 className="h3 mb-4 mt-6" itemProp="name">
                Aussenreinigung & Polieren
              </h3>
              <p itemProp="description">
                Die äussere Erscheinung Ihres Fahrzeugs ist oft der erste
                Eindruck, den es hinterlässt. Wir bieten eine gründliche und
                professionelle Aussenreinigung (nur Handwäsche) und Polituren
                an, um Ihr Auto vor den Elementen zu schützen und seinen Glanz
                zu bewahren.
              </p>
            </article>

            <article
              className="box"
              itemProp="itemOffered"
              itemScope
              itemType="https://schema.org/Service"
            >
              <Icon src="/icons/polish.svg" className="h-12 w-12" />

              <h3 className="h3 mb-4 mt-6" itemProp="name">
                Lackaufbereitung & Versiegelung
              </h3>
              <p itemProp="description">
                Durch die Entfernung von Flugrost, Hologrammen und kleinen
                Kratzern bringen wir den Lack zum Strahlen und schützen ihn
                anschliessend mit hochwertigen Versiegelungen vor
                Umwelteinflüssen.
              </p>
            </article>
          </div>
        </div>
      </section>

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

          <article
            className="box flex flex-col items-start"
            itemProp="makesOffer"
            itemScope
            itemType="http://schema.org/Offer"
          >
            <h3 className="mb-2 font-serif text-xl" itemProp="name">
              Innenreinigung
            </h3>
            <p className="h2 mb-8 w-full border-b border-white/15 pb-8">
              <span itemProp="price">ab 129</span>
              <span itemProp="priceCurrency">CHF</span>
            </p>

            <ul className="mb-8 list-disc pl-6" itemProp="description">
              <li>
                Saugen des kompletten Innenraumes (inkl. Sitze und Kofferraum)
              </li>
              <li>Reinigung der Einstiege</li>
              <li>Leder- oder Stoffsitze feucht abwischen</li>
              <li>
                Reinigung & Auffrischung des Cockpit mittels Interieur Reiniger
                und weichen Microfasertücher
              </li>
              <li>
                Reinigung & Auffrischung der Türverkleidungen Ablagefächer
                mittels Interieur Reiniger und weichen Microfasertücher
              </li>
              <li>Reinigung der Glasflächen inkl. Rückspiegel</li>
              <li>Reinigung der Pedalerie und Fussstütze</li>
            </ul>

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

          <article
            className="box flex flex-col items-start"
            itemProp="makesOffer"
            itemScope
            itemType="http://schema.org/Offer"
          >
            <h3 className="mb-2 font-serif text-xl" itemProp="name">
              Außenreinigung
            </h3>
            <p className="h2 mb-8 w-full border-b border-white/15 pb-8">
              <span itemProp="price">ab 79</span>
              <span itemProp="priceCurrency">CHF</span>
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
            </ul>

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
          <figure
            className="box"
            itemProp="review"
            itemScope
            itemType="http://schema.org/Review"
          >
            <Rating stars={5} className="mb-4" />

            <blockquote itemProp="description">
              <p>
                Mein Fahrzeug wurde sowohl von außen als auch von innen
                aufbereitet, nachdem er jahrelang keine gute Pflege mehr
                erfahren hat. Das Resultat ist ein Unterschied wie Tag und
                Nacht! Der Lack glänzt wieder, die ganzen Oberlächenkratzer
                wurden super entfernt und auch der Innenraum wirkt wie neu.
              </p>

              <p>
                Der Kontakt mit Angelo war super freundlich und das Angebot
                transparent und fair, so wie man es sich wünscht. Vielen Dank
                und gerne wieder!
              </p>
            </blockquote>
            <figcaption className="h4 mt-4" itemProp="author">
              - Andreas Remdt
            </figcaption>
          </figure>

          <figure
            className="box"
            itemProp="review"
            itemScope
            itemType="http://schema.org/Review"
          >
            <Rating stars={5} className="mb-4" />

            <blockquote itemProp="description">
              <p>
                Meine Stoffsitze hatten grosse, hartnäckige Flecken, die
                fachgerecht entfernt wurden. Ich bin begeistert vom Unterschied
                Vorher/Nachher und habe wieder Freude daran, mit meinem Golf
                unterwegs zu sein.
                <br /> Auch bei der Motorfahrzeugkontrolle (MFK) gab es gutes
                Feedback und die super Aufbereitungsarbeit der Glanzfabrik fiel
                positiv auf (u.a. die Felgen)! Vielen lieben Dank für den
                kompetenten und freundlichen Service!
              </p>
            </blockquote>
            <figcaption className="h4 mt-4" itemProp="author">
              - Ursula Grenacher
            </figcaption>
          </figure>

          <figure
            className="box"
            itemProp="review"
            itemScope
            itemType="http://schema.org/Review"
          >
            <Rating stars={5} className="mb-4" />

            <blockquote itemProp="description">
              <p>
                Einfach super Service, das Auto wird zu Hause abgeholt und
                nahezu in einem Werks neuen zustand nach Hause gebracht (keine
                Politur gebucht gehabt) das nächste mal werde ich dies tun.
                Vielen lieben Dank für den super Service. Wir sind mehr als
                zufrieden.
              </p>

              <p>Bis bald lieber Angioletto</p>
            </blockquote>
            <figcaption className="h4 mt-4" itemProp="author">
              - Jasmin Ljubijankic
            </figcaption>
          </figure>
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
