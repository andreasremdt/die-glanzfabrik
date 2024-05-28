import type { ReactNode } from "react";
import Image from "next/image";
import background from "@/public/images/ford-mustang-in-car-wash.jpg";
import { cn } from "@/lib/utils";

type Props = {
  size?: "normal" | "large";
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function PageHeader({
  size = "normal",
  title,
  description,
  children,
}: Props) {
  return (
    <header className="gradient-bg skew-b -mt-28 pt-28 relative">
      <Image
        src={background}
        alt=""
        placeholder="blur"
        quality={75}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />

      <div
        className={cn(
          "relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-4 text-center",
          {
            "h-80": size === "normal",
            "pb-40 pt-24 sm:pb-80 sm:pt-48": size === "large",
          }
        )}
      >
        <h1
          className={cn("mx-auto max-w-3xl", {
            h2: size === "normal",
            "h1 animate-[fade-in_0.75s_ease-in-out_forwards]": size === "large",
          })}
        >
          {title}
        </h1>

        {description ? (
          <p
            className={cn("mx-auto my-8 max-w-3xl md:text-xl", {
              "animate-[fade-in_0.75s_ease-in-out_0.5s_both]": size === "large",
            })}
            itemProp="description"
          >
            {description}
          </p>
        ) : null}

        {children}
      </div>
    </header>
  );
}
