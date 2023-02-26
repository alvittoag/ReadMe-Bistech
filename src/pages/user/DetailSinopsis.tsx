import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import KonfirmasiPinjaman from "../../components/user/PinjamBuku/KonfirmasiPinjaman";
import Sukses from "../../components/user/PinjamBuku/Sukses";
import Base from "../../components/user/Sinopsis/Base";

const DetailSinopsis = () => {
  const togglePinjam = useAppSelector(
    (state: RootState) => state.toogle.pinjam
  );
  const toggleSukses = useAppSelector(
    (state: RootState) => state.toogle.sukses
  );
  return (
    <div className="relative">
      <Base />
      {togglePinjam && (
        <div className="absolute top-0 bg-black/40 -mt-24 h-[1210px] right-0 left-0 bottom-0 ">
          <KonfirmasiPinjaman />
        </div>
      )}
      {toggleSukses && (
        <div className="absolute top-0 right-0 left-0 bottom-0 mx-auto">
          <Sukses />
        </div>
      )}
    </div>
  );
};

export default DetailSinopsis;
