"use client";

import { type ComponentProps, useRef, useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { cn } from "@/lib/utils";

type Props = ComponentProps<"figure">;

export default function Gallery({ className, ...props }: Props) {
  let containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let container = containerRef.current;

    Fancybox.bind(container, "[data-fancybox]", {
      Thumbs: true,
    });

    return () => {
      Fancybox.unbind(container);
      Fancybox.close();
    };
  }, []);

  return (
    <figure
      ref={containerRef}
      className={cn("grid gap-4 md:gap-8", className)}
      {...props}
    >
      {props.children}
    </figure>
  );
}
