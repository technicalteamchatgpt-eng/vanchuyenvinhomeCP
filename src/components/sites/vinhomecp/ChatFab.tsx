import { PhoneIcon, ZaloIcon } from "./icons";

export function ChatFab() {
  return (
    <div
      aria-label="Liên hệ nhanh"
      className="fixed bottom-5 right-4 z-30 flex flex-col gap-2.5 2xl:bottom-auto 2xl:right-5 2xl:top-1/2 2xl:-translate-y-1/2"
    >
      <a
        href="tel:+84909000111"
        title="Gọi 0909 000 111"
        aria-label="Gọi 0909 000 111"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-cta transition-transform hover:-translate-y-0.5 hover:bg-primary-pressed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <PhoneIcon width={21} height={21} />
      </a>
      <a
        href="https://zalo.me/0909000111"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat Zalo với VINHOME CP"
        aria-label="Chat Zalo với VINHOME CP"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#0068ff] text-white shadow-cta transition-transform hover:-translate-y-0.5 hover:bg-[#0052cc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <ZaloIcon width={26} height={26} />
      </a>
    </div>
  );
}
