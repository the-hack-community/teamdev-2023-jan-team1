"use client";

import { useReducer, useState } from "react";
import type { ChangeEvent, ComponentProps } from "react";
import { CommonButton } from "@/component/atoms/button/CommonButton";
import { ConfirmModal } from "@/component/atoms/card/ConfirmModal";
import { InputField } from "@/component/atoms/form/InputField";
import { SelectField } from "@/component/atoms/form/SelectField";
import { TextAreaField } from "@/component/atoms/form/TextAreaField";
import { ARTICLE_CONTENT, ARTICLE_SHOP_INFO, ARTICLE_SHOP_URL, ARTICLE_TITLE, CATEGORY } from "@/constants/InputField";

type StateKeyType = "title" | "content" | "category" | "shopUrl" | "shopInfo";
export type State = Record<StateKeyType, string>;
type ActionType = "CHANGE_INPUT";
type Action = { type: ActionType; payload: { name: string; value: string } };

const initialState = {
  title: "",
  content: "",
  category: "default",
  shopUrl: "",
  shopInfo: "",
};

const PostArticle = () => {
  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "CHANGE_INPUT":
        return { ...state, [action.payload.name]: action.payload.value };
      default:
        return state;
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    dispatch({ type: "CHANGE_INPUT", payload: { name: e.target.name, value: e.target.value } });
  };

  const handleClick: ComponentProps<"button">["onClick"] = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <div className="flex-1 px-6">
      <h1 className="my-12 text-center text-lg font-bold text-blue-400">自分の感想を共有しよう!</h1>
      <form className="mb-10 grid grid-cols-1 gap-7">
        <InputField {...ARTICLE_TITLE} onChange={handleChange} value={state.title} />
        <TextAreaField {...ARTICLE_CONTENT} onChange={handleChange} value={state.content} />
        <SelectField {...CATEGORY} onChange={handleChange} value={state.category} />
        <InputField {...ARTICLE_SHOP_URL} onChange={handleChange} value={state.shopUrl} />
        <TextAreaField {...ARTICLE_SHOP_INFO} onChange={handleChange} value={state.shopInfo} />
        <CommonButton isFullWidth isPrimary={false} handleClick={handleClick}>
          投稿内容を確認する
        </CommonButton>
        <ConfirmModal state={state} modalType="post" isOpen={isOpen} setIsOpen={setIsOpen} />
      </form>
    </div>
  );
};

export default PostArticle;
