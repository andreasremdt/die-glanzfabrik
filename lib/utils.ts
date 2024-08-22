import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Package, Page } from "@/lib/types";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export function getPackagesByCategory(
  packages: Package | null,
  category: string,
) {
  if (!packages) return [];

  return packages.packagesCollection.items
    .filter((item) => item.category === category)
    .sort((a) => (a.name === "Basic" ? -1 : 1));
}

export function getCheapestPackageByCategory(
  packages: Package | null,
  category: string,
) {
  if (!packages) return [];

  return packages.packagesCollection.items
    .filter((item) => item.category === category)
    .sort((a, b) => {
      if (a.startingPrice && b.startingPrice) {
        return a.startingPrice < b.startingPrice ? 1 : -1;
      }

      return 0;
    })
    .slice(1);
}
