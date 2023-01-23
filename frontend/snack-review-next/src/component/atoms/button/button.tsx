import React from "react";

// ログインとサインアップ用
export const Button = (props: { text: string }) => {
  const { text } = props;
  return (
    <button type="button" className="w-80 rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
      {text}
    </button>
  );
};
