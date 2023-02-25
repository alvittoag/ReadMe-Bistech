import { useDispatch } from "react-redux";
import { tooglePinjam } from "../../../app/features/toggleSlice";
import assets from "../../../constant/assets";
import ButtonPinjam from "./ButtonPinjam";
import Rincian from "./Rincian";

const KonfirmasiPinjaman = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-[#313552] w-[1240px] mx-auto mt-[185px] h-[750px] px-[60px] py-[30px]">
      <div className="flex justify-between">
        <div>
          <h1 className="text-[#FBF8F1] font-[400] text-[32px] ">
            Konfirmasi Peminjaman Buku
          </h1>
          <hr className="max-w-[408px] mt-[10px]" />
        </div>
        <img
          onClick={() => dispatch(tooglePinjam(false))}
          src={assets.close}
          alt="close"
          className="-mt-5 cursor-pointer"
        />
      </div>
      <Rincian />
      <ButtonPinjam />
    </div>
  );
};

export default KonfirmasiPinjaman;
