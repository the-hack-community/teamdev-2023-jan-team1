import Image from "next/image";

export const Logo = () => {
  return <Image priority src="logo.svg" alt="お菓子シェアサイトのロゴです" width={169} height={69} />;
};
