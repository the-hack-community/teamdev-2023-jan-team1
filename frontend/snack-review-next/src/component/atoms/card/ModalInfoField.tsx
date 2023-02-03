import type { FC } from "react";

type ModalInfoFieldProps = {
  infoLabel: "タイトル" | "コンテンツ" | "種類" | "お店のURL" | "お店の情報";
  infoText: string;
};

export const ModalInfoField: FC<ModalInfoFieldProps> = ({ infoLabel, infoText }) => {
  return (
    <div className="grid gap-1 py-4">
      <p className="text-sm text-gray-400">{infoLabel}</p>
      <p>{infoText}</p>
    </div>
  );
};
