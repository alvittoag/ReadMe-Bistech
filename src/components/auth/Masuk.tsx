import assets from "../../constant/assets";

import { useDispatch } from "react-redux";
import { addUser } from "../../app/features/userSlices";
import { toogleAuth } from "../../app/features/toggleSlice";

const Masuk = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addUser(true));
    alert("Login Sukses");
    dispatch(toogleAuth(false));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-start items-start gap-2 text-[16px] text-[#FBF8F1]">
        <label htmlFor="name">Nama Pengguna</label>
        <input
          type="text"
          placeholder="Johndoe21"
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

      <div className="flex justify-between mt-[20px]">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="w-[25px] h-[25px]  ring-1 ring-[#82A6C4]"
          />
          <label htmlFor="check" className="text-[16px]">
            Ingat Saya
          </label>
        </div>
        <p className="text-[#B4CADC] text-[16px]">Lupa Saya ?</p>
      </div>

      <div className="py-[30px] flex flex-col">
        <button
          type="submit"
          className="w-[200px] h-[60px] bg-[#FDDC99] text-[24px] text-[#313552] font-[600]"
        >
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

export default Masuk;
