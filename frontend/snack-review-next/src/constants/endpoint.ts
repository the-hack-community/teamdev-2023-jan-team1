export const getArticlePath = (id: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/articles/${id}`;
};
