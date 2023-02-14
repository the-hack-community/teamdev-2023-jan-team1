"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import toast, { Toaster } from "react-hot-toast";
import { CommonNotification } from "./CommonNotification";
import type { ArticleStateType } from "@/constants/InputField";
import type { ComponentProps, FC } from "react";
import { CommonButton } from "@/component/atoms/button/CommonButton";
import { ModalInfoField } from "@/component/atoms/card/ModalInfoField";

type Props = {
  articleState: ArticleStateType;
  modalType: "post" | "delete";
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
};

const appearToast = (toastTile: "投稿しました" | "削除しました") => {
  return toast.custom((t) => <CommonNotification t={t} toastTitle={toastTile} />, {
    duration: 4000,
    position: "top-center",
  });
};

export const ConfirmModal: FC<Props> = ({ articleState, modalType, isOpen, setIsOpen }) => {
  const { title, content, category, shopUrl, shopInfo } = articleState;
  const handleClick: ComponentProps<"button">["onClick"] = (e) => {
    e.preventDefault();
    if (modalType === "post") {
      // TODO: 送信処理
      console.info(articleState);
      appearToast("投稿しました");
    } else {
      appearToast("削除しました");
    }
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="relative flex w-screen flex-col rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-bold text-red-400">
                  {modalType === "delete" ? "削除しますか?" : "以下の内容で投稿しますか?"}
                </h3>
                <button type="button" onClick={() => setIsOpen(false)}>
                  <XMarkIcon className="h-6" />
                </button>
              </div>
              <div className="mb-6">
                <ModalInfoField infoLabel="タイトル" infoText={title} />
              </div>
              {modalType === "post" && (
                <>
                  <div className="mb-6">
                    <ModalInfoField infoLabel="コンテンツ" infoText={content} />
                  </div>
                  <div className="mb-6">
                    <ModalInfoField infoLabel="種類" infoText={category} />
                  </div>
                  <div className="mb-6">
                    <ModalInfoField infoLabel="お店のURL" infoText={shopUrl} />
                  </div>
                  <div className="mb-6">
                    <ModalInfoField infoLabel="お店の情報" infoText={shopInfo} />
                  </div>
                </>
              )}
              <CommonButton isPrimary isFullWidth type="button" handleClick={handleClick}>
                {modalType === "delete" ? "削除する" : "投稿する"}
              </CommonButton>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black/25 backdrop-blur-sm" />
        </>
      )}
      <Toaster />
    </div>
  );
};
