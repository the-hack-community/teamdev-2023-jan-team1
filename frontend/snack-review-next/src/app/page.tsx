"use client";

import { Toaster } from "react-hot-toast";
import { Loader } from "@/component/atoms/Loader";
import { CarouselIndicator } from "@/component/atoms/card/CarouselIndicator";
import { Logo } from "@/component/atoms/logo/Logo";
import { CardList } from "@/component/template/home/CardList";
import { Carousel } from "@/component/template/home/Carousel";
import { useArticles } from "@/lib/useArticles";

const Home = () => {
  const { data } = useArticles();

  if (!data) return <Loader />;

  return (
    <div>
      <div className="my-10 flex justify-center">
        <Logo />
      </div>

      <div className="mb-6">
        <Carousel popularArticles={data.popularArticles} />
        <CarouselIndicator popularArticles={data.popularArticles} />
      </div>
      <div className="px-4">
        <CardList listTitle="Shop List" articles={data.newArticles} />
      </div>
      <Toaster />
    </div>
  );
};

export default Home;
