"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CommonButton } from "@/component/atoms/button/CommonButton";
import { ConfirmModal } from "@/component/atoms/card/ConfirmModal";
import { InputField } from "@/component/atoms/form/InputField";
import { SelectField } from "@/component/atoms/form/SelectField";
import { TextAreaField } from "@/component/atoms/form/TextAreaField";
import {
  initialState,
  ARTICLE_CONTENT,
  ARTICLE_SHOP_INFO,
  ARTICLE_SHOP_URL,
  ARTICLE_TITLE,
  CATEGORY,
  FormStateType,
  ArticleInitialState,
} from "@/constants/InputField";
import { articleIdAtom, isEditAtom } from "@/lib/atom";
import { useArticle } from "@/lib/useArticle";
import { postArticleSchema } from "@/lib/zodSchema";

const PostArticle = () => {
  const [isEdit] = useAtom(isEditAtom);
  const [articleId] = useAtom(articleIdAtom);
  const { data: articleData } = useArticle(articleId.toString());
  const [isOpen, setIsOpen] = useState(false);
  const [articleState, setArticleState] = useState<ArticleInitialState>(initialState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormStateType>({
    resolver: zodResolver(postArticleSchema),
    defaultValues:
      articleData && isEdit
        ? {
            title: articleData.title,
            content: articleData.content,
            category: articleData.categoryName,
            shopUrl: articleData.url,
            shopInfo: articleData.shopsInformation,
          }
        : { category: "default" },
  });

  const onSubmit = handleSubmit((data) => {
    setArticleState(data);
    setIsOpen(true);
  });

  return (
    <div className="flex-1 px-6">
      <h1 className="my-12 text-center text-lg font-bold text-blue-400">自分の感想を共有しよう!</h1>
      <form className="mb-10 grid grid-cols-1 gap-7" onSubmit={onSubmit}>
        <InputField {...ARTICLE_TITLE} register={register} errors={errors} />
        <TextAreaField {...ARTICLE_CONTENT} register={register} errors={errors} />
        <SelectField {...CATEGORY} register={register} errors={errors} />
        <InputField {...ARTICLE_SHOP_URL} register={register} errors={errors} />
        <TextAreaField {...ARTICLE_SHOP_INFO} register={register} errors={errors} />
        <CommonButton isFullWidth isPrimary={false} type="submit">
          投稿内容を確認する
        </CommonButton>
        <ConfirmModal articleState={articleState} modalType="post" isOpen={isOpen} setIsOpen={setIsOpen} />
      </form>
    </div>
  );
};

export default PostArticle;
