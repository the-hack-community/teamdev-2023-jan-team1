export const Button = (props: { text: string; color: string; hoverColor: string }) => {
  const { text, color, hoverColor } = props;
  return (
    <button type="button" className={`block w-full rounded-lg py-2 px-4 font-bold text-white ${color} ${hoverColor}`}>
      {text}
    </button>
  );
};
