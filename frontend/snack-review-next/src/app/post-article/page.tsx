"use client";

import { useState } from "react";
import type { ComponentProps } from "react";
import { CommonButton } from "@/component/atoms/button/CommonButton";
import { ConfirmModal } from "@/component/atoms/card/ConfirmModal";
import { InputField } from "@/component/atoms/form/InputField";
import { SelectField } from "@/component/atoms/form/SelectField";
import { TextAreaField } from "@/component/atoms/form/TextAreaField";

const PostArticle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const title = "テスト";

  const handleClick: ComponentProps<"button">["onClick"] = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <div className="flex-1 px-6">
      <h1 className="my-12 text-center text-lg font-bold text-blue-400">自分の感想を共有しよう!</h1>
      <div className="mb-10 grid grid-cols-1 gap-7">
        <InputField isRequired label="タイトル" placeholder="タイトルを入れましょう" />
        <TextAreaField isRequired label="コンテンツ" placeholder="自分の感想を共有しましょう。" />
        <SelectField isRequired label="種類" placeholder="お菓子の種類を選択" />
        <InputField isRequired label="お店のURL" placeholder="https://example.com" />
        <TextAreaField isRequired={false} label="お店の情報" placeholder="東京都港区青山1-1-1" />
        <CommonButton isFullWidth isPrimary={false} handleClick={handleClick}>
          投稿内容を確認する
        </CommonButton>
        <ConfirmModal title={title} modalType="post" isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default PostArticle;
