import { Highlight } from "./Services";
import { QuoteCalculator } from "./QuoteCalculator";
import { PhotoSlot } from "./PhotoSlot";
import { TruckIcon, WrenchIcon } from "./icons";

const DISTANCE_ROWS = [
  { range: "0-3 km", p500: "150.000đ", p1000: "170.000đ", p1500: "190.000đ" },
  { range: "3-5 km", p500: "190.000đ", p1000: "230.000đ", p1500: "250.000đ" },
  { range: "5-10 km", p500: "230.000đ", p1000: "300.000đ", p1500: "350.000đ" },
  { range: "10-15 km", p500: "290.000đ", p1000: "350.000đ", p1500: "450.000đ" },
];

const COMBOS = [
  { tier: "BASIC", price: "195.000đ", boxes: "5 thùng carton", notes: ["5 thùng carton", "Bọc PE + Bọc chùn"] },
  {
    tier: "STANDARD",
    price: "350.000đ",
    boxes: "10 thùng carton",
    notes: ["10 thùng carton", "Bọc PE + Bọc chùn"],
    featured: true,
  },
  {
    tier: "PRO",
    price: "650.000đ",
    boxes: "20 thùng carton",
    notes: ["20 thùng carton", "Đệm mút, màng PE bọc Sofa", "Đồ có kích thước lớn"],
  },
  {
    tier: "PREMIUM",
    price: "1.500.000đ",
    boxes: "40 thùng carton",
    notes: ["40 thùng carton", "Đệm lớn, màng PE bọc Sofa lớn", "Đồ cồng kềnh"],
  },
];

const LABOR_ROWS = [
  { count: "1 thợ", time: "2 giờ", price: "450.000đ" },
  { count: "2 thợ", time: "2 giờ", price: "850.000đ" },
  { count: "3 thợ", time: "2 giờ", price: "1.250.000đ" },
];

const DISASSEMBLY_ROWS = [
  { item: "Giường", range: "150.000đ đến 300.000đ" },
  { item: "Tủ nhỏ", range: "100.000đ đến 200.000đ" },
  { item: "Tủ lớn", range: "150.000đ đến 300.000đ" },
  { item: "Kệ/bàn (nếu tháo lắp)", range: "50.000đ đến 150.000đ" },
  { item: "Máy lạnh (tháo lắp)", range: "300.000đ đến 500.000đ" },
];

function StepBadge({ n }: { n: number }) {
  return (
    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary text-[15px] font-black text-white">
      {n}
    </span>
  );
}

