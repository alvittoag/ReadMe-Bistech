import React from "react";
import assets from "../../constant/assets";

const Daftar = () => {
  return (
    <form>
      <div className="flex flex-col justify-start items-start gap-2 text-[16px] text-[#FBF8F1]">
        <label htmlFor="name">Nama</label>
        <input
          type="text"
          placeholder="Johndoe21"
          className="w-[450px] h-[60px] text-black text-2xl px-[25px] placeholder:text-[#B2AFAF] placeholder:text-[24px]"
        />
      </div>

      <div className="flex flex-col justify-start items-start gap-2 text-[16px] mt-[20px] text-[#FBF8F1]">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Johndoe21@gmail.com"
          className="w-[450px] h-[60px] text-black text-2xl px-[25px] placeholder:text-[#B2AFAF] placeholder:text-[24px]"
        />
      </div>

      <div className="flex flex-col justify-start items-start gap-2 text-[16px] mt-[20px] text-[#FBF8F1]">
        <label htmlFor="kata-sandi">Kata Sandi</label>
        <input
          type="password"
          placeholder="Kata Sandi"
          className="w-[450px] h-[60px] text-black text-2xl px-[25px] placeholder:text-[#B2AFAF] placeholder:text-[24px]"
        />
      </div>

      <div className="py-[30px] flex flex-col">
        <button className="w-[200px] h-[60px] bg-[#FDDC99] text-[24px] text-[#313552] font-[600]">
          Masuk
        </button>
        <div className="flex gap-5 py-[51px] items-center">
          <p className="text-[16px] font-[400]">Masuk Dengan</p>
          <div className="bg-white w-[40px] h-[40px] flex items-center justify-center">
            <img src={assets.google} alt="google" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Daftar;
