"use client";

import { FormLabel } from "./FormLabel";
import type { ComponentProps, FC } from "react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormNameType, FormStateType } from "@/constants/InputField";
import { useCategories } from "@/lib/useCategory";

type Props = ComponentProps<"select"> & {
  label?: string;
  isRequired: boolean;
  name: FormNameType;
  register: UseFormRegister<FormStateType>;
  errors: FieldErrors<FormStateType>;
};

export const SelectField: FC<Props> = ({ label, isRequired, register, errors, name, ...restProps }) => {
  const { categories } = useCategories();

  return (
    <div className="w-full">
      {label && (
        <FormLabel id={restProps.id} isRequired={isRequired}>
          {label}
        </FormLabel>
      )}
      <select
        {...restProps}
        {...register(name)}
        className="select w-full rounded-lg border border-gray-400 bg-white px-3 text-base font-normal leading-tight placeholder:font-light placeholder:text-gray-300 focus:border-blue-400 focus:outline-none"
      >
        <option disabled value="default">
          お菓子の種類を選択
        </option>
        {categories?.map((category) => (
          <option key={category.id} value={category.categoryName}>
            {category.categoryName}
          </option>
        ))}
      </select>
      {errors && <p className="mt-1 text-red-400">{errors[name]?.message}</p>}
    </div>
  );
};
