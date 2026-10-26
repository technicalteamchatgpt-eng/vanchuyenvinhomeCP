import { TruckIcon } from "./icons";

/**
 * Original mark for VINHOME CP — a plain icon + wordmark lockup, not derived
 * from any third-party artwork. Swap this out once a real logo is designed.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-primary text-white sm:h-11 sm:w-11">
        <TruckIcon width={20} height={20} className="sm:h-[22px] sm:w-[22px]" />
      </span>
      <span className="flex flex-col justify-center leading-none">
        <span className="text-[16px] font-black tracking-tight text-navy sm:text-[19px]">
          VINHOME <span className="text-primary">CP</span>
        </span>
        <span className="mt-0.5 text-[9.5px] font-extrabold uppercase tracking-[0.2em] text-subtle sm:text-[10.5px]">
          Vận chuyển
        </span>
      </span>
    </span>
  );
}
