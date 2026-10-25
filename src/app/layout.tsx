import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import DisableSelectAll from "@/components/DisableSelectAll";
import CustomScrollbar from "@/components/CustomScrollbar";

const jakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChillTea",
  description: "Your next moment of calm is one sip away. Experience the ChillTea collection.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakartaSans.className} antialiased bg-[#949E7A] text-white/90`}>
        <DisableSelectAll />
        <CustomScrollbar />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
