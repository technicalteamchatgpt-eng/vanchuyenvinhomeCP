import {
  CheckIcon,
  OfficeIcon,
  RestaurantIcon,
  RoomIcon,
  TruckIcon,
  WashIcon,
} from "./icons";
import { PhotoSlot } from "./PhotoSlot";

function Underline() {
  return (
    <svg
      aria-hidden
      className="absolute -bottom-[0.18em] left-0 h-[0.32em] w-full text-warning"
      viewBox="0 0 200 20"
      preserveAspectRatio="none"
      fill="none"
    >
      <path d="M3 15c34-9 96-12 194-7" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
    </svg>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap text-primary">
      {children}
      <Underline />
    </span>
  );
}

const TAGS = [
  { icon: TruckIcon, label: "Chuyển nhà", bg: "bg-blue-soft", fg: "text-primary" },
  { icon: OfficeIcon, label: "Chuyển văn phòng", bg: "bg-warning-soft", fg: "text-warning" },
  { icon: RoomIcon, label: "Chuyển phòng trọ", bg: "bg-success-soft", fg: "text-success" },
  { icon: RestaurantIcon, label: "Chuyển nhà hàng, quán ăn", bg: "bg-purple-soft", fg: "text-purple" },
];

const MOVING_POINTS = [
  "Xe tải 500kg, 1 tấn, 1,5 tấn, chọn theo lượng đồ",
  "Báo giá ngay theo bảng giá công khai bên dưới",
  "Xem xe trên bản đồ suốt chuyến, chuyển khoản khi xong việc",
];

const CLEAN_POINTS = [
  "1 đến 3 nhân viên, tính theo ca 2 giờ đầu",
  "Khử khuẩn hiệu quả, làm sạch toàn diện",
  "Trang thiết bị hiện đại, dịch vụ chuyên nghiệp",
];

export function Services() {
  return (
    <section id="dich-vu" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="label-caps text-primary">Dịch vụ của VINHOME CP</p>
          <h2 className="mt-2.5 text-[30px] font-black leading-[1.12] tracking-tight text-navy sm:text-[38px]">
            Hai việc VINHOME CP làm: <Highlight>chuyển nhà</Highlight> và <Highlight>vệ sinh</Highlight>
          </h2>
          <p className="mt-4 text-[16px] font-bold leading-relaxed text-muted">
            Chọn một trong hai, phần còn lại (loại nhà, số đồ, số thợ, đóng gói, tháo lắp) bạn chọn
            tiếp trong app. Đặt chung một đơn cũng được.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 lg:grid-cols-2">
          <li className="card flex flex-col overflow-hidden border border-line transition-shadow hover:shadow-card-hover">
            <div className="relative aspect-[16/9] w-full">
              <PhotoSlot icon={TruckIcon} className="absolute inset-0" />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-blue-soft text-primary">
                  <TruckIcon width={28} height={28} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="label-caps">Vận chuyển</p>
                  <h3 className="mt-0.5 text-[24px] font-black leading-tight text-navy sm:text-[26px]">
                    Chuyển nhà trọn gói
                  </h3>
                  <p className="mt-1.5 text-[14px] font-bold text-muted">
                    Xe tải, thợ bốc xếp, đóng gói và tháo lắp nội thất. Một đội VINHOME CP làm từ
                    nhà cũ tới nhà mới.
                  </p>
                </div>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {TAGS.map(({ icon: Icon, label, bg, fg }) => (
                  <li
                    key={label}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-extrabold ${bg} ${fg}`}
                  >
                    <Icon width={14} height={14} />
                    {label}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-col gap-2 border-t border-hairline pt-4 text-[14px] font-bold text-ink/85">
                {MOVING_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-[3px] flex h-4 w-4 flex-none items-center justify-center rounded-full bg-success-soft text-success">
                      <CheckIcon width={11} height={11} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <a
                href="#lien-he"
                className="btn-primary mt-6 h-12 self-start rounded-full px-6 text-[15px]"
              >
                Đặt chuyển nhà
              </a>
            </div>
          </li>

          <li className="card flex flex-col overflow-hidden border border-line transition-shadow hover:shadow-card-hover">
            <div className="relative aspect-[16/9] w-full">
              <PhotoSlot icon={WashIcon} className="absolute inset-0" />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-success-soft text-success">
                  <WashIcon width={28} height={28} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="label-caps">VinHome Clean</p>
                  <h3 className="mt-0.5 text-[24px] font-black leading-tight text-navy sm:text-[26px]">
                    Vệ sinh nhà cửa
                  </h3>
                  <p className="mt-1.5 text-[14px] font-bold text-muted">
                    Vệ sinh chuyên sâu có máy khử khuẩn và vệ sinh công nghiệp. Đặt kèm chuyến
                    chuyển nhà hoặc đặt riêng.
                  </p>
                </div>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                <li className="inline-flex items-center gap-1.5 rounded-full bg-success-soft px-3 py-1.5 text-[13px] font-extrabold text-success">
                  <WashIcon width={14} height={14} />
                  Vệ sinh chuyên sâu
                </li>
                <li className="inline-flex items-center gap-1.5 rounded-full bg-blue-soft px-3 py-1.5 text-[13px] font-extrabold text-primary">
                  <WashIcon width={14} height={14} />
                  Vệ sinh công nghiệp
                </li>
              </ul>

              <ul className="mt-5 flex flex-col gap-2 border-t border-hairline pt-4 text-[14px] font-bold text-ink/85">
                {CLEAN_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-[3px] flex h-4 w-4 flex-none items-center justify-center rounded-full bg-success-soft text-success">
                      <CheckIcon width={11} height={11} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <a
                href="#lien-he"
                className="btn-primary mt-6 h-12 self-start rounded-full px-6 text-[15px]"
              >
                Đặt vệ sinh
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export { Highlight };
