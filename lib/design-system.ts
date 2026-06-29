import { cn, type ClassValue } from "@/lib/utils";

export const colorTokens = {
  accent: "text-accent",
  brand: "text-brand",
  brandStrong: "text-brand-strong",
  darkText: "text-white",
  mutedDarkText: "text-blue-50/76",
  lightText: "text-neutral-950",
  mutedLightText: "text-neutral-600",
} as const;

export const spacingTokens = {
  section: "py-20 sm:py-28 lg:py-36",
  sectionCompact: "py-16 sm:py-24 lg:py-28",
  sectionGrand: "py-20 sm:py-32 lg:py-40",
  sectionGap: "mt-12 sm:mt-14",
  gridGap: "gap-5",
} as const;

export const typographyTokens = {
  hero:
    "text-balance text-[clamp(2.4rem,5.1vw,5.1rem)] font-black leading-[1] tracking-normal",
  pageHero:
    "text-balance text-5xl font-black leading-[1] tracking-normal sm:text-6xl lg:text-7xl",
  sectionTitle:
    "text-balance text-4xl font-black leading-[1.02] sm:text-6xl",
  cardTitle: "text-2xl font-black leading-tight",
  body: "text-base leading-8 sm:text-lg",
  smallLabel: "text-xs font-black uppercase tracking-[0.18em]",
} as const;

export const surfaceTokens = {
  darkSection:
    "relative isolate overflow-hidden bg-brand-strong text-white",
  brandSection: "relative isolate overflow-hidden bg-brand text-white",
  darkGlass:
    "border border-white/10 bg-white/[0.075] shadow-xl shadow-black/10 backdrop-blur-md",
  darkGlassStrong:
    "border border-white/12 bg-white/[0.085] shadow-xl shadow-black/12 backdrop-blur-md",
  imageCard:
    "relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-brand shadow-2xl shadow-black/22",
  goldLine:
    "absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent via-accent/40 to-transparent",
} as const;

export const buttonVariants = {
  primary:
    "bg-accent text-brand-strong shadow-xl shadow-accent/20 hover:bg-white",
  navy:
    "bg-brand text-white shadow-lg shadow-brand/15 hover:bg-brand-strong",
  secondaryDark:
    "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-brand",
  outlineDark:
    "border border-white/18 text-white hover:bg-white hover:text-brand",
  ghostDark:
    "border border-white/14 bg-white/[0.075] text-white backdrop-blur hover:border-accent hover:bg-accent hover:text-brand-strong",
  secondaryLight:
    "border border-brand/15 bg-white text-brand hover:border-accent hover:bg-muted",
  ghostLight: "text-neutral-700 hover:bg-muted hover:text-brand",
} as const;

export const buttonSizes = {
  sm: "h-10 px-4 text-xs",
  md: "h-11 px-5 text-sm",
  lg: "h-[3.45rem] px-8 text-sm",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;
export type ButtonSize = keyof typeof buttonSizes;

export function buttonClassName(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: ClassValue,
) {
  return cn(
    "inline-flex items-center justify-center gap-2 font-black transition duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
    buttonSizes[size],
    buttonVariants[variant],
    className,
  );
}
