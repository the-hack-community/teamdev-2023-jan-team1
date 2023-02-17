import axios from "axios";
import { format, parseISO } from "date-fns";
import { BASE_URL } from "@/constants/endpoint";

export const formatDate = (date: string) => {
  return format(parseISO(date), "yyyy年MM月dd日");
};

export const axiosClient = axios.create({
  // FIXME: CORSエラーを解消する
  withCredentials: true,
  baseURL: BASE_URL,
});
