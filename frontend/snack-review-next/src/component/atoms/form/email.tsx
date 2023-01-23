import React from "react";

const EmailForm = () => {
  return (
    <div className="mb-6 mt-1 ml-3 ">
      <label htmlFor="email" className="mb-2 block text-sm font-bold text-gray-700">
        メールアドレス<span className="text-lg text-red-700">*</span>
        <div>
          <input
            className=" w-80 appearance-none rounded border  border-gray-400 py-2 px-3 leading-tight text-gray-700  shadow  focus:outline-none"
            id="email"
            type="email"
            placeholder="mail@example.com"
          />
        </div>
      </label>
    </div>
  );
};

export default EmailForm;
