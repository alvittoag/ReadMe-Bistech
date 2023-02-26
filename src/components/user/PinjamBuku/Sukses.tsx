import { useDispatch } from "react-redux";
import { tooglePinjam, toogleSukses } from "../../../app/features/toggleSlice";
import assets from "../../../constant/assets";

const Sukses = () => {
  const dispatch = useDispatch();
  return (
    <div className="mt-[175px] w-[1240px] h-[740px] bg-[#FFFFFF] mx-auto">
      <h1 className="text-center py-[50px] font-[600] text-[32px]">
        Yeayy!!! Kamu berhasil meminjam buku
      </h1>
      <div className="flex flex-col relative">
        <img src={assets.sukses} className="mx-auto" alt="sukses" />
        <div className="absolute bottom-0 left-0 flex gap-14 justify-center w-full">
          <button className="bg-[#313552] w-[244px] h-[50px] text-[24px] text-[#FFFFFF]">
            Baca Sekarang
          </button>
          <button
            className="text-[#707176] text-[24px]"
            onClick={() => [
              dispatch(toogleSukses(false)),
              dispatch(tooglePinjam(false)),
            ]}
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sukses;
