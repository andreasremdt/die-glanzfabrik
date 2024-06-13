import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Die Glanzfabrik GmbH",
    short_name: "Die Glanzfabrik GmbH",
    description:
      "Wir sind Spezialisten in der Autoreinigung und bieten Aussenreinigung, Innenreinigung, Autoaufbereitung, Geruchsentfernung, Versiegelung und mehr",
    start_url: "/",
    display: "browser",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
