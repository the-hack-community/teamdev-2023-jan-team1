"use client";

import { FooterLoggedIn } from "./FooterLoggedIn";
import { FooterNotLoggedIn } from "./FooterNotLoggedIn";
import { useUser } from "@/lib/useUser";

export const Footer = ({ token }: { token: string | undefined }) => {
  const { data } = useUser();

  return (
    <footer className="fixed bottom-0 mt-6 w-full bg-gray-100 py-4 align-middle text-gray-700">
      <nav className={`${data ? "mx-4" : "mx-3"} flex items-center justify-between`}>
        {data && token ? <FooterLoggedIn userName={data.user?.name} /> : <FooterNotLoggedIn />}
      </nav>
    </footer>
  );
};
