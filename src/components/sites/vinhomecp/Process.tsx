import { Highlight } from "./Services";
import { MapIcon, PhoneIcon, QrIcon, WrenchIcon } from "./icons";
import { PhotoSlot } from "./PhotoSlot";

const STEPS = [
  {
    n: "01",
    title: "Tiếp nhận yêu cầu",
    body: "Bạn đặt lịch trên app hoặc gọi hotline. Chọn dịch vụ, nhập địa chỉ đi và địa chỉ đến, kê đồ đạc cần chuyển. Giá trọn gói hiện ra ngay lúc đó.",
    icon: PhoneIcon,
  },
  {
    n: "02",
    title: "Xác nhận và chốt giá",
    body: "Nhân viên gọi lại xác nhận giờ, xếp xe và đội thợ. Nhà nhiều đồ thì bên mình qua khảo sát tận nơi, miễn phí, rồi mới chốt giá.",
    icon: MapIcon,
  },
  {
    n: "03",
    title: "Đóng gói và vận chuyển",
    body: "Đúng giờ hẹn, đội thợ đến đóng gói, tháo lắp và bốc đồ lên xe. Xe đi tới đâu bạn xem trên bản đồ tới đó.",
    icon: WrenchIcon,
  },
  {
    n: "04",
    title: "Xếp đồ, kiểm tra rồi thanh toán",
    body: "Thợ xếp đồ vào nhà mới theo ý bạn. Bạn kiểm tra xong mới chuyển khoản qua mã QR. Không cần tiền mặt, có biên nhận.",
    icon: QrIcon,
  },
];

export function Process() {
  return (
    <section id="cach-hoat-dong" className="scroll-mt-24 border-y border-line bg-canvas/60 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="label-caps text-primary">Quy trình chuyển nhà</p>
          <h2 className="mt-2.5 text-[30px] font-black leading-[1.12] tracking-tight text-navy sm:text-[38px]">
            Bốn bước, <Highlight>giá không đổi</Highlight> từ lúc báo tới lúc trả
          </h2>
          <p className="mt-4 text-[16px] font-bold leading-relaxed text-muted">
            Từ lúc đặt tới lúc xong việc, bạn biết xe đang ở đâu và trả đúng số tiền đã chốt.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.n} className="card relative flex flex-col overflow-hidden border border-line">
              <div className="relative aspect-[4/3] w-full">
                <PhotoSlot icon={step.icon} className="absolute inset-0" iconClassName="h-11 w-11" />
              </div>
              <div className="flex items-baseline gap-2.5 px-4 pt-4">
                <span className="text-[26px] font-black leading-none tracking-tight text-line">
                  {step.n}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4 pt-2">
                <h3 className="text-[16px] font-black leading-snug text-ink">{step.title}</h3>
                <p className="mt-2 text-[13.5px] font-bold leading-relaxed text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-[14px] font-bold text-muted">
          Nhà nhiều đồ, VINHOME CP qua khảo sát miễn phí rồi mới chốt giá.
        </p>
      </div>
    </section>
  );
}
