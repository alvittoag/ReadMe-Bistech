import { useState } from "react";
import assets from "../../constant/assets";

const ButtonPinjam = () => {
  const [liked, setLiked] = useState<boolean>(false);
  return (
    <div className="absolute top-0 right-[33rem] mt-[85px] flex items-center gap-6">
      <div onClick={() => setLiked((like) => !like)}>
        {liked ? (
          <img src={assets.liked} alt="like" />
        ) : (
          <img src={assets.like} alt="like" />
        )}
      </div>

      <button className="w-[244px] h-[50px] bg-[#313552] text-[24px] text-[#ffffff]">
        Mulai Pinjam Buku
      </button>
    </div>
  );
};

export default ButtonPinjam;
