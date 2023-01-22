import React from "react";

//ログインとサインアップ用
export const Button = (props: { text: string }) => {
  const { text } = props;
  return (
    <>
      <button className="bg-red-500 hover:bg-blue-700 w-80 text-white font-bold py-2 px-4 rounded">{text}</button>
    </>
  );
};
