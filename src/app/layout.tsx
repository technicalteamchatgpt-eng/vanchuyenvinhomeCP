import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "VINHOME CP | Chuyển nhà trọn gói tại TP.HCM, giá chốt trước, vệ sinh VinHome Clean",
  description:
    "Chuyển nhà trọn gói, giá công khai, báo ngay khi đặt. Xe tải từ 500kg đến 1,5 tấn, thợ bốc xếp là nhân viên công ty. Đặt trên app hoặc gọi hotline là có giá ngay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-canvas text-ink">{children}</body>
    </html>
  );
}
