"use client";

import { type ComponentProps, useRef, useEffect } from "react";
import L from "leaflet";
import marker from "@/public/images/marker-icon.png";
import markerShadow from "@/public/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

type Props = ComponentProps<"div">;

export default function LeafletMap(props: Props) {
  let ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && window !== undefined) {
      let leaflet = L.map(ref.current, {
        scrollWheelZoom: false,
      }).setView([47.59387, 7.65421], 17);

      let icon = L.icon({
        iconUrl: marker.src,
        shadowUrl: markerShadow.src,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(leaflet);

      L.marker([47.5939485, 7.65407234], { icon }).addTo(leaflet);

      return () => {
        leaflet.off();
        leaflet.remove();
      };
    }
  }, []);

  return <div ref={ref} {...props} />;
}
