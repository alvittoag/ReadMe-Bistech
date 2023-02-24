import { useDispatch } from "react-redux";
import { toogleAuth, toogleChooseAuth } from "../../app/features/toggleSlice";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import assets from "../../constant/assets";
import Daftar from "./Daftar";
import Masuk from "./Masuk";

const button = [
  {
    name: "Masuk",
  },
  {
    name: "Daftar",
  },
];

const LoginPage = () => {
  const toogle = useAppSelector((state: RootState) => state.toogle.chooseAuth);
  const dispatch = useDispatch();
  return (
    <div
      className={`bg-[#313552] absolute top-0  w-[1230px]  mt-32 ${
        toogle === "Daftar" ? "h-[765px]" : "h-[696px]"
      }`}
    >
      <div
        onClick={() => dispatch(toogleAuth(false))}
        className="absolute right-12 mt-[29.7px] cursor-pointer"
      >
        <img src={assets.close} alt="close" />
      </div>
      <div className="flex justify-between items-center text-[#FBF8F1] py-[80px] px-[100px]">
        <div className="-mt-20">
          <img src={assets.loginCover} alt="cover" className="-ml-16 " />
        </div>

        <div className="text-center ">
          <h1 className="text-[48px]">Welcome To ReadMe</h1>
          <div className="flex gap-5 py-[24px] text-[#FBF8F1] text-[16px]">
            {button.map((btn) => (
              <button
                key={btn.name}
                onClick={() => dispatch(toogleChooseAuth(btn.name))}
                className={
                  btn.name === toogle ? "underline underline-offset-4" : ""
                }
              >
                {btn.name}
              </button>
            ))}
          </div>
          {toogle === "Masuk" ? <Masuk /> : <Daftar />}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
