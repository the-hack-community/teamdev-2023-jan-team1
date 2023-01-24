// ログインとサインアップ用
export const Button = (props: { text: string }) => {
  const { text } = props;
  return (
    <button
      type="button"
      className="block w-full rounded-lg bg-red-400 py-2 px-4 font-bold text-white hover:bg-red-300 "
    >
      {text}
    </button>
  );
};
