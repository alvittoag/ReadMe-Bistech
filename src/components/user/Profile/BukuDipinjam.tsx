import assets from "../../../constant/assets";
import DiPinjam from "../../book/DiPinjam";

const BukuDipinjam = () => {
  return (
    <div className="py-[24px] ">
      <h1 className="text-[24px] font-[600]">Buku yang sekarang dipinjam</h1>
      <div className="grid grid-cols-3 gap-10">
        <DiPinjam />
        <DiPinjam />
      </div>
    </div>
  );
};

export default BukuDipinjam;
