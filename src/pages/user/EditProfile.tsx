import { useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../../constant/assets";

const EditProfile = () => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div className="bg-[#FBFBFB] px-[60px] py-[50px]">
      <h1 className="text-[#313552] text-[32px] font-[600]">Edit Profile</h1>
      <div className="flex gap-16 items-start mt-[39px]">
        <img
          src={isHover ? assets.hoverProfil : assets.user3}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={`${isHover && "cursor-pointer"} `}
          alt="user"
        />
        <div>
          <form>
            <div className="flex gap-10">
              <div className="flex flex-col">
                <label htmlFor="nama-pertama" className="label-edit">
                  Nama Pertama
                </label>
                <input
                  type="text"
                  placeholder="Nama Pertama"
                  value={"Uzumaki"}
                  className="input-edit"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="nama-terakhir" className="label-edit">
                  Nama Terakhir
                </label>
                <input
                  type="text"
                  value={"Saburo"}
                  placeholder="Nama Terakhir"
                  className="input-edit"
                />
              </div>
            </div>
            <div className="mt-[40px] flex flex-col">
              <label htmlFor="bio" className="label-edit">
                Bio
              </label>
              <input
                type="text"
                value={"Reader Addict"}
                placeholder="Masukan Bio"
                className="input-bio"
              />
            </div>
            <div className="flex gap-10 mt-[40px]">
              <div className="flex flex-col">
                <label htmlFor="email" className="label-edit">
                  Email
                </label>
                <input
                  type="email"
                  value={"UzumakiSaburo6@gmail.com"}
                  placeholder="Masukan Email"
                  className="input-edit"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="katasandi" className="label-edit">
                  Kata Sandi
                </label>
                <input
                  type="password"
                  value={"saburo12345678902938"}
                  placeholder="Masukan Kata Sandi"
                  className="input-edit"
                />
              </div>
            </div>
            <div
              onClick={() => navigate("/user")}
              className="flex mt-[80px] gap-8 text-[24px]"
            >
              <button className="bg-[#313552] w-[203px] h-[60px] text-[#F5F0F0] ">
                Simpan
              </button>
              <button className="text-[#707176]">Batalkan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
