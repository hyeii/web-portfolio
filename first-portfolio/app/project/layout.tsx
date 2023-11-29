import { Roboto } from "next/font/google";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
});

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex flex-col h-screen lg:flex-row">
        <div className="lg:w-1/5 px-10 py-5 content-between ">
          <div>
            <Link href={"/"}>
              <h2
                className={`${roboto.className} sub-name text-3xl text-transparent font-bold lg:hidden`}
              >
                YOON HYEMIN
              </h2>
            </Link>
            <Link href={"/"}>
              <h2
                className={`${roboto.className} sub-name text-[3vw] text-transparent font-bold hidden lg:block`}
              >
                YOON <br /> HYEMIN
              </h2>
            </Link>
          </div>
        </div>
        <div className="lg:w-4/5 bg-[#363636] text-white p-[5vw] overflow-auto">
          {children}
        </div>
      </main>
    </>
  );
}
