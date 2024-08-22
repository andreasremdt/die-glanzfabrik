import Image from "next/image";
import type { ComponentProps } from "react";

type Props = ComponentProps<"img"> & {
  src: string;
};

export default function Icon(props: Props) {
  return (
    <div
      className="fancy-border w-max flex-shrink-0 rounded-xl bg-gradient-to-r from-transparent to-white/5 p-4"
      aria-hidden="true"
    >
      <Image {...props} alt="" width={32} height={32} aria-hidden="true" />
    </div>
  );
}
