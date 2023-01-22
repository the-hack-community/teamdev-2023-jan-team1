import React from "react";

const EmailForm = () => {
  return (
    <>
      <div className="mb-6 mt-1 ml-3 ">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          メールアドレス<span className="text-red-700 text-lg">*</span>
        </label>
        <input
          className="shadow appearance-none border border-gray-400 rounded  w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="mail@example.com"
        />
      </div>
    </>
  );
};

export default EmailForm;
