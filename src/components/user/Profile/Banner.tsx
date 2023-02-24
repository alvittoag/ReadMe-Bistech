import assets from "../../../constant/assets";

const Banner = () => {
  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center">
        <img src={assets.bgUser} alt="banner" />
        <div className="absolute bg-[#D9D9D91A] shadow-[0px_0px_2px_0px_#00000024] w-[1300px] h-[250px] text-white flex justify-between items-center px-[35px]">
          <div className="flex gap-8">
            <img src={assets.user2} alt="user" />
            <div className="space-y-4 text-[#313552] ">
              <h1 className="text-[32px] font-[600]">Uzumaki Saburo</h1>
              <h5 className="font-[400] text-[20px]">Reader addict</h5>
              <div className="flex gap-8 text-[14px] font-[500]">
                <div className="space-y-2 ">
                  <p>Buku yang dipinjam</p>
                  <p className="text-center">2 Buku</p>
                </div>
                <div className="space-y-2">
                  <p>Buku yang sudah dibaca</p>
                  <p className="text-center">23 Buku</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="w-[140px] h-[40px] bg-[#313552] font-[400]">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
