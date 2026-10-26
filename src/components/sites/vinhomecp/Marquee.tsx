import type { ComponentType, SVGProps } from "react";
import {
  TruckIcon,
  OfficeIcon,
  RoomIcon,
  RestaurantIcon,
  BoxIcon,
  WrenchIcon,
  UsersIcon,
  SparkleCleanIcon,
  IndustrialCleanIcon,
  MapIcon,
  QrIcon,
} from "./icons";

const ITEMS: { icon: ComponentType<SVGProps<SVGSVGElement>>; label: string }[] = [
  { icon: TruckIcon, label: "Chuyển nhà" },
  { icon: OfficeIcon, label: "Chuyển văn phòng" },
  { icon: RoomIcon, label: "Chuyển phòng trọ" },
  { icon: RestaurantIcon, label: "Chuyển nhà hàng, quán ăn" },
  { icon: BoxIcon, label: "Combo đóng gói" },
  { icon: WrenchIcon, label: "Tháo lắp nội thất" },
  { icon: UsersIcon, label: "Thợ bốc xếp" },
  { icon: SparkleCleanIcon, label: "Vệ sinh chuyên sâu" },
  { icon: IndustrialCleanIcon, label: "Vệ sinh công nghiệp" },
  { icon: MapIcon, label: "Xem xe đang ở đâu trên bản đồ" },
  { icon: QrIcon, label: "Chuyển khoản qua mã QR" },
];

function Pills() {
  return (
    <ul className="flex shrink-0 items-center gap-3 pr-3">
      {ITEMS.map(({ icon: Icon, label }) => (
        <li
          key={label}
          className="flex items-center gap-2 whitespace-nowrap rounded-full bg-surface px-4 py-2 text-[13.5px] font-black text-navy ring-1 ring-line"
        >
          <span className="text-primary">
            <Icon width={16} height={16} />
          </span>
          {label}
        </li>
      ))}
    </ul>
  );
}

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-line bg-canvas py-4 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div className="landing-marquee flex w-max">
        <Pills />
        <Pills />
      </div>
    </div>
  );
}
