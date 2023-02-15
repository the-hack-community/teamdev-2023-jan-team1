import { XMarkIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import toast, { Toast } from "react-hot-toast";
import type { FC } from "react";

type Props = {
  t: Toast;
  toastTitle: string;
};

export const CommonNotification: FC<Props> = ({ t, toastTitle }) => {
  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } pointer-events-auto flex w-full max-w-md rounded-xl bg-green-100 shadow-md ring-1 ring-green-400/20`}
    >
      <div className="w-0 flex-1 p-3">
        <div className="flex items-center gap-3">
          <CheckCircleIcon className="flex h-8 items-start text-green-300" />
          <p className="font-bold">{toastTitle}</p>
        </div>
      </div>
      <div className="flex">
        <button
          type="button"
          onClick={() => toast.dismiss(t.id)}
          className="flex w-full items-center justify-center p-4"
        >
          <XMarkIcon className="h-5" />
        </button>
      </div>
    </div>
  );
};
