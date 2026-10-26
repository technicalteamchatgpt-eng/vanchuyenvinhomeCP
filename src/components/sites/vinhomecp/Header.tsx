import Link from "next/link";
import { Logo } from "./Logo";
import { MenuIcon, PhoneIcon } from "./icons";

const NAV_LINKS = [
  { href: "#dich-vu", label: "Dịch vụ" },
  { href: "#cach-hoat-dong", label: "Quy trình" },
  { href: "#bang-gia", label: "Bảng giá" },
  { href: "#ve-sinh", label: "Vệ sinh" },
  { href: "#vi-sao", label: "Vì sao chọn VINHOME CP" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-surface/90 backdrop-blur supports-[backdrop-filter]:bg-surface/75">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[84px]">
        <Link aria-label="VINHOME CP, về đầu trang" className="flex shrink-0 items-center" href="/">
          <Logo />
        </Link>

        <nav aria-label="Điều hướng chính" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-[14px] font-extrabold text-muted transition-colors hover:bg-blue-soft hover:text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+84909000111"
            className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-[14px] font-black text-navy hover:bg-blue-soft md:inline-flex"
          >
            <PhoneIcon width={16} height={16} />
            0909 000 111
          </a>
          <a href="#lien-he" className="btn-primary h-10 rounded-full px-4.5 text-[14px]">
            Đặt lịch
          </a>
          <details className="group relative lg:hidden">
            <summary
              aria-label="Mở menu"
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full text-navy hover:bg-blue-soft [&::-webkit-details-marker]:hidden"
            >
              <MenuIcon width={22} height={22} />
            </summary>
            <nav aria-label="Điều hướng di động" className="card absolute right-0 top-12 w-64 border border-line p-2">
              <ul>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block rounded-tile px-3 py-2.5 text-[15px] font-extrabold text-ink hover:bg-blue-soft"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-1 border-t border-hairline pt-1">
                  <a
                    href="tel:+84909000111"
                    className="flex items-center gap-2 rounded-tile px-3 py-2.5 text-[15px] font-black text-primary hover:bg-blue-soft"
                  >
                    <PhoneIcon width={16} height={16} />
                    0909 000 111
                  </a>
                </li>
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
