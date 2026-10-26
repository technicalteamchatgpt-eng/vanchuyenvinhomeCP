import { Highlight } from "./Services";
import { CheckIcon, IndustrialCleanIcon, WashIcon } from "./icons";
import { PhotoSlot } from "./PhotoSlot";
import type { ComponentType, SVGProps } from "react";

const DEEP_CLEAN_ROWS = [
  { count: "1 thợ", time: "2 giờ", price: "450.000đ" },
  { count: "2 thợ", time: "2 giờ", price: "850.000đ" },
  { count: "3 thợ", time: "2 giờ", price: "1.250.000đ" },
];

const INDUSTRIAL_CLEAN_ROWS = [
  { count: "1 thợ", time: "2 giờ", price: "650.000đ" },
  { count: "2 thợ", time: "2 giờ", price: "1.250.000đ" },
  { count: "3 thợ", time: "2 giờ", price: "1.850.000đ" },
];

const FEATURES = [
  "Khử khuẩn hiệu quả",
  "Làm sạch toàn diện",
  "Trang thiết bị hiện đại",
  "Dịch vụ chuyên nghiệp",
];

function PriceTable({
  title,
  icon,
  rows,
  note,
}: {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  rows: { count: string; time: string; price: string }[];
  note: string;
}) {
  return (
    <div className="card overflow-hidden border border-line">
      <div className="relative aspect-[16/9] w-full">
        <PhotoSlot icon={icon} className="absolute inset-0" />
      </div>
      <div className="p-6 sm:p-7">
        <h3 className="text-[19px] font-black text-navy">{title}</h3>
        <table className="mt-4 w-full border-collapse text-[14px]">
          <thead>
            <tr className="border-b border-line text-left text-[12px] font-black uppercase tracking-wide text-subtle">
              <th className="py-2 pr-4">Số thợ</th>
              <th className="py-2 pr-4">Thời gian</th>
              <th className="py-2">Giá</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.count} className="border-b border-hairline font-bold text-ink">
                <td className="py-3 pr-4">{row.count}</td>
                <td className="py-3 pr-4">{row.time}</td>
                <td className="py-3">{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3 text-[12.5px] font-bold text-subtle">{note}</p>
      </div>
    </div>
  );
}

export function CleaningService() {
  return (
    <section id="ve-sinh" className="scroll-mt-24 border-y border-line bg-blue-soft/50 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="label-caps text-primary">VinHome Clean, dịch vụ vệ sinh</p>
          <h2 className="mt-2.5 text-[30px] font-black leading-[1.12] tracking-tight text-navy sm:text-[38px]">
            Dọn về nhà mới, <Highlight>sạch từ ngày đầu</Highlight>
          </h2>
          <p className="mt-4 text-[16px] font-bold leading-relaxed text-muted">
            Hai gói vệ sinh chuyên sâu (có máy khử khuẩn) và vệ sinh công nghiệp. Đặt kèm chuyến
            chuyển nhà hoặc đặt riêng đều được.
          </p>
          <p className="mt-3 text-[13px] font-black tracking-[0.14em] text-primary">
            SẠCH SÂU, AN TOÀN, AN TÂM
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <PriceTable
            title="Vệ sinh chuyên sâu (có máy khử khuẩn)"
            icon={WashIcon}
            rows={DEEP_CLEAN_ROWS}
            note="Quá 2 giờ tính thêm 150.000đ/giờ/nhân viên"
          />
          <PriceTable
            title="Vệ sinh công nghiệp"
            icon={IndustrialCleanIcon}
            rows={INDUSTRIAL_CLEAN_ROWS}
            note="Quá 2 giờ tính thêm 200.000đ/giờ/nhân viên"
          />
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {FEATURES.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2.5 rounded-card bg-surface px-4 py-3.5 text-[14px] font-black text-navy ring-1 ring-line"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-success-soft text-success">
                <CheckIcon width={15} height={15} />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