export function Pricing() {
  return (
    <section id="bang-gia" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="label-caps text-primary">Bảng giá dịch vụ</p>
            <h2 className="mt-2.5 text-[30px] font-black leading-[1.12] tracking-tight text-navy sm:text-[38px]">
              Bảng giá công khai, <Highlight>chốt trước khi xe chạy</Highlight>
            </h2>
            <p className="mt-4 text-[16px] font-bold leading-relaxed text-muted">
              Bảng giá đang áp dụng, đã gồm xe, thợ bốc xếp và vật tư đóng gói theo gói bạn chọn.
              Đơn lớn khảo sát miễn phí rồi mới chốt giá.
            </p>
          </div>
          <a href="#lien-he" className="btn-primary h-12 shrink-0 rounded-full px-6 text-[15px]">
            Nhận báo giá trên app
          </a>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-card">
          <PhotoSlot icon={TruckIcon} className="h-[160px] w-full sm:h-[220px]" iconClassName="h-12 w-12" />
        </div>

        <div className="mt-10 flex flex-col gap-10">
          <div className="card border border-line p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <StepBadge n={1} />
              <h3 className="text-[20px] font-black text-navy">Giá xe theo khoảng cách</h3>
            </div>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-[14px]">
                <thead>
                  <tr className="border-b border-line text-left text-[12.5px] font-black uppercase tracking-wide text-subtle">
                    <th className="py-2 pr-4">Khoảng cách</th>
                    <th className="py-2 pr-4">Xe 500kg</th>
                    <th className="py-2 pr-4">Xe 1 tấn</th>
                    <th className="py-2">Xe 1,5 tấn</th>
                  </tr>
                </thead>
                <tbody>
                  {DISTANCE_ROWS.map((row) => (
                    <tr key={row.range} className="border-b border-hairline font-bold text-ink">
                      <td className="py-3 pr-4">{row.range}</td>
                      <td className="py-3 pr-4">{row.p500}</td>
                      <td className="py-3 pr-4">{row.p1000}</td>
                      <td className="py-3">{row.p1500}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[12.5px] font-bold text-subtle">
              (*) Trên 15 km tính thêm 12.000đ mỗi km, ngoài ra không thu thêm khoản nào.
            </p>
          </div>

          <div className="card border border-line p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <StepBadge n={2} />
              <h3 className="text-[20px] font-black text-navy">Combo đóng gói</h3>
            </div>
            <p className="mt-2 text-[13.5px] font-bold text-muted">
              Đồ cồng kềnh quy ra số thùng carton tương đương.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {COMBOS.map((combo) => (
                <div
                  key={combo.tier}
                  className={`relative flex flex-col rounded-tile border p-4 ${
                    combo.featured ? "border-primary bg-blue-soft" : "border-line bg-surface"
                  }`}
                >
                  {combo.featured ? (
                    <span className="absolute -top-3 right-4 rounded-full bg-primary px-2.5 py-1 text-[10.5px] font-black text-white">
                      Nhiều khách chọn
                    </span>
                  ) : null}
                  <p className="label-caps text-primary">Combo</p>
                  <p className="mt-1 text-[17px] font-black text-navy">{combo.tier}</p>
                  <p className="mt-2 text-[22px] font-black text-primary">{combo.price}</p>
                  <p className="text-[12px] font-bold text-subtle">≈ {combo.boxes}</p>
                  <ul className="mt-3 flex flex-col gap-1.5 text-[12.5px] font-bold text-ink/80">
                    {combo.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="card border border-line p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <StepBadge n={3} />
              <h3 className="text-[20px] font-black text-navy">Nhân công bốc xếp</h3>
            </div>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse text-[14px]">
                <thead>
                  <tr className="border-b border-line text-left text-[12.5px] font-black uppercase tracking-wide text-subtle">
                    <th className="py-2 pr-4">Số thợ</th>
                    <th className="py-2 pr-4">Thời gian</th>
                    <th className="py-2">Giá</th>
                  </tr>
                </thead>
                <tbody>
                  {LABOR_ROWS.map((row) => (
                    <tr key={row.count} className="border-b border-hairline font-bold text-ink">
                      <td className="py-3 pr-4">{row.count}</td>
                      <td className="py-3 pr-4">{row.time}</td>
                      <td className="py-3">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[12.5px] font-bold text-subtle">
              Quá 2 giờ tính thêm 150.000đ/giờ/thợ. Từ 4 thợ trở lên tính bằng giá 3 thợ cộng thêm
              từng thợ.
            </p>
          </div>

          <div className="card grid gap-6 border border-line p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <StepBadge n={4} />
                <h3 className="text-[20px] font-black text-navy">Tháo lắp nội thất</h3>
              </div>
              <ul className="mt-5 flex flex-col gap-3">
                {DISASSEMBLY_ROWS.map((row) => (
                  <li
                    key={row.item}
                    className="flex items-center justify-between border-b border-hairline pb-3 text-[14px] font-bold text-ink"
                  >
                    <span>{row.item}</span>
                    <span className="text-muted">{row.range}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[12.5px] font-bold text-subtle">
                Giá tuỳ kích thước và độ khó, thợ xem tận nơi rồi chốt.
              </p>
            </div>
            <div className="relative hidden overflow-hidden rounded-card sm:block">
              <PhotoSlot icon={WrenchIcon} className="absolute inset-0" iconClassName="h-12 w-12" />
            </div>
          </div>

          <div className="card border border-line p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <StepBadge n={5} />
              <h3 className="text-[20px] font-black text-navy">Báo giá nhanh</h3>
            </div>
            <p className="mt-2 text-[13.5px] font-bold text-muted">
              Tính theo bảng giá ở trên, không cần đăng nhập.
            </p>
            <div className="mt-6">
              <QuoteCalculator />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
