"use client";

import { useState } from "react";
import { CommonButton } from "@/component/atoms/button/CommonButton";
import { InputField, InputArea, SelectFeild } from "@/component/atoms/form/InputField";

import { ARTICLE_TITLE, ARTICLE_CONTENT, ARTICLE_SHOP_URL, ARTICLE_SHOP_INFO, CATEGORY } from "@/constants/InputField";

type details = {
  title: string;
  content: string;
  category: string;
  shopUrl: string;
  shopInfo: string;
};
export const ArticlePost = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [shopUrl, setShopUrl] = useState<string>("");
  const [shopInfo, setShopInfo] = useState<string>("");
  const articleDetails: details = { title, content, category, shopUrl, shopInfo };

  return (
    <div className="mt-20 flex flex-col items-center px-12">
      <div className="mt-16 mb-14">
        <p className="text-xl font-bold text-blue-400">自分の感想を共有しよう!</p>
      </div>
      <div className="flex w-full flex-col gap-6">
        <InputField {...ARTICLE_TITLE} onChange={(e) => setTitle(e.target.value)} />
        <InputArea {...ARTICLE_CONTENT} onChange={(e) => setContent(e.target.value)} />
        <SelectFeild {...CATEGORY} onChange={(e) => setCategory(e.target.value)} />
        <InputField {...ARTICLE_SHOP_URL} onChange={(e) => setShopUrl(e.target.value)} />
        <InputArea {...ARTICLE_SHOP_INFO} onChange={(e) => setShopInfo(e.target.value)} />
        <div className="mt-6">
          <CommonButton isPrimary={false}>投稿内容を確認する</CommonButton>
        </div>
      </div>
    </div>
  );
};
