import { articlesSchema } from "@/app/lib/zodSchema";
import { CarouselIndicator } from "@/component/atoms/card/CarouselIndicator";
import { Logo } from "@/component/atoms/logo/Logo";
import { CardList } from "@/component/template/home/CardList";
import { Carousel } from "@/component/template/home/Carousel";
import { GET_ARTICLES } from "@/constants/endpoint";

const getData = async () => {
  const res = await fetch(GET_ARTICLES, { cache: "no-cache" });
  const data = await res.json();
  return articlesSchema.parse(data);
};

const Home = async () => {
  const { newArticles, popularArticles } = await getData();

  return (
    <div>
      <div className="my-6 flex justify-center">
        <Logo />
      </div>

      <div className="mb-6">
        <Carousel popularArticles={popularArticles} />
        <CarouselIndicator popularArticles={popularArticles} />
      </div>

      <CardList newArticles={newArticles} />
    </div>
  );
};

export default Home;
