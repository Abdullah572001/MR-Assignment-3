import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navbarList = (
    <>
      <NavLink className="px-4 py-2 active:bg-blue-50 active:translate-y-1 transition active:shadow-2xl">
        Home
      </NavLink>
      <NavLink className="active:bg-blue-50 px-4 py-2 active:translate-y-1 transition active:shadow-2xl">
        Apps
      </NavLink>
      <NavLink className="active:bg-blue-50 px-4 py-2 active:translate-y-1 transition active:shadow-2xl">
        Installation
      </NavLink>
    </>
  );

  return (
    <div className="max-w-350 mx-auto px-4">
      <div className="flex justify-between items-center py-6">
        <div className=" md:hidden">
          <span
            className="cursor-pointer text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <RxCross2></RxCross2>
            ) : (
              <HiOutlineMenuAlt1></HiOutlineMenuAlt1>
            )}
          </span>
          <ul
            className={`[&>*]:hover:bg-gray-200 p-4 shadow-2xl rounded-2xl grid text-sm font-semibold absolute duration-500 space-y-4
            ${open ? "top-18" : "-top-52"}`}
          >
            {navbarList}
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <Link to="/" className="flex items-center gap-2">
            <img className="w-10 h-10" src={logo} alt="" />
            <h2 className="font-bold">HERO.IO</h2>
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-8 font-semibold">{navbarList}</ul>
        </div>
        <div>
          <a
            className="flex items-center gap-1 text-white btn bg-[linear-gradient(135deg,#632EE3_0%,#9F62F2_100%)]"
            href="https://github.com/Abdullah572001/MR-Assignment-3"
            target="_blank"
          >
            <FaGithub />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
