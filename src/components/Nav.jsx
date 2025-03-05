import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full flex justify-center border-b-2 border-gray-950">
      <nav className="md:w-[80%] w-full h-20 flex flex-row justify-between items-center p-3">
        <div className="flex flex-row gap-2 items-center text-1xl md:text-[18px]">
          <img
            src="https://banner2.cleanpng.com/20180628/uzy/aayghbc05.webp"
            alt=""
            className="w-10 h-10 rounded-[50%]"
          />
          <h3>Parking Management System</h3>
        </div>
        <ul className="flex flex-row justify-around gap-x-10">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `hover:cursor-pointer hover:text-blue-300 hover:scale-110 ${
                isActive ? "border-b-2 border-green-400" : "inactive"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/entries"}
            className={({ isActive }) =>
              `hover:cursor-pointer hover:text-blue-300 hover:scale-110 ${
                isActive ? "border-b-2 border-green-400" : "inactive"
              }`
            }
          >
            Entries
          </NavLink>
          <NavLink
            to={"/exits"}
            className={({ isActive }) =>
              `hover:cursor-pointer hover:text-blue-300 hover:scale-110 ${
                isActive ? "border-b-2 border-green-400" : "inactive"
              }`
            }
          >
            Exits
          </NavLink>
          <NavLink
            to={"/users"}
            className={({ isActive }) =>
              `hover:cursor-pointer hover:text-blue-300 hover:scale-110 ${
                isActive ? "border-b-2 border-green-400" : "inactive"
              }`
            }
          >
            Users
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              `hover:cursor-pointer hover:text-blue-300 hover:scale-110 ${
                isActive ? "border-b-2 border-green-400" : "inactive"
              }`
            }
          >
            About
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
