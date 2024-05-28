import FooterCta from "@/components/footer-cta";
import PageHeader from "@/components/page-header";

export default function Page() {
  return (
    <>
      <PageHeader
        title="Unsere Leistungen"
        description="Ein sauberes Auto ist nicht nur ein Zeichen von Stolz, sondern auch ein wichtiger Beitrag zur Erhaltung seines Wertes und seiner Langlebigkeit. Wir verwenden ausschliesslich Produkte aus dem europäischen Raum, um sicherzustellen, dass Ihr Fahrzeug die bestmögliche Pflege erhält."
      />
      <h1>Leistungen</h1>
      <FooterCta />
    </>
  );
}
