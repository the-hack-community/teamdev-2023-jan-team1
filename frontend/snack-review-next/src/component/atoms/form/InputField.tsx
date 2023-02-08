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

export const InputArea: FC<Props> = ({ label, isRequired, ...restProps }) => {
  return (
    <div className="w-full">
      <label htmlFor={label} className="block text-sm text-gray-700">
        {label}
        {isRequired && <span className="text-lg text-red-400">*</span>}
        <div>
          <textarea
            className="h-24 w-full appearance-none rounded-lg border border-gray-400 py-2 px-3 leading-tight text-gray-700 placeholder:font-light placeholder:text-gray-300 focus:border-blue-400 focus:outline-none"
            {...restProps}
          />
        </div>
      </label>
    </div>
  );
};

export const SelectFeild: FC<Props> = ({ label, isRequired, ...restProps }) => {
  return (
    <div className="w-full">
      <label htmlFor={label} className="block text-sm text-gray-700">
        {label}
        {isRequired && <span className="text-lg text-red-400">*</span>}
        <div>
          <select
            name="category"
            className="w-full rounded-lg border border-gray-400 py-2 px-3 leading-tight text-gray-700 placeholder:font-light placeholder:text-gray-300 focus:border-blue-400 focus:outline-none"
          >
            <option value="0">お菓子の種類を選択</option>
            <option value="1">ケーキ</option>
            <option value="2">焼き菓子</option>
            <option value="3">タルト</option>
            <option value="4">その他</option>
          </select>
        </div>
      </label>
    </div>
  );
};
