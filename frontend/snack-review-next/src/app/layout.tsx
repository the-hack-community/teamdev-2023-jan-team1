import type { ReactNode } from "react";
import "../styles/globals.css";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
