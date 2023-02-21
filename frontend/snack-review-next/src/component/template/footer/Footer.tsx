"use client";

import Cookies from "js-cookie";
import { FooterLoggedIn } from "./FooterLoggedIn";
import { FooterNotLoggedIn } from "./FooterNotLoggedIn";
import { Loader } from "@/component/atoms/Loader";
import { useUser } from "@/lib/useUser";

export const Footer = () => {
  const { data } = useUser();
  const token = Cookies.get("access-token");

  if (!data) return <Loader />;

  return (
    <footer className="fixed bottom-0 mt-6 w-full bg-gray-100 py-4 align-middle text-gray-700">
      <nav className={`${data ? "mx-4" : "mx-3"} flex items-center justify-between`}>
        {token ? <FooterLoggedIn userName={data.user.name} /> : <FooterNotLoggedIn />}
      </nav>
    </footer>
  );
};
