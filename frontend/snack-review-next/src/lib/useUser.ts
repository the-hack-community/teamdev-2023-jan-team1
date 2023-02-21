import useSWR from "swr";
import type { MyProfileType } from "./zodSchema";
import { getUser } from "@/lib/authModule";

export const useUser = () => {
  const url = "http://localhost:3001/api/v1/my-profile";
  const { data, error } = useSWR<MyProfileType>(url, getUser);

  const loading = !data && !error;

  return {
    data,
    loading,
  };
};
