import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import LoginPage from "../components/auth/LoginPage";
import ListBook from "../components/book/ListBook";
import Hero from "../components/header/Hero";

const Home = () => {
  const toogle = useAppSelector((state: RootState) => state.toogle.auth);
  return (
    <div className={`${toogle ? "relative" : "static"}`}>
      <Hero />

      {toogle ? (
        <div className="absolute -mt-24  top-0 bottom-0 left-0 right-0 bg-black/40  transition-colors ease-in duration-200 flex items-center justify-center">
          <LoginPage />
        </div>
      ) : (
        <div className="bg-transparent "></div>
      )}

      <div className="px-[60px] py-[100px] space-y-24">
        <ListBook title="Buku Terbaru" />
        <ListBook title="Buku yang sering dibaca" />
        <ListBook title="Buku Cerita" />
        <ListBook title="Buku Novel" />
        <ListBook title="Buku Sejarah" />
      </div>
    </div>
  );
};

export default Home;
