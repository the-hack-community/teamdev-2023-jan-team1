import { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { UserFormNameType } from "@/constants/InputField";
import { axiosClient } from "@/lib/helpers";

const setCookies = (res: AxiosResponse) => {
  const timestamp = res.headers.expiry;
  const expires = Math.floor((timestamp - Date.now() / 1000) / 86400);

  const AuthenticationHeaders = {
    "access-token": res.headers["access-token"],
    "token-type": res.headers["token-type"],
    "client": res.headers.client,
    "expiry": res.headers.expiry,
    "uid": res.headers.uid
  };

  const token = btoa(JSON.stringify(AuthenticationHeaders));
  const bearerToken = `Bearer ${token}`;

  Cookies.set("client", res.headers.client, { expires });
  Cookies.set("access-token", bearerToken, { expires });
  Cookies.set("uid", res.headers.uid, { expires });
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
