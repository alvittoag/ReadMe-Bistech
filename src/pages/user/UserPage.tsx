import SudahDibaca from "../../components/user/Profile/BukuSudahDibaca";
import Banner from "../../components/user/Profile/Banner";
import BukuDipinjam from "../../components/user/Profile/BukuDipinjam";
import BukuSudahDibaca from "../../components/user/Profile/BukuSudahDibaca";

const UserPage = () => {
  return (
    <>
      <Banner />
      <div className="px-[60px] space-y-7 mb-[69px]">
        <BukuDipinjam />
        <BukuSudahDibaca />
      </div>
    </>
  );
};

export default UserPage;
