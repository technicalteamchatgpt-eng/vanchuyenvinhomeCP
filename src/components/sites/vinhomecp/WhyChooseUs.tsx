import { Highlight } from "./Services";
import { PhotoSlot } from "./PhotoSlot";
import {
  ArrowRightIcon,
  BoxIcon,
  HeadsetIcon,
  MapIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "./icons";

const REASONS = [
  {
    n: "01",
    icon: ShieldCheckIcon,
    title: "Giá theo bảng công khai, không phụ thu ngoài bảng",
    body: "Giá công khai trên web, báo giá ngay trên app, từng khoản ghi rõ. Đi xa hơn 15 km thì tính thêm theo đúng bảng. Nhà nhiều đồ hay tháo lắp phức tạp thì khảo sát rồi mới chốt.",
  },
  {
    n: "02",
    icon: UsersIcon,
    title: "Xe và thợ của VINHOME CP, không qua trung gian",
    body: "Không giao lại cho cộng tác viên hay xe ngoài. Thợ là nhân viên công ty, làm theo quy trình và chịu trách nhiệm với đồ đạc của bạn.",
  },
  {
    n: "03",
    icon: MapIcon,
    title: "Biết xe đang ở đâu",
    body: "Từ lúc xe xuất phát tới khi đến nơi, bạn mở app là thấy xe trên bản đồ, khỏi phải gọi hỏi.",
  },
  {
    n: "04",
    icon: BoxIcon,
    title: "Một đơn lo hết, từ đóng gói tới dọn nhà mới",
    body: "Đóng gói, tháo lắp nội thất, bốc xếp và vệ sinh nhà mới đặt chung một đơn. Một đội làm từ đầu tới cuối, bạn không phải gọi nhiều bên.",
  },
  {
    n: "05",
    icon: HeadsetIcon,
    title: "Có hư hỏng thì VINHOME CP đền",
    body: "Đồ được kiểm đếm, chụp ảnh trước khi lên xe. Hư hỏng do bên mình gây ra thì bên mình đền. Có gì chưa ổn, bạn gọi hotline là có người xử lý.",
    wide: true,
  },
];

export function WhyChooseUs() {
  return (
    <section id="vi-sao" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="label-caps text-primary">Vì sao chọn VINHOME CP</p>
          <h2 className="mt-2.5 text-[30px] font-black leading-[1.12] tracking-tight text-navy sm:text-[38px]">
            Đặt VINHOME CP, <Highlight>bạn được gì?</Highlight>
          </h2>
          <p className="mt-4 text-[16px] font-bold leading-relaxed text-muted">
            Năm điều VINHOME CP giữ với mọi khách, chuyển một phòng trọ hay cả văn phòng cũng vậy.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <li
              key={reason.n}
              className={`card relative border border-line p-6 ${reason.wide ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-soft text-primary">
                  <reason.icon width={22} height={22} />
                </span>
                <span className="text-[34px] font-black leading-none tracking-tight text-line">
                  {reason.n}
                </span>
              </div>
              <h3 className="mt-5 text-[17px] font-black leading-snug text-ink">{reason.title}</h3>
              <p className="mt-2 text-[13.5px] font-bold leading-relaxed text-muted">{reason.body}</p>
            </li>
          ))}

          <li className="relative overflow-hidden rounded-card bg-navy p-6 text-white shadow-card-hover md:col-span-2 lg:col-span-1">
            <PhotoSlot icon={UsersIcon} className="absolute inset-0 opacity-25" iconClassName="h-16 w-16 text-white" />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,42,92,.96)_0%,rgba(14,42,92,.85)_45%,rgba(14,42,92,.35)_100%)]"
            />
            <div className="relative">
              <p className="label-caps text-white/70">Đội thợ VINHOME CP</p>
              <p className="mt-2 text-[22px] font-black leading-tight">
                Việc nặng để đội thợ VINHOME CP lo. Bạn chỉ cần có mặt nhận nhà.
              </p>
              <a
                href="#lien-he"
                className="btn mt-5 h-11 rounded-full bg-white px-5 text-[14.5px] text-navy hover:bg-blue-soft"
              >
                Đặt lịch ngay
                <ArrowRightIcon width={16} height={16} />
              </a>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
