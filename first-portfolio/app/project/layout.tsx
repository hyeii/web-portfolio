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
      <div>{children}</div>
    </>
  );
}
