import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.scss";
import SideBar from "@/components/sidebar/SideBar";
import RecoilRootWrapper from "@/components/context/RecoilWrapper";

const notoSerifKr = Noto_Serif_KR({
  weight: "400",
  subsets: ["latin"],
});

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
      <meta
        name="google-site-verification"
        content="05aWC6e41zzIGNNxbQ5ADhDKysMMK6q5_k87zd8_9bc"
      />
      <body className={notoSerifKr.className}>
        <RecoilRootWrapper>
          <main className="lg:flex h-screen  ">
            <SideBar />
            <div className="bg-[#363636] text-white p-[5vw] w-full overflow-auto h-full">
              {children}
            </div>
          </main>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
