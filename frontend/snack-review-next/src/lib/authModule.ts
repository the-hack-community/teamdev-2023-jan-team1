/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Cookies from "js-cookie";
import { axiosClient } from "./helpers";
import { UserFormNameType } from "@/constants/InputField";

const setCookies = (res: any) => {
  const timestamp = res.headers.expiry;
  const expires = Math.floor((timestamp - Date.now() / 1000) / 86400);

  Cookies.set("client", res.headers.client, { expires });
  Cookies.set("access-token", res.headers["access-token"], { expires });
  Cookies.set("uid", res.headers.uid, { expires });
};

const clearCookies = () => {
  Cookies.remove("client");
  Cookies.remove("access-token");
  Cookies.remove("uid");
};

export const login = async (formData: Omit<Record<UserFormNameType, string>, "name" | "confirmPassword">) => {
  try {
    const res = await axiosClient.post("/auth/sign_in", formData);
    setCookies(res);
  } catch (error) {
    clearCookies();
    console.error(error);
  }
};

export const logout = async () => {
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/sign_out`, {
    method: "DELETE",
    headers: {
      uid: Cookies.get("uid")!,
      client: Cookies.get("client")!,
      access_token: Cookies.get("access-token")!,
    },
  });
  clearCookies();
};
export const getUser = async (input: string) => {
  const res = await fetch(input, {
    method: "GET",
    headers: {
      uid: Cookies.get("uid")!,
      client: Cookies.get("client")!,
      access_token: Cookies.get("access-token")!,
    },
  });
  const data = await res.json();
  return data;
};

export const signup = async (formData: Record<UserFormNameType, string>) => {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  } catch (error) {
    clearCookies();
    console.error(error);
  }
};

export const getArticles = async (input: string) => {
  const res = await fetch(input, {
    method: "GET",
    headers: {
      uid: Cookies.get("uid")!,
      client: Cookies.get("client")!,
      access_token: Cookies.get("access-token")!,
    },
  });
  const data = await res.json();
  return data;
};

export const getArticle = async (input: string) => {
  const res = await fetch(input, {
    method: "GET",
    headers: {
      uid: Cookies.get("uid")!,
      client: Cookies.get("client")!,
      access_token: Cookies.get("access-token")!,
    },
  });
  const data = await res.json();
  return data;
};
