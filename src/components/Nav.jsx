import { NavLink } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { useState } from "react";

const Nav = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="w-full flex justify-center shadow-sm shadow-gray-400 text-[18px]">
      <nav className="md:w-[80%] w-full h-20 flex flex-row justify-between items-center p-3">
        <div className="flex flex-row gap-2 items-center text-1xl md:text-[18px]">
          <img
            src="https://banner2.cleanpng.com/20180628/uzy/aayghbc05.webp"
            alt=""
            className="w-10 h-10 rounded-[50%]"
          />
          <h3>Parking Management System</h3>
        </div>
        <div className="flex md:hidden">
          <CgMenuRightAlt
            onClick={() => {
              setIsMenu((state) => !state);
            }}
            className="hover:cursor-pointer w-6 h-6"
          />
        </div>
        <ul className="hidden md:flex flex-col md:flex-row md:justify-around md:gap-x-10 text-[17px]">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `hover:cursor-pointer hover:text-blue-500 hover:scale-110 ${
                isActive ? "border-b-2 border-green-500" : "inactive"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/space"}
            className={({ isActive }) =>
              `hover:cursor-pointer hover:text-blue-500 hover:scale-110 ${
                isActive ? "border-b-2 border-green-500" : "inactive"
              }`
            }
          >
            Free Space
          </NavLink>
          <NavLink
            to={"/entries"}
            className={({ isActive }) =>
              `hover:cursor-pointer hover:text-blue-500 hover:scale-110 ${
                isActive ? "border-b-2 border-green-500" : "inactive"
              }`
            }
          >
            Entries
          </NavLink>
          <NavLink
            to={"/exits"}
            className={({ isActive }) =>
              `hover:cursor-pointer hover:text-blue-500 hover:scale-110 ${
                isActive ? "border-b-2 border-green-500" : "inactive"
              }`
            }
          >
            Exits
          </NavLink>
          <NavLink
            to={"/users"}
            className={({ isActive }) =>
              `hover:cursor-pointer hover:text-blue-500 hover:scale-110 ${
                isActive ? "border-b-2 border-green-500" : "inactive"
              }`
            }
          >
            Users
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              `hover:cursor-pointer hover:text-blue-500 hover:scale-110 ${
                isActive ? "border-b-2 border-green-500" : "inactive"
              }`
            }
          >
            About
          </NavLink>
        </ul>
      </nav>
      <ul
        className={`${
          isMenu ? "flex" : "hidden"
        } md:hidden w-full h-auto flex-col gap-5 bg-white absolute left-0 top-20 p-3 z-10`}
      >
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `hover:cursor-pointer hover:text-blue-500 hover:scale-110 ${
                isActive ? "border-b-2 border-green-500" : "inactive"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/space"}
            className={({ isActive }) =>
              `hover:cursor-pointer hover:text-blue-500 hover:scale-110 ${
                isActive ? "border-b-2 border-green-500" : "inactive"
              }`
            }
          >
            Free Space
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/entries"}
            className={({ isActive }) =>
              `hover:cursor-pointer hover:text-blue-500 hover:scale-110 ${
                isActive ? "border-b-2 border-green-500" : "inactive"
              }`
            }
          >
            Entries
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/exits"}
            className={({ isActive }) =>
              `hover:cursor-pointer hover:text-blue-500 hover:scale-110 ${
                isActive ? "border-b-2 border-green-500" : "inactive"
              }`
            }
          >
            Exits
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/users"}
            className={({ isActive }) =>
              `hover:cursor-pointer hover:text-blue-500 hover:scale-110 ${
                isActive ? "border-b-2 border-green-500" : "inactive"
              }`
            }
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              `hover:cursor-pointer hover:text-blue-500 hover:scale-110 ${
                isActive ? "border-b-2 border-green-500" : "inactive"
              }`
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
