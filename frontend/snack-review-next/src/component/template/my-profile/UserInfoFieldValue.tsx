"use client";

import { PencilSquareIcon } from "@heroicons/react/24/outline";
import type { FC } from "react";

type Props = {
  value: string;
  setIsEditing: (arg: boolean) => void;
  isEditable?: boolean;
};

export const UserInfoFieldValue: FC<Props> = ({ value, setIsEditing, isEditable = false }) => {
  const handleClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="flex items-center justify-between py-4 px-2">
      <p>{value}</p>
      {isEditable && (
        <button type="button" onClick={handleClick}>
          <PencilSquareIcon className="h-6 text-blue-400" onClick={handleClick} />
        </button>
      )}
    </div>
  );
};
