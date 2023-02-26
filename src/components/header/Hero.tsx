import { toogleAuth, toogleChooseAuth } from "../../app/features/toggleSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import assets from "../../constant/assets";

const Hero = () => {
  const isLogin = useAppSelector((state) => state.user.isLogin);
  const dispatch = useAppDispatch();
  return (
    <div className="min-h-[552px] bg-[#FBF8F1] flex justify-between items-center">
      <div className="px-[60px]">
        <div className="max-w-2xl">
          <h1 className="text-[40px] font-[600] text-[#313552] 2xl:tracking-wide">
            Meminjam buku tanpa perlu ke Perpustakaan dengan meminjam buku
            secara online
          </h1>
          <p className="text-[#707176] mt-[18px] text-[20px] ">
            Membaca buku lebih instan dengan meminjam di ReadMe tanpa harus
            pergi ke perpustakaan
          </p>
        </div>
        <div className="flex mt-[80px] gap-10 items-center">
          <button className="bg-[#313552] px-9 py-3 text-[#F5F0F0] text-[24px]">
            Mulai Baca
          </button>
          {!isLogin && (
            <p
              onClick={() => [
                dispatch(toogleAuth(true)),
                dispatch(toogleChooseAuth("Daftar")),
              ]}
              className="text-[#313552] text-[24px] cursor-pointer"
            >
              Daftar Akun
            </p>
          )}
        </div>
      </div>
      <div className="-mt-7 2xl:-mt-0  relative">
        <div className="w-[151px] h-[98px]  bg-[#FDDC99] absolute bottom-20 -left-[75px] flex flex-col justify-center items-center">
          <p className="text-[20px] text-[#313552] font-[600]">100+</p>
          <p className="text-[16px] text-[#313552] font-[600]">Buku tersedia</p>
        </div>
        <img src={isLogin ? assets.hero2 : assets.hero} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
