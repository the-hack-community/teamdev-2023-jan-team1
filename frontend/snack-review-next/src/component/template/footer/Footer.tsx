/* eslint-disable @typescript-eslint/no-non-null-assertion */

"use client";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { FooterLoggedIn } from "./FooterLoggedIn";
import { FooterNotLoggedIn } from "./FooterNotLoggedIn";
import { MyProfileType } from "@/lib/zodSchema";

export const Footer = ({ token }: { token: string | undefined }) => {
  const url = "http://localhost:3001/api/v1/my-profile";
  const [user, setUser] = useState<MyProfileType>();

  const getUser = async (input: string) => {
    const res = await fetch(input, {
      method: "GET",
      headers: {
        uid: Cookies.get("uid")!,
        client: Cookies.get("client")!,
        access_token: Cookies.get("access-token")!,
      },
    });
    const data = await res.json();
    setUser(data);
  };

  useEffect(() => {
    getUser(url);
  }, []);

  return (
    <footer className="fixed bottom-0 mt-6 w-full bg-gray-100 py-4 align-middle text-gray-700">
      <nav className={`${user ? "mx-4" : "mx-3"} flex items-center justify-between`}>
        {user && token ? <FooterLoggedIn userName={user?.user?.name} /> : <FooterNotLoggedIn />}
      </nav>
    </footer>
  );
};
