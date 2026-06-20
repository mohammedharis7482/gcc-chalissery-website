import type { ReactNode } from "react";
import Image from "next/image";

import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";
import { surfaceTokens } from "@/lib/design-system";

type ImageCardProps = {
  alt: string;
  children?: ReactNode;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
  priority?: boolean;
  sizes: string;
  src: string;
};

export function ImageCard({
  alt,
  children,
  className,
  imageClassName,
  overlayClassName,
  priority = false,
  sizes,
  src,
}: ImageCardProps) {
  return (
    <FadeIn
      className={cn("group", surfaceTokens.imageCard, className)}
      variant="imageReveal"
    >
      <Image
        alt={alt}
        className={cn(
          "size-full object-cover object-center transition duration-700 group-hover:scale-[1.035]",
          imageClassName,
        )}
        fill
        priority={priority}
        sizes={sizes}
        src={src}
      />
      <div
        className={cn(
          "absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,63,0.02)_0%,rgba(3,8,63,0.1)_40%,rgba(3,8,63,0.58)_70%,rgba(3,8,63,0.96)_100%),linear-gradient(90deg,rgba(3,8,63,0.36),transparent_58%)]",
          overlayClassName,
        )}
      />
      {children}
    </FadeIn>
  );
}
