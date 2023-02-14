"use client";

import { useState } from "react";
import type { ComponentProps } from "react";
import { CommonButton } from "@/component/atoms/button/CommonButton";
import { ConfirmModal } from "@/component/atoms/card/ConfirmModal";
import { InputField } from "@/component/atoms/form/InputField";
import { SelectField } from "@/component/atoms/form/SelectField";
import { TextAreaField } from "@/component/atoms/form/TextAreaField";
import { ARTICLE_CONTENT, ARTICLE_SHOP_INFO, ARTICLE_SHOP_URL, ARTICLE_TITLE, CATEGORY } from "@/constants/InputField";

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
        <InputField {...ARTICLE_TITLE} />
        <TextAreaField {...ARTICLE_CONTENT} />
        <SelectField {...CATEGORY} />
        <InputField {...ARTICLE_SHOP_URL} />
        <TextAreaField {...ARTICLE_SHOP_INFO} />
        <CommonButton isFullWidth isPrimary={false} handleClick={handleClick}>
          投稿内容を確認する
        </CommonButton>
        <ConfirmModal title={title} modalType="post" isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default PostArticle;
