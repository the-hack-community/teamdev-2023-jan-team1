import { CommonButton } from "@/component/atoms/button/CommonButton";
import { InputField, InputArea, SelectFeild } from "@/component/atoms/form/InputField";

import { ARTICLE_TITLE, ARTICLE_CONTENT, ARTICLE_SHOP_URL, ARTICLE_SHOP_INFO, CATEGORY } from "@/constants/InputField";

export const ArticlePost = () => {
  return (
    <div className="mt-20 flex flex-col items-center px-12">
      <div className="mt-16 mb-14">
        <p className="text-xl font-bold text-blue-400">自分の感想を共有しよう!</p>
      </div>
      <div className="flex w-full flex-col gap-6">
        <InputField {...ARTICLE_TITLE} />
        <InputArea {...ARTICLE_CONTENT} />
        <SelectFeild {...CATEGORY} />
        <InputField {...ARTICLE_SHOP_URL} />
        <InputArea {...ARTICLE_SHOP_INFO} />
        <div className="mt-6">
          <CommonButton isPrimary={false}>投稿内容を確認する</CommonButton>
        </div>
      </div>
    </div>
  );
};
