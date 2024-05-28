import Image from "next/image";
import Link from "next/link";
import background from "@/public/images/porsche-soaked-in-foam.jpg";

export default function FooterCta() {
  return (
    <section className="gradient-bg skew-t flex items-center px-4 py-32 md:py-48">
      <Image
        src={background}
        alt=""
        placeholder="blur"
        quality={75}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className="gradient-bg"
      />

      <div className="z-10 mx-auto max-w-3xl text-center">
        <h2 className="h2 mb-8">
          Vereinbaren Sie noch heute einen Termin für Ihr Fahrzeug
        </h2>

        <p className="mb-8 text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod eum
          modi est nesciunt fuga repudiandae, quibusdam aspernatur magni laborum
          consectetur, corrupti suscipit? Vitae animi quis fuga odio possimus
          delectus ratione.
        </p>

        <Link href="/kontakt" className="button-primary">
          Termin vereinbaren{" "}
          <svg viewBox="0 0 24 24" className="h-5 w-5">
            <path
              fill="currentColor"
              d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
