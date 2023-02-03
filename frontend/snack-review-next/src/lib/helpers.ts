import { format, parseISO } from "date-fns";

export const formatDate = (date: string) => {
  return format(parseISO(date), "yyyy年MM月dd日");
};
