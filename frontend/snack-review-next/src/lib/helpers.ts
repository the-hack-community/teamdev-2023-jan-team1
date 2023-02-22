import axios from "axios";
import { format, parseISO } from "date-fns";
import Cookies from "js-cookie";

export const formatDate = (date: string) => {
  return format(parseISO(date), "yyyy年MM月dd日");
};

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    uid: Cookies.get("uid"),
    client: Cookies.get("client"),
    access_token: Cookies.get("access-token"),
  },
});
