import FooterCta from "@/components/footer-cta";
import PageHeader from "@/components/page-header";
import Link from "next/link";

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
          <Link href="/leistungen" className="button-primary">
            Unsere Leistungen
          </Link>
          <Link href="/kontakt" className="button-secondary">
            Termin vereinbaren
          </Link>
        </div>
      </PageHeader>

      <h1>Homepage</h1>
      <button>asdasd</button>

      <FooterCta />
    </>
  );
}
