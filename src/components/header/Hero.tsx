import { toogleAuth, toogleChooseAuth } from "../../app/features/toggleSlice";
import { useAppDispatch } from "../../app/hooks";
import assets from "../../constant/assets";

const Hero = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="min-h-[552px] bg-[#FBF8F1] flex items-center">
      <div className="px-[60px]">
        <h1 className="text-[40px] max-w-2xl font-[700] text-[#313552] tracking-tight">
          Meminjam buku tanpa perlu ke Perpustakaan dengan meminjam buku secara
          online
        </h1>
        <p className="text-[#707176] mt-[18px]">
          Membaca buku lebih instan dengan meminjam di ReadMe tanpa harus pergi
          ke perpustakaan
        </p>
        <div className="flex mt-[80px] gap-10 items-center">
          <button className="bg-[#313552] px-9 py-3 text-[#F5F0F0] text-[24px]">
            Mulai Baca
          </button>
          <p
            onClick={() => [
              dispatch(toogleAuth(true)),
              dispatch(toogleChooseAuth("Daftar")),
            ]}
            className="text-[#313552] text-[24px] cursor-pointer"
          >
            Daftar Akun
          </p>
        </div>
      </div>
      <div className="-mt-7 relative">
        <div className="w-[151px] h-[98px] bg-[#FDDC99] absolute bottom-20 -left-[75px] flex flex-col justify-center items-center">
          <p className="text-[20px] text-[#313552] font-[600]">100+</p>
          <p className="text-[16px] text-[#313552] font-[600]">Buku tersedia</p>
        </div>
        <img src={assets.hero} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
