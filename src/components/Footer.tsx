import assets from "../constant/assets";

const Footer = () => {
  return (
    <div className="bg-[#FBF8F1] h-[177px] flex flex-col justify-start items-center">
      <img src={assets.footerLogo} alt="logo" className="mt-[30px]" />
      <p className="text-[#313552] text-[20px] mt-[50px]">
        Copyright ReadMe 2023 - All Right Reserved{" "}
      </p>
    </div>
  );
};

export default Footer;
