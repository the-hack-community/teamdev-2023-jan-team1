import React from "react";

const PasswordForm = () => {
  return (
    <div className="mb-6 mt-1 ml-3 ">
      <label htmlFor="password" className="mb-2 block text-sm font-bold text-gray-700">
        パスワード<span className="text-lg text-red-700">*</span>
        <div>
          <input
            className="w-80 appearance-none rounded border  border-gray-400 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="password"
            type="password"
            placeholder="your password"
          />
        </div>
      </label>
    </div>
  );
};

export default PasswordForm;
