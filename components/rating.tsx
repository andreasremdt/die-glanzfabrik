import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type Props = ComponentProps<"span"> & {
  stars: number;
};

export default function Rating({ stars, className, ...props }: Props) {
  return (
    <span
      className={cn("flex gap-2 text-rose-500", className)}
      itemProp="reviewRating"
      itemScope
      itemType="http://schema.org/Rating"
      {...props}
    >
      <meta itemProp="ratingValue" content={String(stars)} />
      <meta itemProp="bestRating" content="5" />

      {new Array(stars).fill(null).map((_, index) => (
        <svg viewBox="0 0 24 24" className="h-5 w-5" key={index}>
          <path
            fill="currentColor"
            d="M12.897 1.557c-0.092-0.189-0.248-0.352-0.454-0.454-0.495-0.244-1.095-0.041-1.339 0.454l-2.858 5.789-6.391 0.935c-0.208 0.029-0.411 0.127-0.571 0.291-0.386 0.396-0.377 1.029 0.018 1.414l4.623 4.503-1.091 6.362c-0.036 0.207-0.006 0.431 0.101 0.634 0.257 0.489 0.862 0.677 1.351 0.42l5.714-3.005 5.715 3.005c0.186 0.099 0.408 0.139 0.634 0.101 0.544-0.093 0.91-0.61 0.817-1.155l-1.091-6.362 4.623-4.503c0.151-0.146 0.259-0.344 0.292-0.572 0.080-0.546-0.298-1.054-0.845-1.134l-6.39-0.934zM12 4.259l2.193 4.444c0.151 0.305 0.436 0.499 0.752 0.547l4.906 0.717-3.549 3.457c-0.244 0.238-0.341 0.569-0.288 0.885l0.837 4.883-4.386-2.307c-0.301-0.158-0.647-0.148-0.931 0l-4.386 2.307 0.837-4.883c0.058-0.336-0.059-0.661-0.288-0.885l-3.549-3.457 4.907-0.718c0.336-0.049 0.609-0.26 0.752-0.546z"
          />
        </svg>
      ))}
    </span>
  );
}
