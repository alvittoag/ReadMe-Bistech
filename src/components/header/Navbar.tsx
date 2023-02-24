import { useAppSelector } from "../../app/hooks";
import assets from "../../constant/assets";
import NavItemLoginded from "./isLogin/NavItemLogined";
import NavItem from "./NavItem";

const Navbar = () => {
  const isLogin = useAppSelector((state) => state.user.isLogin);
  return (
    <nav className="flex justify-between px-[60px] py-[25px]">
      <img src={assets.logo} alt="logo" />
      {isLogin ? <NavItemLoginded /> : <NavItem />}
    </nav>
  );
};

export default Navbar;
