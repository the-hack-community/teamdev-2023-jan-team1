import { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { UserFormNameType } from "@/constants/InputField";
import { axiosClient } from "@/lib/helpers";

const setCookies = (res: AxiosResponse) => {
  // FIXME: 有効期限をヘッダーの値から設定
  Cookies.set("client", res.headers.client, { expires: 7 });
  Cookies.set("access-token", res.headers["access-token"], { expires: 7 });
  Cookies.set("uid", res.headers.uid, { expires: 7 });
};

const clearCookies = () => {
  Cookies.remove("client");
  Cookies.remove("access-token");
  Cookies.remove("uid");
};

export const signup = async (formData: Record<UserFormNameType, string>) => {
  try {
    const res = await axiosClient.post("/auth", formData);
    setCookies(res);
  } catch (error) {
    clearCookies();
    console.error(error);
  }
};

export const login = async (formData: Omit<Record<UserFormNameType, string>, "name" | "verifyPassword">) => {
  try {
    const res = await axiosClient.post("/auth/sign_in", formData);
    setCookies(res);
  } catch (error) {
    clearCookies();
    console.error(error);
  }
};

export const logout = async () => {
  await axiosClient.delete("/auth/sign_out");
  clearCookies();
};

export const getUser = async (input: string) => {
  const res = await axiosClient.get(input);
  return res.data;
};