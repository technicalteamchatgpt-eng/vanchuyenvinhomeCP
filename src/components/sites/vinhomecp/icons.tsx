import type { SVGProps } from "react";

/**
 * Generic stroke icon set (24x24, stroke-width 2.2, round caps/joins),
 * hand-drawn to match the layout's line-icon style — not from Lucide.
 */
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function TruckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 7h10v9H3zM13 10h4l3 3v3h-7" />
      <circle cx="7" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </svg>
  );
}

export function OfficeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M15 10h3a1 1 0 0 1 1 1v10M3 21h18" />
      <path d="M8 8h1M11 8h1M8 12h1M11 12h1M8 16h1M11 16h1" />
    </svg>
  );
}

export function RoomIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 18V8M3 14h18v4M21 14v-3a2 2 0 0 0-2-2h-8v5" />
      <circle cx="7" cy="10.5" r="1.8" />
    </svg>
  );
}

export function RestaurantIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 10 5.5 4h13L20 10" />
      <path d="M4 10a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0" />
      <path d="M5.5 12.5V20h13v-7.5M10 20v-4h4v4" />
    </svg>
  );
}

export function BoxIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m3 8 9-4 9 4-9 4-9-4Z" />
      <path d="M3 8v8l9 4 9-4V8M12 12v8" />
    </svg>
  );
}

export function WrenchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 6.5a4 4 0 0 0 5 5L9 22l-3-3L16.5 8.5" />
      <path d="M14.5 6.5 18 3a4 4 0 0 1 3 3l-3.5 3.5" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20a6 6 0 0 1 12 0M16 4.5a3.2 3.2 0 0 1 0 6.4M21 20a6 6 0 0 0-4-5.6" />
    </svg>
  );
}

export function SparkleCleanIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 9h6l1 11H7L8 9ZM10 9V6h2v3M12 6h3M17 4l1.5-1.5M18 8h2M17 12l1.5 1.5" />
    </svg>
  );
}

export function IndustrialCleanIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21V9l5 3V9l5 3V9l5 3V5h3v16H3Z" />
      <path d="M7 17h2M11 17h2M15 17h2" />
    </svg>
  );
}

export function MapIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2V6ZM9 4v14M15 6v14" />
    </svg>
  );
}

export function QrIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-6-5.3-6-10a6 6 0 1 1 12 0c0 4.7-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v10h12V10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

export function OrderIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function HeadsetIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <path d="M4 13h3v5H5a1 1 0 0 1-1-1v-4ZM17 13h3v4a1 1 0 0 1-1 1h-2v-5Z" />
      <path d="M17 18v1a2 2 0 0 1-2 2h-2" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function ZaloIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        d="M12 3C6.9 3 3 6.5 3 11c0 2.4 1.1 4.5 2.9 6-.2 1.2-.7 2.5-1.6 3.6 1.9-.2 3.5-.9 4.7-1.8 1 .3 2 .4 3 .4 5.1 0 9-3.5 9-8.1S17.1 3 12 3Z"
        fill="currentColor"
      />
      <text
        x="12"
        y="13.8"
        textAnchor="middle"
        fontSize="7.4"
        fontWeight="900"
        fontFamily="inherit"
        fill="#fff"
        letterSpacing="-0.3"
      >
        Zalo
      </text>
    </svg>
  );
}

export function WashIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 9h6l1 11H7L8 9ZM10 9V6h2v3M12 6h3M17 4l1.5-1.5M18 8h2M17 12l1.5 1.5" />
    </svg>
  );
}
