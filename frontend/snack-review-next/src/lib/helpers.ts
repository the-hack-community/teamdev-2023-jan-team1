import axios from "axios";
import { format, parseISO } from "date-fns";
import Cookies from "js-cookie";
import { BASE_URL } from "@/constants/endpoint";

export const formatDate = (date: string) => {
  return format(parseISO(date), "yyyy年MM月dd日");
};

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    uid: Cookies.get("uid"),
    client: Cookies.get("client"),
    access_token: Cookies.get("access-token"),
  },
});
