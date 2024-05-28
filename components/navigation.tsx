"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/images/logo.png";
import { cn } from "@/lib/utils";
import useMediaQuery from "@/hooks/use-media-query";
import useFocusTrap from "@/hooks/use-focus-trap";

let links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/leistungen",
    label: "Leistungen",
  },
  {
    href: "/preise",
    label: "Preise",
  },
  {
    href: "/galerie",
    label: "Galerie",
  },
  {
    href: "/kontakt",
    label: "Kontakt & Anfahrt",
  },
];

export default function Navigation() {
  let pathname = usePathname();
  let [visible, setVisible] = useState(false);
  let isMobile = useMediaQuery(1024);
  let menuRef = useFocusTrap(visible);

  let handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && visible) {
        setVisible(false);
      }
    },
    [visible]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="relative z-20 mx-auto flex h-28 max-w-7xl items-center justify-between px-4"
      ref={menuRef}
    >
      <Image
        alt=""
        className="max-w-[60vw]"
        src={logo}
        quality={75}
        width="350"
        height="57"
        priority
      />

      <button
        type="button"
        onClick={() => setVisible((previous) => !previous)}
        className={cn(
          "menu-toggle text-white outline-none relative z-20 h-5 w-8 transition-all ease-in-out focus:text-rose-500 lg:hidden",
          {
            "is-open": visible,
          }
        )}
        aria-label={`${visible ? "schließe" : "öffne"} das menü`}
        aria-expanded={visible}
        aria-controls="navigation"
      >
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 block h-[2px] w-full bg-current transition-all ease-in-out"
        ></span>
        <span
          aria-hidden="true"
          className="absolute left-0 top-[10px] block h-[2px] w-full bg-current transition-all ease-in-out"
        ></span>
        <span
          aria-hidden="true"
          className="absolute left-0 top-5 block h-[2px] w-full bg-current transition-all ease-in-out"
        ></span>
      </button>

      <nav
        className={cn(
          "menu fixed inset-0 flex scale-90 flex-col items-center justify-center gap-8 bg-gray-900/50 text-xl font-medium opacity-0 backdrop-blur-md transition-all lg:static lg:scale-100 lg:flex-row lg:items-start lg:justify-normal lg:bg-transparent lg:text-lg lg:opacity-100 lg:backdrop-blur-none",
          {
            "is-open": visible,
            invisible: isMobile && !visible,
          }
        )}
        id="navigation"
        aria-label="hauptnavigation"
        aria-hidden={isMobile ? !visible : undefined}
        ref={menuRef}
      >
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            onClick={() => setVisible((previous) => !previous)}
            className={cn(
              "transition-colors hover:text-rose-500 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
              link.href === pathname
                ? "border-b-2 border-rose-500 text-rose-500 focus-visible:outline-rose-500"
                : "text-white focus-visible:outline-white"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
