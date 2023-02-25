import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import KonfirmasiPinjaman from "../../components/user/PinjamBuku/KonfirmasiPinjaman";
import Base from "../../components/user/Sinopsis/Base";
import assets from "../../constant/assets";

const DetailSinopsis = () => {
  const togglePinjam = useAppSelector(
    (state: RootState) => state.toogle.pinjam
  );
  return (
    <div className="relative">
      <Base />
      {togglePinjam ? (
        <div
          className="absolute top-0 bg-black/40  -mt-24 h-[1210px]
       right-0 left-0 bottom-0  "
        >
          <KonfirmasiPinjaman />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DetailSinopsis;
