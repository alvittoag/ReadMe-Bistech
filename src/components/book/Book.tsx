import assets from "../../constant/assets";
import { useState } from "react";
import { useAppSelector } from "../../app/hooks";

type Props = {
  image: string;
  title: string;
};

const Book = ({ image, title }: Props) => {
  const [liked, setLiked] = useState<boolean>();
  const isActive = useAppSelector((state) => state.user.isActive);
  const active = isActive === "Buku Saya";

  return (
    <div>
      <img src={image} alt="buku" />
      <h1 className="text-[20px] mt-[24px]">{title}</h1>
      <div className="flex items-center gap-7">
        <button
          className={`mt-[20px] bg-[#313552] text-[24px] ${
            active ? "px-[33px]" : "px-[40px]"
          } text-white py-2`}
        >
          {active ? "Baca Sekarang" : "Baca Sinopsis"}
        </button>
        <div className="mt-5">
          {isActive === "Buku Favorite" ? (
            <img src={assets.liked} alt="liked" />
          ) : (
            <img
              src={liked ? assets.liked : assets.like}
              onClick={() => setLiked((liked) => !liked)}
              alt="like"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
