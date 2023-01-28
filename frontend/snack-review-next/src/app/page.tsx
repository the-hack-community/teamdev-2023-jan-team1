import { Footer } from "@/component/template/footer/Footer";

const Home = () => {
  const isLoggedIn = true;
  return (
    <div>
      <p className="font-bold text-red-500">Hello Next.js 13</p>
      <Footer isLoggedIn={isLoggedIn} userName="シェアがしユーザーで名前の長いひと" />
    </div>
  );
};

export default Home;
