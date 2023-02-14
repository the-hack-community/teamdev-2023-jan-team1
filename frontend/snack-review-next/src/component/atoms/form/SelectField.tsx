"use client";

import { FormLabel } from "./FormLabel";
import type { ComponentProps, FC } from "react";

type Props = ComponentProps<"select"> & { label?: string; isRequired: boolean };

export const SelectField: FC<Props> = ({ label, isRequired, ...restProps }) => {
  return (
    <div className="w-full">
      {label && (
        <FormLabel id={restProps.id} isRequired={isRequired}>
          {label}
        </FormLabel>
      )}
      <select
        {...restProps}
        className="select w-full rounded-lg border border-gray-400 bg-white px-3 text-base font-normal leading-tight placeholder:font-light placeholder:text-gray-300 focus:border-blue-400 focus:outline-none"
      >
        <option disabled value="default">
          お菓子の種類を選択
        </option>
        <option value="焼き菓子">焼き菓子</option>
        <option value="ケーキ">ケーキ</option>
        <option value="チョコ">チョコ</option>
        <option value="和菓子">和菓子</option>
        <option value="その他">その他</option>
      </select>
    </div>
  );
};
