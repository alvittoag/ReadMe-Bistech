import assets from "../../constant/assets";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toogleAuth, toogleChooseAuth } from "../../app/features/toggleSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex justify-between px-[60px] py-[25px]">
      <img src={assets.logo} alt="logo" />
      <div className="flex gap-12">
        <Link to="/" className="navbar-text-items">
          Home
        </Link>
        <a href="#book" className="navbar-text-items">
          Daftar Buku
        </a>
        <button
          onClick={() => [
            dispatch(toogleAuth(true)),
            dispatch(toogleChooseAuth("Masuk")),
          ]}
          className="bg-[#313552] w-[90px] h-[34px] text-[#F9F9F9] text-[20px]"
        >
          Masuk
        </button>
        <button
          onClick={() => [
            dispatch(toogleAuth(true)),
            dispatch(toogleChooseAuth("Daftar")),
          ]}
          className="navbar-text-items"
        >
          Daftar
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
