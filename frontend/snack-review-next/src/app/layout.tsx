// eslint-disable-next-line camelcase
import { M_PLUS_Rounded_1c } from "@next/font/google";
import type { ReactNode } from "react";
import "../styles/globals.css";

const mPlus = M_PLUS_Rounded_1c({
  subsets: ["japanese"],
  weight: ["400", "700"],
  display: "swap",
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja" data-theme="light" className={`${mPlus.className} text-gray-700`}>
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
