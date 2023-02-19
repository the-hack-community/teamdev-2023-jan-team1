// eslint-disable-next-line camelcase
import { M_PLUS_Rounded_1c } from "@next/font/google";
import { cookies } from "next/headers";
import type { ReactNode } from "react";
import { Footer } from "@/component/template/footer/Footer";
import "../styles/globals.css";
import { validateUserToken } from "@/lib/getData";

const mPlus = M_PLUS_Rounded_1c({
  subsets: ["japanese"],
  weight: ["400", "700"],
  display: "swap",
});

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const accessToken = cookies().get("access-token")?.value
  const isLoggedIn = await validateUserToken(accessToken);


  return (
    <html lang="ja" data-theme="light">
      <head />
      <body className={`${mPlus.className} text-gray-700`}>
        <main>{children}</main>
        <div className="h-20" />
        <Footer isLoggedIn={isLoggedIn} userName="シェアがしユーザーで名前の長いひと" />
      </body>
    </html>
  );
};

export default RootLayout;
