import { ArticleDetailInfo } from "@/component/template/article/ArticleDetailInfo";
import { getArticle, getArticles } from "@/lib/getData";

export async function generateStaticParams() {
  const { newArticles, popularArticles } = await getArticles();
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

const ArticleDetail = async ({ params }: Props) => {
  const article = await getArticle(params.id);

  return <ArticleDetailInfo {...article} />;
};

export default ArticleDetail;
