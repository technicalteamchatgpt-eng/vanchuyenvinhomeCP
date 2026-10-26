import {
  ArrowRightIcon,
  BoxIcon,
  HomeIcon,
  OrderIcon,
  PhoneIcon,
  PinIcon,
  TruckIcon,
  UsersIcon,
  WashIcon,
} from "./icons";
import { PhotoSlot } from "./PhotoSlot";

const STATS = [
  { value: "3 hạng xe tải", label: "từ 500kg đến 1,5 tấn, xe nhỏ vào được hẻm" },
  { value: "2 giờ", label: "công bốc xếp đã tính trong giá" },
  { value: "0đ", label: "phụ thu ngoài bảng giá" },
  { value: "100%", label: "xe và thợ là người của VINHOME CP" },
];

function PhoneMockup() {
  return (
    <div className="pointer-events-none absolute -bottom-8 -left-6 hidden origin-bottom-left scale-[.58] lg:block xl:-left-10 xl:scale-[.64]">
      <div className="relative mx-auto w-[272px] sm:w-[292px] lg:ml-auto lg:mr-2">
        <div className="landing-phone-shadow rounded-[44px] bg-navy p-[10px]">
          <div className="relative overflow-hidden rounded-[35px] bg-canvas">
            <div
              aria-hidden
              className="absolute left-1/2 top-2.5 z-10 h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-navy"
            />
            <div className="bg-[linear-gradient(135deg,#0e2a5c_0%,#1457d6_100%)] px-5 pb-6 pt-12 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-bold text-white/70">Chào bạn,</p>
                  <p className="mt-0.5 text-[15px] font-black leading-tight">
                    Hôm nay VINHOME CP chở gì cho bạn?
                  </p>
                </div>
                <span className="rounded-full bg-white/15 px-2 py-1 text-[9.5px] font-black tracking-wide">
                  VINHOME
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-white/15 px-3 py-2 text-[11px] font-bold text-white/85 ring-1 ring-white/20">
                <PinIcon width={13} height={13} />
                Nhập địa chỉ đi và đến
              </div>
            </div>
            <div className="-mt-3 grid grid-cols-2 gap-2 px-4">
              <div className="flex items-center gap-2 rounded-xl bg-surface px-2.5 py-2.5 shadow-card">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-soft text-primary">
                  <TruckIcon width={16} height={16} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-black leading-tight text-ink">
                    Chuyển nhà
                  </span>
                  <span className="block truncate text-[9px] font-bold text-subtle">
                    Xe, thợ, đóng gói
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-surface px-2.5 py-2.5 shadow-card">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-success-soft text-success">
                  <WashIcon width={16} height={16} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-black leading-tight text-ink">
                    Vệ sinh
                  </span>
                  <span className="block truncate text-[9px] font-bold text-subtle">
                    VinHome Clean
                  </span>
                </span>
              </div>
            </div>
            <div className="mx-4 mb-4 mt-3 rounded-2xl bg-surface p-3 shadow-card">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success-soft px-2 py-0.5 text-[10px] font-black text-success">
                  <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-success-dot" />
                  Xe đang trên đường đến
                </span>
                <span className="text-[12px] font-black text-navy">12 phút</span>
              </div>
              <div
                aria-hidden
                className="relative mt-2 h-[92px] overflow-hidden rounded-xl bg-[linear-gradient(135deg,#dfe9fb_0%,#f3f6fc_55%,#f8fafe_100%)]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,42,92,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,42,92,0.06)_1px,transparent_1px)] bg-[size:18px_18px]" />
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 100" preserveAspectRatio="none" fill="none">
                  <path
                    d="M18 78 C50 70, 60 30, 100 40 S150 60, 182 22"
                    stroke="#1457d6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="6 6"
                    opacity="0.7"
                  />
                </svg>
                <span className="absolute left-[7%] top-[70%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-navy shadow" />
                <span className="absolute left-[91%] top-[22%] -translate-x-1/2 -translate-y-full text-primary">
                  <PinIcon width={22} height={22} className="drop-shadow" />
                </span>
                <span className="absolute left-1/2 top-[38%] flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-cta">
                  <TruckIcon width={14} height={14} />
                </span>
              </div>
              <div className="mt-2.5 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-soft text-primary">
                  <TruckIcon width={14} height={14} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] font-black text-ink">Xe 1 tấn, 2 thợ bốc xếp</p>
                  <p className="text-[9.5px] font-bold text-subtle">Xe của VINHOME CP</p>
                </div>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
                  <PhoneIcon width={12} height={12} />
                </span>
              </div>
            </div>
            <div className="flex items-center justify-around border-t border-hairline bg-surface px-3 pb-3 pt-2 text-[9px] font-black text-subtle">
              <span className="flex flex-col items-center gap-0.5 text-primary">
                <HomeIcon width={15} height={15} />
                Trang chủ
              </span>
              <span className="flex flex-col items-center gap-0.5">
                <OrderIcon width={15} height={15} />
                Đơn của tôi
              </span>
              <span className="flex flex-col items-center gap-0.5">
                <UsersIcon width={15} height={15} />
                Tài khoản
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="landing-blob pointer-events-none absolute -left-24 top-10 h-[420px] w-[420px] rounded-full bg-blue-soft" />
      <div aria-hidden className="landing-blob pointer-events-none absolute right-[8%] top-0 h-[360px] w-[360px] rounded-full bg-tip" />
      <div aria-hidden className="landing-blob pointer-events-none absolute -right-20 bottom-0 h-[380px] w-[380px] rounded-full bg-[#dbe9ff]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-12 sm:px-6 sm:pt-16 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full bg-surface px-3.5 py-1.5 text-[12.5px] font-black text-navy shadow-card ring-1 ring-line">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                <TruckIcon width={12} height={12} />
              </span>
              Xe và thợ của VINHOME CP, phục vụ TP.HCM
            </p>

            <h1 className="mt-6 text-[40px] font-black leading-[1.06] tracking-tight text-navy sm:text-[54px] lg:text-[62px]">
              Chuyển nhà trọn gói,{" "}
              <span className="relative inline-block whitespace-nowrap text-primary">
                giá công khai
                <svg
                  aria-hidden
                  className="absolute -bottom-[0.18em] left-0 h-[0.32em] w-full text-warning"
                  viewBox="0 0 200 20"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path d="M3 15c34-9 96-12 194-7" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
                </svg>
              </span>
              , báo ngay khi đặt
            </h1>

            <p className="mt-6 max-w-xl text-[17px] font-bold leading-relaxed text-muted sm:text-[18px]">
              Xe tải từ 500kg đến 1,5 tấn, thợ bốc xếp là nhân viên công ty. Đặt trên app hoặc gọi
              hotline là có giá ngay. Xe chạy tới đâu bạn xem trên bản đồ tới đó.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#lien-he" className="btn-primary h-[52px] rounded-full px-7 text-[16px]">
                Đặt lịch ngay
                <ArrowRightIcon width={18} height={18} />
              </a>
              <a href="tel:+84909000111" className="btn-outline h-[52px] rounded-full px-6 text-[16px]">
                <PhoneIcon width={18} height={18} className="text-primary" />
                Gọi 0909 000 111
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-soft text-primary ring-[3px] ring-surface">
                  <TruckIcon width={21} height={21} />
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-soft text-primary ring-[3px] ring-surface">
                  <UsersIcon width={21} height={21} />
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-soft text-primary ring-[3px] ring-surface">
                  <BoxIcon width={21} height={21} />
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-soft text-primary ring-[3px] ring-surface">
                  <WashIcon width={21} height={21} />
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-[13px] font-black text-white ring-[3px] ring-surface">
                  VC
                </span>
              </div>
              <p className="max-w-[300px] text-[13.5px] font-bold leading-snug text-muted">
                Xe, thợ bốc xếp, đóng gói, vệ sinh:{" "}
                <span className="text-navy">một đội VINHOME CP làm hết</span>, không qua trung gian.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto lg:mr-0">
              <figure className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-card-hover ring-1 ring-line lg:aspect-[4/5]">
                <PhotoSlot icon={TruckIcon} className="absolute inset-0" iconClassName="h-20 w-20" />
                <figcaption className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-surface/95 px-3.5 py-1.5 text-[12.5px] font-black text-navy shadow-card backdrop-blur">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                    <TruckIcon width={12} height={12} />
                  </span>
                  Xe và thợ của VINHOME CP
                </figcaption>
                <div className="landing-float absolute bottom-4 right-4 hidden items-center gap-2 rounded-full bg-navy px-3.5 py-2 text-[12.5px] font-black text-white shadow-card-hover sm:flex">
                  <PinIcon width={14} height={14} />
                  Theo dõi xe trực tiếp
                </div>
              </figure>

              <PhoneMockup />
            </div>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-card bg-line ring-1 ring-line lg:mt-20 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.value} className="flex flex-col bg-surface px-5 py-5 sm:px-6">
              <dt className="order-2 text-[13px] font-bold text-muted">{stat.label}</dt>
              <dd className="order-1 text-[30px] font-black tracking-tight text-navy sm:text-[34px]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
