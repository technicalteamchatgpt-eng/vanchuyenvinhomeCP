import { ArrowRightIcon, PhoneIcon, PinIcon, TruckIcon, UsersIcon, ZaloIcon } from "./icons";
import { PhotoSlot } from "./PhotoSlot";

export function Contact() {
  return (
    <section id="lien-he" className="scroll-mt-24 pb-20 sm:pb-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[28px] bg-navy p-7 text-white shadow-card-hover sm:p-12">
          <PhotoSlot icon={UsersIcon} className="absolute inset-0 opacity-20" iconClassName="h-20 w-20 text-white" />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,42,92,.94)_0%,rgba(14,42,92,.86)_50%,rgba(20,65,150,.55)_100%)]"
          />
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="label-caps text-white/70">Liên hệ đặt lịch</p>
              <h2 className="mt-2.5 text-[30px] font-black leading-[1.1] tracking-tight sm:text-[40px]">
                Tuần này chuyển nhà? Đặt lịch hôm nay, có giá ngay.
              </h2>
              <p className="mt-4 max-w-lg text-[16px] font-bold leading-relaxed text-white/80">
                Đặt trên <span className="font-black text-white">app.vinhomecp.vn</span>, gọi
                hotline hoặc nhắn Zalo. Nhân viên gọi lại xác nhận giờ trước khi điều xe. Tư vấn
                không mất phí.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#lien-he"
                  className="btn h-[52px] rounded-full bg-white px-7 text-[16px] text-navy hover:bg-blue-soft"
                >
                  Đặt lịch ngay
                  <ArrowRightIcon width={18} height={18} />
                </a>
                <a
                  href="tel:+84909000111"
                  className="btn h-[52px] rounded-full border-2 border-white/40 bg-transparent px-6 text-[16px] text-white hover:bg-white/10"
                >
                  <PhoneIcon width={18} height={18} />
                  Gọi 0909 000 111
                </a>
                <a
                  href="https://zalo.me/0909000111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn h-[52px] rounded-full border-2 border-white/40 bg-transparent px-6 text-[16px] text-white hover:bg-white/10"
                >
                  <ZaloIcon width={18} height={18} />
                  Chat Zalo
                </a>
              </div>
            </div>

            <ul className="grid gap-3 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
              <li className="flex items-center gap-3 rounded-card bg-white/10 px-4 py-3.5 ring-1 ring-white/15">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <PhoneIcon width={18} height={18} />
                </span>
                <div>
                  <p className="label-caps text-white/60">Hotline</p>
                  <a href="tel:+84909000111" className="text-[16px] font-black hover:underline">
                    0909 000 111
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 rounded-card bg-white/10 px-4 py-3.5 ring-1 ring-white/15">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <TruckIcon width={18} height={18} />
                </span>
                <div>
                  <p className="label-caps text-white/60">Đặt lịch trên app</p>
                  <a href="#lien-he" className="text-[16px] font-black hover:underline">
                    app.vinhomecp.vn
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 rounded-card bg-white/10 px-4 py-3.5 ring-1 ring-white/15">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <PinIcon width={18} height={18} />
                </span>
                <div>
                  <p className="label-caps text-white/60">Khu vực phục vụ</p>
                  <p className="text-[16px] font-black">TP. Hồ Chí Minh</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
