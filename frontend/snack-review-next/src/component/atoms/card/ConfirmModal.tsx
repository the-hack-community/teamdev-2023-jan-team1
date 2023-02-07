"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import toast, { Toaster } from "react-hot-toast";
import { CommonNotification } from "./CommonNotification";
import type { ComponentProps, FC } from "react";
import { CommonButton } from "@/component/atoms/button/CommonButton";
import { ModalInfoField } from "@/component/atoms/card/ModalInfoField";

type Props = {
  title: string;
  modalType: "post" | "delete";
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
};

export const ConfirmModal: FC<Props> = ({ title, modalType, isOpen, setIsOpen }) => {
  const handleClick: ComponentProps<"button">["onClick"] = (e) => {
    e.preventDefault();
    toast.custom(
      (t) => <CommonNotification t={t} toastTitle={modalType === "delete" ? "削除しました" : "投稿しました"} />,
      {
        duration: 4000,
        position: "top-center",
      }
    );
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
                    <ModalInfoField infoLabel="コンテンツ" infoText={title} />
                  </div>
                  <div className="mb-6">
                    <ModalInfoField infoLabel="種類" infoText={title} />
                  </div>
                  <div className="mb-6">
                    <ModalInfoField infoLabel="お店のURL" infoText={title} />
                  </div>
                  <div className="mb-6">
                    <ModalInfoField infoLabel="お店の情報" infoText={title} />
                  </div>
                </>
              )}
              <CommonButton isPrimary isFullWidth handleClick={handleClick}>
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
