export const InputField = (props: { label: string; inputId: string; placeholder: string }) => {
  const { label, inputId, placeholder } = props;

  return (
    <div className="mb-9">
      <label htmlFor={`${inputId}`} className="mb-2 block text-sm text-gray-700">
        {label}
        <span className="text-lg text-red-400">*</span>
        <div>
          <input
            className="w-full appearance-none rounded-lg border  border-gray-400 py-2 px-3 leading-tight text-gray-700 placeholder:font-light placeholder:text-gray-300 focus:outline-none focus:outline-blue-400"
            id={`${inputId}`}
            type={`${inputId}`}
            placeholder={`${placeholder}`}
          />
        </div>
      </label>
    </div>
  );
};
