import { Logo } from "./Logo";
import { PhoneIcon, PinIcon, TruckIcon, ZaloIcon } from "./icons";

const SERVICE_LINKS = [
  { href: "#dich-vu", label: "Chuyển nhà trọn gói" },
  { href: "#dich-vu", label: "Chuyển văn phòng trọn gói" },
  { href: "#dich-vu", label: "Chuyển phòng trọ" },
  { href: "#dich-vu", label: "Chuyển nhà hàng, quán ăn" },
  { href: "#ve-sinh", label: "Vệ sinh chuyên sâu (VinHome Clean)" },
  { href: "#ve-sinh", label: "Vệ sinh công nghiệp (VinHome Clean)" },
];

const COMPANY_LINKS = [
  { href: "#bang-gia", label: "Bảng giá dịch vụ" },
  { href: "#cach-hoat-dong", label: "Quy trình chuyển nhà" },
  { href: "#vi-sao", label: "Vì sao chọn VINHOME CP" },
  { href: "#lien-he", label: "Liên hệ đặt lịch" },
  { href: "#lien-he", label: "Đặt lịch trên app" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-3 text-[15px] font-black text-navy">
              Chuyển nhà trọn gói và vệ sinh VinHome Clean
            </p>
            <p className="mt-2 max-w-xs text-[13.5px] font-bold leading-relaxed text-muted">
              Chuyển nhà, chuyển văn phòng, phòng trọ và vệ sinh nhà cửa. Bảng giá công khai, giá
              chốt trước. Xe và thợ đều là nhân viên VINHOME CP. Phục vụ TP. Hồ Chí Minh.
            </p>
            <p className="mt-4 text-[13px] font-black tracking-[0.14em] text-primary">
              SẠCH SÂU, AN TOÀN, AN TÂM
            </p>
          </div>

          <nav aria-label="Dịch vụ" className="lg:col-span-3">
            <p className="label-caps">Dịch vụ</p>
            <ul className="mt-3 space-y-2">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[14px] font-bold text-ink hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="VINHOME CP" className="lg:col-span-2">
            <p className="label-caps">VINHOME CP</p>
            <ul className="mt-3 space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[14px] font-bold text-ink hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="label-caps">Liên hệ</p>
            <ul className="mt-3 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-soft text-primary">
                  <PhoneIcon width={15} height={15} />
                </span>
                <div>
                  <p className="text-[12px] font-bold text-subtle">Hotline</p>
                  <a href="tel:+84909000111" className="text-[15px] font-black text-navy hover:text-primary">
                    0909 000 111
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-soft text-primary">
                  <TruckIcon width={15} height={15} />
                </span>
                <div>
                  <p className="text-[12px] font-bold text-subtle">Đặt lịch trên app</p>
                  <a href="#lien-he" className="text-[15px] font-black text-navy hover:text-primary">
                    app.vinhomecp.vn
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-soft text-primary">
                  <ZaloIcon width={15} height={15} />
                </span>
                <div>
                  <p className="text-[12px] font-bold text-subtle">Zalo</p>
                  <a
                    href="https://zalo.me/0909000111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-black text-navy hover:text-primary"
                  >
                    zalo.me/0909000111
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-soft text-primary">
                  <PinIcon width={15} height={15} />
                </span>
                <div>
                  <p className="text-[12px] font-bold text-subtle">Khu vực phục vụ</p>
                  <p className="text-[15px] font-black text-navy">TP. Hồ Chí Minh</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-hairline pt-5 text-[12.5px] font-bold text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 VINHOME CP. Giá theo bảng giá đang áp dụng. Đơn lớn có thể cần khảo sát trước khi chốt.</p>
        </div>
      </div>
    </footer>
  );
}
