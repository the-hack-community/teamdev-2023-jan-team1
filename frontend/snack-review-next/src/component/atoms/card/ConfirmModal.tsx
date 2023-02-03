"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import toast, { Toaster } from "react-hot-toast";
import type { ComponentProps, FC } from "react";
import { CommonButton } from "@/component/atoms/button/CommonButton";
import { ModalInfoField } from "@/component/atoms/card/ModalInfoField";

type Props = {
  title: string;
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
};

export const ConfirmModal: FC<Props> = ({ title, isOpen, setIsOpen }) => {
  const handleClick: ComponentProps<"button">["onClick"] = (e) => {
    e.preventDefault();
    toast("削除しました", {
      duration: 5000,
      position: "bottom-center",
      className: "font-bold bg-green-100 border border-green-400 w-screen",
      icon: <CheckCircleIcon className="h-6 text-green-400" />,
    });
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="relative flex w-screen flex-col rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-bold text-red-400">削除しますか?</h3>
                <button type="button" onClick={() => setIsOpen(false)}>
                  <XMarkIcon className="h-6" />
                </button>
              </div>
              <div className="mb-6">
                <ModalInfoField infoLabel="タイトル" infoText={title} />
              </div>
              <CommonButton isPrimary isFullWidth handleClick={handleClick}>
                削除する
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
