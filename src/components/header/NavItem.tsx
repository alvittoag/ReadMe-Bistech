import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toogleAuth, toogleChooseAuth } from "../../app/features/toggleSlice";

const NavItem = () => {
  const dispatch = useDispatch();
  return (
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
  );
};

export default NavItem;
