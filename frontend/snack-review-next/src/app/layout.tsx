import type { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
