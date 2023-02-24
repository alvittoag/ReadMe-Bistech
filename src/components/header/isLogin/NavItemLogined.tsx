import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addActive } from "../../../app/features/userSlices";
import { useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import assets from "../../../constant/assets";

const items = [
  { name: "Home", link: "/" },
  { name: "Daftar Buku", link: "/" },
  { name: "Buku Favorite", link: "/buku-favorit" },
  { name: "Buku Saya", link: "/buku-saya" },
];

const NavItemLoginded = () => {
  const isActive = useAppSelector((state: RootState) => state.user.isActive);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-12">
      {items.map((item) => (
        <Link
          to={item.link}
          onClick={() => dispatch(addActive(item.name))}
          key={item.name}
          className={
            isActive === item.name
              ? "navbar-text-items font-semibold"
              : "navbar-text-items"
          }
        >
          {item.name}
        </Link>
      ))}
      <Link
        to="/user"
        className="flex gap-5 items-center"
        onClick={() => dispatch(addActive("User"))}
      >
        <img src={assets.user1} alt="user" />
        <p
          className={
            isActive === "User"
              ? "navbar-text-items font-semibold"
              : "navbar-text-items"
          }
        >
          Uzumaki Saburo
        </p>
      </Link>
    </div>
  );
};

export default NavItemLoginded;
