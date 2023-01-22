import React from "react";
import Image from "next/image";
import logo from "@/img/logo/logo.svg";

const Logo = () => {
  return (
    <>
      <Image src="logo.svg" alt={"お菓子シェアサイトのロゴです"} width={169} height={69} />
    </>
  );
};

export default Logo;
