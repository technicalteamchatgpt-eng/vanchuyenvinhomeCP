import type { ComponentType, SVGProps } from "react";

/**
 * Stand-in for a real photo. The source site's stock photos had the original
 * company's logo printed on every uniform/truck, so every photo slot here is
 * an original icon-illustration panel instead — drop in real photography at
 * the same spot (and remove this component) whenever it's ready.
 */
export function PhotoSlot({
  icon: Icon,
  label,
  className = "",
  iconClassName = "h-14 w-14",
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label?: string;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-[linear-gradient(135deg,var(--blue-soft)_0%,var(--canvas)_55%,var(--surface)_100%)] ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,68,59,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,68,59,0.06)_1px,transparent_1px)] bg-[size:22px_22px]"
      />
      <Icon className={`relative text-primary/55 ${iconClassName}`} strokeWidth={1.4} />
      {label ? (
        <span className="absolute bottom-3 left-3 rounded-full bg-surface/90 px-3 py-1 text-[11px] font-black text-navy shadow-card backdrop-blur">
          {label}
        </span>
      ) : null}
    </div>
  );
}
