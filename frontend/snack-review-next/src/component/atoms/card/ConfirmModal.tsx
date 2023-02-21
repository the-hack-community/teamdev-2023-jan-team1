"use client";

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import toast, { Toaster } from "react-hot-toast";
import { CommonButton } from "../button/CommonButton";
import { CommonNotification } from "./CommonNotification";
import { ModalInfoField } from "./ModalInfoField";
import type { ComponentProps, FC } from "react";
import { ArticleInitialState } from "@/constants/InputField";
import { axiosClient } from "@/lib/helpers";
import { useCategories } from "@/lib/useCategory";

type Props = {
  articleState: ArticleInitialState;
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
  const { categories } = useCategories();
  const { title, content, category, shopUrl, shopInfo } = articleState;
  const handleClick: ComponentProps<"button">["onClick"] = (e) => {
    e.preventDefault();
    if (modalType === "post") {
      const findCategory = categories?.find((data) => data.categoryName === articleState.category);
      const body = { ...articleState, url: shopUrl, categoryId: Number(findCategory?.id) };
      console.log(body);

      axiosClient.post("/articles", body);
      appearToast("投稿しました");
    } else {
      appearToast("削除しました");
    }
    setIsOpen(false);
  };

  return (
    <>
      <Transition.Root show={isOpen}>
        <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500/75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative w-[90vw] overflow-hidden rounded-lg bg-white p-4 shadow-xl transition-all">
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-red-400">
                        {modalType === "delete" ? "削除しますか?" : "以下の内容で投稿しますか?"}
                      </h3>
                      <button type="button" onClick={() => setIsOpen(false)}>
                        <XMarkIcon className="h-6" />
                      </button>
                    </div>
                    <div className="mb-2">
                      <ModalInfoField infoLabel="タイトル" infoText={title} />
                    </div>
                    {modalType === "post" && (
                      <>
                        <div className="mb-2">
                          <ModalInfoField infoLabel="コンテンツ" infoText={content} />
                        </div>
                        <div className="mb-2">
                          <ModalInfoField infoLabel="種類" infoText={category} />
                        </div>
                        <div className="mb-2">
                          <ModalInfoField infoLabel="お店のURL" infoText={shopUrl} />
                        </div>
                        <div className="mb-2">
                          <ModalInfoField infoLabel="お店の情報" infoText={shopInfo} />
                        </div>
                      </>
                    )}

                    <CommonButton isPrimary isFullWidth type="button" handleClick={handleClick}>
                      {modalType === "delete" ? "削除する" : "投稿する"}
                    </CommonButton>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Toaster />
    </>
  );
};
