import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import SideBar from "@/components/sidebar/SideBar";
import { SideBarProvider } from "@/components/context/SideBarContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "윤혜민의 포트폴리오",
  description: "프론트엔드 개발자, 윤혜민의 포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideBarProvider>
          <main className="flex h-screen">
            <SideBar />
            <div className="bg-[#363636] text-white p-[5vw] w-full overflow-auto">
              {children}
            </div>
          </main>
        </SideBarProvider>
      </body>
    </html>
  );
}
