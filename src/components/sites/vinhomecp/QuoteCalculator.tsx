"use client";

import { useMemo, useState } from "react";
import { ArrowRightIcon } from "./icons";

const TRUCKS = [
  { value: "truck_500", label: "Xe 500kg" },
  { value: "truck_1000", label: "Xe 1 tấn" },
  { value: "truck_1500", label: "Xe 1,5 tấn" },
] as const;

type TruckValue = (typeof TRUCKS)[number]["value"];

const LABORS = [
  { value: "0", label: "Tự khuân, không cần thợ" },
  { value: "1", label: "1 thợ" },
  { value: "2", label: "2 thợ" },
  { value: "3", label: "3 thợ" },
  { value: "4", label: "4 thợ" },
] as const;

// Distance brackets (km) -> price by truck type, matches the published table above.
const DISTANCE_TABLE: { max: number; price: Record<TruckValue, number> }[] = [
  { max: 3, price: { truck_500: 150_000, truck_1000: 170_000, truck_1500: 190_000 } },
  { max: 5, price: { truck_500: 190_000, truck_1000: 230_000, truck_1500: 250_000 } },
  { max: 10, price: { truck_500: 230_000, truck_1000: 300_000, truck_1500: 350_000 } },
  { max: 15, price: { truck_500: 290_000, truck_1000: 350_000, truck_1500: 450_000 } },
];
const PER_KM_OVER_15 = 12_000;

const LABOR_PRICE: Record<string, number> = {
  "0": 0,
  "1": 450_000,
  "2": 850_000,
  "3": 1_250_000,
};
const LABOR_STEP_AFTER_3 = 400_000;

function laborPrice(count: string) {
  const n = Number(count);
  if (n <= 3) return LABOR_PRICE[count] ?? 0;
  return LABOR_PRICE["3"] + (n - 3) * LABOR_STEP_AFTER_3;
}

function truckLabel(value: TruckValue, distance: number) {
  const label = TRUCKS.find((t) => t.value === value)?.label ?? value;
  const rangeLabel =
    distance <= 3
      ? "0-3 km"
      : distance <= 5
        ? "3-5 km"
        : distance <= 10
          ? "5-10 km"
          : distance <= 15
            ? "10-15 km"
            : `trên 15 km`;
  return `${label}, ${rangeLabel}`;
}

function formatVnd(n: number) {
  return `${n.toLocaleString("vi-VN")}đ`;
}

function truckPrice(value: TruckValue, distance: number) {
  const km = Math.max(0, distance);
  if (km <= 15) {
    const bracket = DISTANCE_TABLE.find((b) => km <= b.max) ?? DISTANCE_TABLE[DISTANCE_TABLE.length - 1];
    return bracket.price[value];
  }
  const base = DISTANCE_TABLE[DISTANCE_TABLE.length - 1].price[value];
  return base + Math.ceil(km - 15) * PER_KM_OVER_15;
}

export function QuoteCalculator() {
  const [distance, setDistance] = useState(7);
  const [truck, setTruck] = useState<TruckValue>("truck_1000");
  const [labor, setLabor] = useState("2");

  const { ridePrice, laborFee, total } = useMemo(() => {
    const ridePrice = truckPrice(truck, distance);
    const laborFee = laborPrice(labor);
    return { ridePrice, laborFee, total: ridePrice + laborFee };
  }, [distance, truck, labor]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="text-[13px] font-extrabold text-navy">Quãng đường (km)</span>
          <input
            type="number"
            min={0}
            step={0.5}
            className="field"
            value={distance}
            onChange={(e) => setDistance(Math.max(0, Number(e.target.value) || 0))}
          />
          <span className="text-[12px] font-bold text-subtle">Trên 15 km thêm 12.000đ mỗi km</span>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-[13px] font-extrabold text-navy">Loại xe</span>
          <select className="field" value={truck} onChange={(e) => setTruck(e.target.value as TruckValue)}>
            {TRUCKS.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-[13px] font-extrabold text-navy">
            Thợ bốc xếp (2 giờ đầu đã tính trong giá)
          </span>
          <select className="field" value={labor} onChange={(e) => setLabor(e.target.value)}>
            {LABORS.map((l) => (
              <option key={l.value} value={l.value}>
                {l.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="card flex flex-col border border-line p-5">
        <p className="label-caps">Báo giá nhanh theo bảng giá</p>
        <dl className="mt-3 flex flex-col gap-2 text-[14px] font-bold text-ink">
          <div className="flex items-center justify-between">
            <dt className="text-muted">Cước xe {truckLabel(truck, distance)}</dt>
            <dd>{formatVnd(ridePrice)}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-muted">
              Bốc xếp {labor === "0" ? "tự khuân" : `${labor} thợ, 2 giờ`}
            </dt>
            <dd>{formatVnd(laborFee)}</dd>
          </div>
        </dl>
        <div className="mt-3 flex items-center justify-between border-t border-hairline pt-3">
          <span className="text-[15px] font-black text-navy">Tạm tính</span>
          <span className="text-[24px] font-black text-primary">{formatVnd(total)}</span>
        </div>
        <p className="mt-2 text-[12px] font-bold leading-relaxed text-subtle">
          Chưa gồm combo đóng gói, tháo lắp nội thất và giờ làm thêm. Đơn lớn VINHOME CP khảo sát
          rồi mới chốt giá cuối.
        </p>
        <a
          href="#lien-he"
          className="btn-primary mt-4 h-12 w-full rounded-full text-[15px]"
        >
          Đặt lịch với giá này
          <ArrowRightIcon width={16} height={16} />
        </a>
      </div>
    </div>
  );
}
