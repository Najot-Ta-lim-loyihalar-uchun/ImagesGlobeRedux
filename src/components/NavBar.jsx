import React from "react";
import { Link, useLocation } from "react-router-dom";

/* assets && icons */
import { links } from "../data/PageLinks";
import { MdImageSearch } from "react-icons/md";
import { FaFileDownload, FaHome } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="bg-gray-100 fixed top-0 w-full">
      <div className="container py-[25px] flex items-center justify-between">
        <Link to={"/home"} className="flex items-end gap-3">
          <MdImageSearch className="text-6xl text-blue-500" />

          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
            Rend | Pictures
          </h2>
        </Link>
        <div className="flex gap-5">
          {links.map((link) => {
            let Icon = link.icon;
            const isActive = location.pathname === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center justify-center ${
                  isActive ? "px-4 gap-2" : "w-12 h-12"
                } ${
                  link.color === "blue"
                    ? "bg-blue-500 hover:bg-blue-600"
                    : link.color === "red"
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-green-400 hover:bg-green-500"
                } text-white rounded-full transition-transform transition-colors duration-300 ease-in-out hover:scale-110 hover:rotate-0`}
              >
                <Icon size={24} />
                {isActive && link.name && (
                  <span className="font-semibold">{link.name}</span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
