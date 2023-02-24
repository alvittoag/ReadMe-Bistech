import assets from "../../constant/assets";

const DiPinjam = () => {
  return (
    <div className="mt-[14px] bg-[#FBF8F1] shadow-[0px_0px_4px_0px_#00000024] flex w-[382px] h-[190px] gap-5 px-6 py-5 text-[#313552]">
      <img src={assets.bookPinjam} alt="buku" />
      <div className="w-full">
        <h1 className="text-[16px] font-[500]">Gadis Kretek</h1>
        <div className="flex items-center justify-between mt-[8px]">
          <div className="text-[14px]">
            <p className="font-[400]">Penulis</p>
            <p className="font-[500]">Ratih Kumala</p>
          </div>
          <button className="w-[70px] rounded-md bg-[#FBBC05] h-[30px] text-[14px] text-[#FBF8F1]">
            Novel
          </button>
        </div>
        <div className="mt-[26px]">
          <p className="font-[400] text-[14px]">Waktu Pinjam Tersisa : </p>
          <p className="font-[500] text-[14px]">3 Hari 12 Jam 54 Menit</p>
        </div>
      </div>
    </div>
  );
};

export default DiPinjam;
