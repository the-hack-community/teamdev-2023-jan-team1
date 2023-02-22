"use client";

import { Loader } from "@/component/atoms/Loader";
import { ArticleDetailInfo } from "@/component/template/article/ArticleDetailInfo";
import { getArticles } from "@/lib/authModule";
import { useArticle } from "@/lib/useArticle";

export async function generateStaticParams() {
  const { newArticles, popularArticles } = await getArticles(`${process.env.NEXT_PUBLIC_BASE_URL}/articles`);

  const allArticles = [...newArticles, ...popularArticles];
  return allArticles.map((article) => ({
    id: article.id.toString(),
  }));
}

type Props = {
  params: {
    id: string;
  };
};

const ArticleDetail = ({ params }: Props) => {
  const { data } = useArticle(params.id);

  if (!data) return <Loader />;

  return <ArticleDetailInfo article={{ ...data, id: Number(params.id) }} />;
};

export default ArticleDetail;
