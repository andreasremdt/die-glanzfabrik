import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type Props = ComponentProps<"div"> & {
  title: string;
  description: string;
};

export default function Alert({
  title,
  description,
  className,
  ...props
}: Props) {
  return (
    <div {...props} role="alert" className={cn("py-4 text-center", className)}>
      <p className="h3 mb-2">{title}</p>
      <p>{description}</p>
    </div>
  );
}
