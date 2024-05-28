import FooterCta from "@/components/footer-cta";
import PageHeader from "@/components/page-header";

export default function Page() {
  return (
    <>
      <PageHeader title="Impressum" />

      <div className="section grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="h3 mb-2">Verantwortlich</h2>

          <p className="mb-2">
            Die Glanzfabrik GmbH
            <br />
            Lörracherstrasse 119
            <br />
            4125 Riehen
            <br />
            Switzerland
            <br />
          </p>

          <p>
            <b className="font-semibold text-white">E-Mail: </b>
            <a className="link" href="mailto:info@dieglanzfabrik.ch">
              info@dieglanzfabrik.ch
            </a>
            <br />
            <b className="font-semibold text-white">Telefon: </b>
            <a className="link" href="tel:+41783036690">
              +41 78 303 66 90
            </a>
          </p>

          <h2 className="h3 mb-2 mt-8">Geschäftsführer/in:</h2>
          <p>Salome Gambone, Angioletto Gambone</p>

          <h2 className="h3 mb-2 mt-8">Technische Betreuung</h2>
          <p>Andreas Remdt</p>

          <p className="mt-8">
            <b className="font-semibold text-white">Firmenname:</b> Die
            Glanzfabrik GmbH
            <br />
            <b className="font-semibold text-white">
              Registrierungsnummer:
            </b>{" "}
            CHE-249.331.462
          </p>
        </div>

        <div>
          <h2 className="h3 mb-2">Haftungsausschluss</h2>
          <p>
            Der Autor übernimmt keinerlei Gewähr für die inhaltliche
            Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und
            Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor
            für Schäden materieller oder ideeller Art, die durch den Zugriff
            auf, die Nutzung oder Nichtnutzung der veröffentlichten
            Informationen, durch Missbrauch der Verbindung oder durch technische
            Störungen entstehen, sind ausgeschlossen.
          </p>

          <p className="mt-2">
            Alle Angebote sind freibleibend. Der Autor behält es sich
            ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne
            gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder
            die Veröffentlichung zeitweise oder endgültig einzustellen.
          </p>

          <h2 className="h3 mb-2 mt-8">
            Haftungsausschluss für Inhalte und Links
          </h2>
          <p>
            Verweise und Links auf Websites Dritter liegen außerhalb unseres
            Verantwortungsbereichs. Es lehnte jegliche Verantwortung für solche
            Websites ab. Der Zugriff auf und die Nutzung solcher Websites
            erfolgt auf eigene Gefahr des Nutzers.
          </p>

          <h2 className="h3 mb-2 mt-8">Urheberrechtserklärung</h2>
          <p>
            Die Urheber- und sonstigen Rechte an Inhalten, Bildern, Fotos oder
            anderen Dateien auf dieser Website liegen ausschließlich bei der Die
            Glanzfabrik GmbH oder den speziell genannten Rechteinhabern. Für die
            Vervielfältigung jeglicher Elemente ist vorab die schriftliche
            Zustimmung des Urheberrechtsinhabers einzuholen.
          </p>
        </div>
      </div>

      <FooterCta />
    </>
  );
}
