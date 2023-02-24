import { is } from "immer/dist/internal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addActive } from "../../../app/features/userSlices";
import { useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";

const items = [
  { name: "Home", link: "/" },
  { name: "Daftar Buku", link: "/" },
  { name: "Buku Favorite", link: "/buku-favorit" },
  { name: "Buku Saya", link: "/buku-saya" },
];

const NavItemLoginded = () => {
  const isActive = useAppSelector((state: RootState) => state.user.isActive);
  console.log(isActive);
  const dispatch = useDispatch();
  return (
    <div className="flex gap-12">
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
    </div>
  );
};

export default NavItemLoginded;
