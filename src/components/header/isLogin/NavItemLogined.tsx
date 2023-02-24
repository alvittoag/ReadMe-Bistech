import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const items = [
  { name: "Home", link: "/" },
  { name: "Daftar Buku", link: "/" },
  { name: "Buku Favorite", link: "/buku-favorit" },
  { name: "Buku Saya", link: "/buku-saya" },
];

const NavItemLoginded = () => {
  const [active, setActive] = useState<string>("Home");
  return (
    <div className="flex gap-12">
      {items.map((item) => (
        <Link
          to={item.link}
          onClick={() => setActive(item.name)}
          key={item.name}
          className={
            active === item.name
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
