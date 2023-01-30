"use client";

import { useEffect } from "react";
import type { NextPage } from "next";

type Props = { error: Error };

const Error: NextPage<Props> = ({ error }) => {
  // FIXME: エラー発生時の処理を追加する
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center font-bold">
      <h2>エラーが発生しました</h2>
    </div>
  );
};

export default Error;
