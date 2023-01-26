import type { FC, ComponentProps } from "react";

type Props = ComponentProps<"input"> & { label: string; isRequired: boolean };

export const InputField: FC<Props> = ({ label, isRequired, ...restProps }) => {
  return (
    <div className="w-full">
      <label htmlFor={label} className="block text-sm text-gray-700">
        {label}
        {isRequired && <span className="text-lg text-red-400">*</span>}
        <div>
          <input
            className="w-full appearance-none rounded-lg border border-gray-400 py-2 px-3 leading-tight text-gray-700 placeholder:font-light placeholder:text-gray-300 focus:border-blue-400 focus:outline-none"
            {...restProps}
          />
        </div>
      </label>
    </div>
  );
};
