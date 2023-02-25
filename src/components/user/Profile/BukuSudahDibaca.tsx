import { dibaca } from "../../../constant/datas";
import DiBaca from "../../book/DiBaca";

const BukuSudahDibaca = () => {
  return (
    <div className="py-[24px] ">
      <h1 className="text-[24px] font-[600]">Buku yang sudah dibaca</h1>
      <div className="flex max-w-7xl 2xl:max-w-full gap-4 mt-[14px] items-center">
        {dibaca.map((baca) => (
          <DiBaca key={baca.id} title={baca.title} img={baca.img} />
        ))}
        <p className="text-[20px] text-[#707176] w-32 -mt-10 font-[600]">
          Lihat semua
        </p>
      </div>
    </div>
  );
};

export default BukuSudahDibaca;
