import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Roboto, Merriweather } from "next/font/google";
import { cn } from "@/lib/utils";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import "@/styles/base.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-roboto",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Die Glanzfabrik GmbH",
  openGraph: {
    title: "Die Glanzfabrik GmbH",
    description: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-neutral-950 font-sans text-white/80",
          roboto.variable,
          merriweather.variable,
        )}
        itemScope
        itemType="https://schema.org/AutoBodyShop"
      >
        <meta itemProp="name" content="Die Glanzfabrik GmbH" />
        <meta itemProp="location" content="Riehen, Schweiz" />

        <a
          href="#content"
          className="button button-primary fixed left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-full rounded-t-none transition-transform focus-visible:translate-y-0"
        >
          Zum Inhalt springen
        </a>

        <Navigation />

        <main id="content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
