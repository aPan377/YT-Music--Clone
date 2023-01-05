import React from "react";
import logo from "../images/logo.png";

import { RiHomeLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { BsDisplay } from "react-icons/bs";
import { MdOutlineExplore, MdOutlinePlaylistPlay } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-3 pt-3">
      {/* Left */}
      <div className="w-24">
        <img src={logo} className="w-full h-full" />
      </div>
      {/* Middle */}
      <div className="">
        <ul className="flex justify-center items-center text-[1.3rem] sm:text-[1.45rem] gap-2.5 sm:gap-10 md:gap-14 lg:gap-24">
          <li>
            <RiHomeLine className="navBtn" />
            <p className="navMidMenuLarge">Home</p>
          </li>
          <li>
            <MdOutlineExplore className="navBtn" />
            <p className="navMidMenuLarge">Trending</p>
          </li>
          <li>
            <MdOutlinePlaylistPlay className="navBtn" />
            <p className="navMidMenuLarge">PlayLists</p>
          </li>
          <li>
            <FiSearch className="navBtn" />
            <p className="navMidMenuLarge">Search</p>
          </li>
          <li>
            <BsDisplay className="navBtn" />
          </li>
        </ul>
      </div>
      {/* Right */}
      <div className="navRightMenu">
        <button className="font-semibold text-[12px] uppercase">Log in</button>
      </div>
    </div>
  );
};

export default NavBar;
