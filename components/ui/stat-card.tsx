import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";
import { surfaceTokens } from "@/lib/design-system";

type StatCardProps = React.ComponentPropsWithoutRef<"div"> & {
  index?: number;
  label?: string;
  value: string;
  variant?: "dark" | "light";
};

export function StatCard({
  className,
  index,
  label,
  value,
  variant = "dark",
  ...props
}: StatCardProps) {
  const isDark = variant === "dark";

  return (
    <FadeIn className="h-full" variant="scaleIn">
      <div
        className={cn(
          "relative h-full overflow-hidden rounded-[1rem] p-5 transition duration-300 hover:-translate-y-1",
          isDark
            ? surfaceTokens.darkGlassStrong
            : "border border-brand/10 bg-white shadow-xl shadow-brand/5",
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            surfaceTokens.goldLine,
            !isDark && "from-accent via-accent/45",
          )}
        />
        {typeof index === "number" ? (
          <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">
            {String(index + 1).padStart(2, "0")}
          </p>
        ) : label ? (
          <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">
            {label}
          </p>
        ) : null}
        <p
          className={cn(
            index === undefined ? "mt-2 text-2xl" : "mt-3 text-xl",
            "font-black leading-tight",
            isDark ? "text-white" : "text-brand",
          )}
        >
          {value}
        </p>
        {label && typeof index === "number" ? (
          <p
            className={cn(
              "mt-2 text-[0.68rem] font-black uppercase tracking-[0.14em]",
              isDark ? "text-blue-50/62" : "text-neutral-500",
            )}
          >
            {label}
          </p>
        ) : null}
      </div>
    </FadeIn>
  );
}
