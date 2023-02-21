// eslint-disable-next-line camelcase
import { M_PLUS_Rounded_1c } from "@next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/component/template/footer/Footer";
import "../styles/globals.css";

const mPlus = M_PLUS_Rounded_1c({
  subsets: ["japanese"],
  weight: ["400", "700"],
  display: "swap",
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja" data-theme="light">
      <head />
      <body className={`${mPlus.className} text-gray-700`}>
        <main>{children}</main>
        <div className="h-20" />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
