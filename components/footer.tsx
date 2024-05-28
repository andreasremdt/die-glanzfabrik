import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 pb-8 pt-8 md:pt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <nav>
          <h2 className="h3 mb-4">Über Uns</h2>

          <Link className="link block" href="/">
            Home
          </Link>
          <Link className="link block" href="/leistungen">
            Leistungen
          </Link>
          <Link className="link block" href="/preise">
            Preise
          </Link>
          <Link className="link block" href="/galerie">
            Galerie
          </Link>
          <Link className="link block" href="/kontakt">
            Kontakt & Anfahrt
          </Link>
          <Link className="link block" href="/impressum">
            Impressum
          </Link>
        </nav>

        <section>
          <h2 className="h3 mb-4">Kontakt</h2>

          <p className="flex gap-3">
            <svg viewBox="0 0 24 24" className="mt-[6px] h-4 w-4">
              <path
                fill="currentColor"
                d="M22 10c0-2.761-1.12-5.263-2.929-7.071s-4.31-2.929-7.071-2.929-5.263 1.12-7.071 2.929-2.929 4.31-2.929 7.071c0 0.569 0.053 1.128 0.15 1.676 0.274 1.548 0.899 3.004 1.682 4.32 2.732 4.591 7.613 7.836 7.613 7.836 0.331 0.217 0.765 0.229 1.109 0 0 0 4.882-3.245 7.613-7.836 0.783-1.316 1.408-2.772 1.682-4.32 0.098-0.548 0.151-1.107 0.151-1.676zM20 10c0 0.444-0.041 0.887-0.119 1.328-0.221 1.25-0.737 2.478-1.432 3.646-1.912 3.214-5.036 5.747-6.369 6.74-1.398-0.916-4.588-3.477-6.53-6.74-0.695-1.168-1.211-2.396-1.432-3.646-0.077-0.441-0.118-0.884-0.118-1.328 0-2.209 0.894-4.208 2.343-5.657s3.448-2.343 5.657-2.343 4.208 0.894 5.657 2.343 2.343 3.448 2.343 5.657zM16 10c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM14 10c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414z"
              ></path>
            </svg>
            Glanzfabrik GmbH
            <br />
            Lörracherstrasse 119
            <br />
            4125 Riehen
            <br />
            Schweiz
          </p>

          <ul className="mt-4">
            <li>
              <a
                href="tel:+41 78 303 66 90"
                className="link flex items-center gap-3"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4">
                  <path
                    fill="currentColor"
                    d="M23 16.92c0.016-0.714-0.236-1.404-0.673-1.943-0.46-0.566-1.129-0.967-1.925-1.080-0.8-0.098-1.695-0.314-2.586-0.646-0.433-0.159-0.893-0.218-1.344-0.174-0.663 0.064-1.307 0.349-1.819 0.855l-0.72 0.72c-1.77-1.117-3.36-2.667-4.583-4.589l0.726-0.726c0.322-0.33 0.563-0.726 0.707-1.156 0.212-0.632 0.214-1.336-0.039-2.011-0.289-0.753-0.518-1.644-0.644-2.595-0.104-0.714-0.456-1.345-0.963-1.804-0.539-0.486-1.256-0.779-2.027-0.771h-2.996c-0.088 0-0.182 0.004-0.273 0.012-0.824 0.075-1.542 0.478-2.033 1.066s-0.758 1.367-0.683 2.199c0.3 3.076 1.365 6.243 3.216 9.102 1.502 2.413 3.648 4.623 6.298 6.306 2.568 1.697 5.684 2.862 9.086 3.231 0.092 0.009 0.191 0.013 0.288 0.013 0.828-0.003 1.578-0.343 2.118-0.887s0.873-1.297 0.87-2.121zM21 16.92v3c0.001 0.28-0.109 0.53-0.29 0.712s-0.429 0.295-0.706 0.296c-3.149-0.336-5.961-1.391-8.263-2.912-2.428-1.543-4.359-3.537-5.702-5.694-1.697-2.62-2.655-5.481-2.924-8.238-0.024-0.268 0.064-0.526 0.229-0.724s0.403-0.33 0.678-0.355l3.088-0.005c0.271-0.003 0.507 0.094 0.687 0.256 0.17 0.154 0.288 0.366 0.323 0.608 0.142 1.072 0.408 2.117 0.757 3.025 0.081 0.216 0.080 0.447 0.010 0.658-0.049 0.145-0.131 0.281-0.242 0.395l-1.262 1.261c-0.324 0.324-0.379 0.814-0.162 1.201 1.584 2.785 3.839 4.957 6.381 6.378 0.397 0.222 0.882 0.144 1.195-0.166l1.27-1.27c0.166-0.164 0.377-0.257 0.598-0.279 0.152-0.015 0.31 0.005 0.459 0.060 1.022 0.381 2.070 0.636 3.034 0.754 0.241 0.034 0.462 0.166 0.615 0.355 0.147 0.181 0.231 0.412 0.226 0.682z"
                  ></path>
                </svg>
                +41 78 303 66 90
              </a>
              <a
                href="mailto:info@dieglanzfabrik.ch"
                className="link flex items-center gap-3"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4">
                  <path
                    fill="currentColor"
                    d="M3 7.921l8.427 5.899c0.34 0.235 0.795 0.246 1.147 0l8.426-5.899v10.079c0 0.272-0.11 0.521-0.295 0.705s-0.433 0.295-0.705 0.295h-16c-0.272 0-0.521-0.11-0.705-0.295s-0.295-0.433-0.295-0.705zM1 5.983c0 0.010 0 0.020 0 0.030v11.987c0 0.828 0.34 1.579 0.88 2.12s1.292 0.88 2.12 0.88h16c0.828 0 1.579-0.34 2.12-0.88s0.88-1.292 0.88-2.12v-11.988c0-0.010 0-0.020 0-0.030-0.005-0.821-0.343-1.565-0.88-2.102-0.541-0.54-1.292-0.88-2.12-0.88h-16c-0.828 0-1.579 0.34-2.12 0.88-0.537 0.537-0.875 1.281-0.88 2.103zM20.894 5.554l-8.894 6.225-8.894-6.225c0.048-0.096 0.112-0.183 0.188-0.259 0.185-0.185 0.434-0.295 0.706-0.295h16c0.272 0 0.521 0.11 0.705 0.295 0.076 0.076 0.14 0.164 0.188 0.259z"
                  ></path>
                </svg>
                info@dieglanzfabrik.ch
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="h3 mb-4">Öffnungszeiten</h2>

          <ul>
            <li>Montag - Freitag: nach Vereinbarung</li>
            <li>Samstag: 08:00 - 15:00</li>
            <li>Sonn- & Feiertage: geschlossen</li>
          </ul>
        </section>

        <section>
          <h2 className="h3 mb-4">Soziale Netzwerke</h2>

          <ul className="flex gap-4">
            <li>
              <a
                href="https://www.instagram.com/die_glanzfabrik_gmbh/"
                className="box hover-effect inline-flex items-center gap-2 p-5 text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                target="_blank"
                rel="noopener nofollow noreferrer"
              >
                <span className="sr-only">Die Glanzfabrik auf Instagram</span>
                <svg viewBox="0 0 24 24" className="h-6 w-6">
                  <path
                    fill="currentColor"
                    d="M7 1c-1.657 0-3.158 0.673-4.243 1.757s-1.757 2.586-1.757 4.243v10c0 1.657 0.673 3.158 1.757 4.243s2.586 1.757 4.243 1.757h10c1.657 0 3.158-0.673 4.243-1.757s1.757-2.586 1.757-4.243v-10c0-1.657-0.673-3.158-1.757-4.243s-2.586-1.757-4.243-1.757zM7 3h10c1.105 0 2.103 0.447 2.828 1.172s1.172 1.723 1.172 2.828v10c0 1.105-0.447 2.103-1.172 2.828s-1.723 1.172-2.828 1.172h-10c-1.105 0-2.103-0.447-2.828-1.172s-1.172-1.723-1.172-2.828v-10c0-1.105 0.447-2.103 1.172-2.828s1.723-1.172 2.828-1.172zM16.989 11.223c-0.15-0.972-0.571-1.857-1.194-2.567-0.754-0.861-1.804-1.465-3.009-1.644-0.464-0.074-0.97-0.077-1.477-0.002-1.366 0.202-2.521 0.941-3.282 1.967s-1.133 2.347-0.93 3.712 0.941 2.521 1.967 3.282 2.347 1.133 3.712 0.93 2.521-0.941 3.282-1.967 1.133-2.347 0.93-3.712zM15.011 11.517c0.122 0.82-0.1 1.609-0.558 2.227s-1.15 1.059-1.969 1.18-1.609-0.1-2.227-0.558-1.059-1.15-1.18-1.969 0.1-1.609 0.558-2.227 1.15-1.059 1.969-1.18c0.313-0.046 0.615-0.042 0.87-0.002 0.74 0.11 1.366 0.47 1.818 0.986 0.375 0.428 0.63 0.963 0.72 1.543zM17.5 7.5c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/dieglanzfabrikgmbh/"
                target="_blank"
                className="box hover-effect inline-flex items-center gap-2 p-5 text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                rel="noopener nofollow noreferrer"
              >
                <span className="sr-only">Die Glanzfabrik auf Facebook</span>
                <svg viewBox="0 0 24 24" className="h-6 w-6">
                  <path
                    fill="currentColor"
                    d="M17 3v2h-2c-0.552 0-1.053 0.225-1.414 0.586s-0.586 0.862-0.586 1.414v3c0 0.552 0.448 1 1 1h2.719l-0.5 2h-2.219c-0.552 0-1 0.448-1 1v7h-2v-7c0-0.552-0.448-1-1-1h-2v-2h2c0.552 0 1-0.448 1-1v-3c0-1.105 0.447-2.103 1.172-2.828s1.723-1.172 2.828-1.172zM18 1h-3c-1.657 0-3.158 0.673-4.243 1.757s-1.757 2.586-1.757 4.243v2h-2c-0.552 0-1 0.448-1 1v4c0 0.552 0.448 1 1 1h2v7c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-7h2c0.466 0 0.858-0.319 0.97-0.757l1-4c0.134-0.536-0.192-1.079-0.728-1.213-0.083-0.021-0.167-0.031-0.242-0.030h-3v-2h3c0.552 0 1-0.448 1-1v-4c0-0.552-0.448-1-1-1z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/dieglanzfabrikgmbh/"
                target="_blank"
                className="box hover-effect inline-flex items-center gap-2 p-5 text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                rel="noopener nofollow noreferrer"
              >
                <span className="sr-only">Die Glanzfabrik auf LinkedIn</span>
                <svg viewBox="0 0 24 24" className="h-6 w-6">
                  <path
                    fill="currentColor"
                    d="M16 7c-1.933 0-3.684 0.785-4.95 2.050s-2.050 3.017-2.050 4.95v7c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-7c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293 0.525 0.111 0.707 0.293 0.293 0.431 0.293 0.707v7c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-7c0-1.933-0.785-3.684-2.050-4.95s-3.017-2.050-4.95-2.050zM16 9c1.381 0 2.63 0.559 3.536 1.464s1.464 2.155 1.464 3.536v6h-2v-6c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879-1.58 0.337-2.121 0.879-0.879 1.293-0.879 2.121v6h-2v-6c0-1.381 0.559-2.63 1.464-3.536s2.155-1.464 3.536-1.464zM2 8c-0.552 0-1 0.448-1 1v12c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-12c0-0.552-0.448-1-1-1zM3 10h2v10h-2zM7 4c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879-1.58 0.337-2.121 0.879-0.879 1.293-0.879 2.121 0.337 1.58 0.879 2.121 1.293 0.879 2.121 0.879 1.58-0.337 2.121-0.879 0.879-1.293 0.879-2.121zM5 4c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293-0.525-0.111-0.707-0.293-0.293-0.431-0.293-0.707 0.111-0.525 0.293-0.707 0.431-0.293 0.707-0.293 0.525 0.111 0.707 0.293 0.293 0.431 0.293 0.707z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <p className="mt-8 border-t border-neutral-700 px-4 pt-8 text-center text-sm md:mt-16">
        &copy; 2024 Die Glanzfabrik GmbH. Alle Rechte vorbehalten. Design &
        Entwicklung Andreas Remdt.
      </p>
    </footer>
  );
}
