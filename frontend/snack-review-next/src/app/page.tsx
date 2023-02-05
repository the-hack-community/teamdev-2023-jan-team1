import { CarouselIndicator } from "@/component/atoms/card/CarouselIndicator";
import { Logo } from "@/component/atoms/logo/Logo";
import { Footer } from "@/component/template/footer/Footer";
import { CardList } from "@/component/template/home/CardList";
import { Carousel } from "@/component/template/home/Carousel";
import { getArticles } from "@/lib/getData";

const Home = async () => {
  const { newArticles, popularArticles } = await getArticles();
  const isLoggedIn = true;

  return (
    <div>
      <div className="my-6 flex justify-center">
        <Logo />
      </div>

      <div className="mb-6">
        <Carousel popularArticles={popularArticles} />
        <CarouselIndicator popularArticles={popularArticles} />
      </div>
      <div className="px-4">
        <CardList listTitle="Shop List" articles={newArticles} />
        <Footer isLoggedIn={isLoggedIn} userName="シェアがしユーザーで名前の長いひと" />
      </div>
    </div>
  );
};

export default Home;
