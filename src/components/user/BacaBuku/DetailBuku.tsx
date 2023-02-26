import RincianBuku from "../../book/RincianBuku";

const DetailBuku = () => {
  return (
    <div className="flex gap-20">
      <RincianBuku />
      <div className="2xl: ml-16">
        <p className="judul-sinopsis">Terakhir dibaca</p>
        <h1 className="isi-sinopsis">Halaman 21</h1>
      </div>
      <div className="flex-1 text-end">
        <p className="judul-sinopsis mr-12  text-[16px]">
          Waktu pinjam buku yang tersisa :
        </p>
        <div className="flex justify-end mt-[12px] gap-5">
          <div className="bg-[#FDDC99] w-[80px] h-[80px] text-center">
            <h1 className="text-[32px] font-semibold">5</h1>
            <p className="text-[16px] font-semibold">Days</p>
          </div>
          <div className="bg-[#FDDC99] w-[80px] h-[80px] text-center">
            <h1 className="text-[32px] font-semibold">23</h1>
            <p className="text-[16px] font-semibold">Hours</p>
          </div>
          <div className="bg-[#FDDC99] w-[80px] h-[80px] text-center">
            <h1 className="text-[32px] font-semibold">59</h1>
            <p className="text-[16px] font-semibold">Minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBuku;
