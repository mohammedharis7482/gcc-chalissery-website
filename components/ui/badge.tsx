import { cn } from "@/lib/utils";

type BadgeProps = React.ComponentPropsWithoutRef<"span">;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-sky/25 bg-sky/10 px-3.5 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-normal text-brand",
        className,
      )}
      {...props}
    />
  );
}
