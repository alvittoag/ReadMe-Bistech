import assets from "../../constant/assets";

const Rekomendasi = () => {
  return (
    <div className="absolute top-0 right-[5rem] mt-[67px] flex flex-col gap-6">
      <h1 className="text-[24px] text-[#313552]">Rekomendasi Buku</h1>
      <div className="flex gap-4 -mt-2">
        <img src={assets.sinopsis2} width={118} alt="buku" />
        <img src={assets.sinopsis2} width={118} alt="buku" />
        <img src={assets.sinopsis2} width={118} alt="buku" />
      </div>
    </div>
  );
};

export default Rekomendasi;
