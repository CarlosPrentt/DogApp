import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [menuBtn, setMenuBtn] = useState(false);
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  const showMenu = () => {
    setMenuBtn(!menuBtn);
  };

  return (
    <>
      <nav
        className={` ${
          menuBtn ? "overflow-visible" : "overflow-hidden"
        } z-20 relative flex items-center justify-between w-full p-5 mt-0  bg-gradient-to-br from-gray-800 to-black`}
      >
        <div className="flex justify-start w-full md:w-3/5">
          <Link
            to="/home"
            className="pl-20 text-6xl text-white font-title"
            style={{ textShadow: "2px 2px 5px black" }}
          >
            <span className="text-orange-600">D</span>OGS
          </Link>
        </div>
        <div className="px-10 text-white md:hidden" onClick={showMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <div
          className={` ${
            menuBtn
              ? "right-0 top-24 bg-black transition-all duration-500 animate__animated animate__fadeInDown"
              : "top-full"
          }
          z-10 w-full absolute  md:relative flex-col md:flex md:flex-row justify-center md:w-5/6 text-2xl font-title`}
        >
          <NavLink
            className="flex items-center justify-center px-8 py-2 text-white transition-all ease-linear rounded-sm hover:bg-orange-600"
            to="/about"
          >
            About us
          </NavLink>
          <NavLink
            className="flex items-center justify-center px-8 py-2 text-white transition-all ease-linear rounded-sm hover:bg-orange-600"
            to="/breeds"
          >
            Breeds
          </NavLink>
          <NavLink
            className="flex items-center justify-center px-8 py-2 text-white transition-all ease-linear rounded-sm hover:bg-orange-600"
            to="/search"
          >
            Search
          </NavLink>
          <NavLink
            className="flex items-center justify-center px-8 py-2 text-white transition-all ease-linear rounded-sm hover:bg-orange-600"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
        <div className="w-1/12">
          <button
            className="flex items-center justify-center px-8 py-2 text-white transition-all ease-linear rounded-sm hover:text-red-600"
            onClick={onLogout}
          >
            <i className="fas fa-sign-out-alt"></i>
          </button>
        </div>
      </nav>
    </>
  );
};
