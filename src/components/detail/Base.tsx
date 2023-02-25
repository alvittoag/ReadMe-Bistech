import assets from "../../constant/assets";
import ButtonPinjam from "./ButtonPinjam";
import Rekomendasi from "./Rekomendasi";
import Rincian from "./Rincian";

const Base = () => {
  return (
    <div className="px-[60px] py-[45px] relative">
      <img src={assets.baseSinopsis} alt="bg" />
      <Rincian />
      <ButtonPinjam />
      <Rekomendasi />
    </div>
  );
};

export default Base;
