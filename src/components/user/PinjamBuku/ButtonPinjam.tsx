import { useState } from "react";

const ButtonPinjam = () => {
  const [waktu, setWaktu] = useState<string>("");

  const pinjam = () => {
    if (waktu === "") {
      setWaktu("0");
    }
  };

  return (
    <div className="py-[30px] flex gap-4">
      <button
        onClick={pinjam}
        className="w-[286px] h-[58px] bg-[#FDDC99] text-[#313552] text-[24px]"
      >
        Mulai Pinjam Buku
      </button>
      <div
        className={`${
          waktu === "0" && "flex flex-col items-center -mt-[31px]"
        }`}
      >
        {waktu == "0" && (
          <p className="text-[#FF938A] text-[16px] mb-[7px]">
            *Pilih waktu pinjam buku terlebih dahulu
          </p>
        )}
        <select
          onChange={(e) => setWaktu(e.target.value)}
          name="date"
          id="data"
          className={`w-[287px] h-[58px] bg-[#313552]  text-[#FBF8F1] text-[24px] px-[14px] font-[300] ${
            waktu === "0"
              ? "border border-[#FF938A] focus:ring focus:ring-red-500"
              : "border border-[#FBF8F1]"
          }`}
        >
          <option value="7" className="bg-white text-[#313552]">
            3 Hari Pinjam Buku
          </option>
          <option value="7" className="bg-white text-[#313552]">
            4 Hari Pinjam Buku
          </option>
          <option value="7" className="bg-white text-[#313552]">
            5 Hari Pinjam Buku
          </option>
          <option value="7" className="bg-white text-[#313552]">
            6 Hari Pinjam Buku
          </option>
          <option value="7" className="bg-white text-[#313552]">
            7 Hari Pinjam Buku
          </option>
          <option value="0" selected className="bg-white text-[#313552]">
            Waktu Pinjam Buku
          </option>
        </select>
      </div>
    </div>
  );
};

export default ButtonPinjam;
