import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    isActive ? "navlink active-link " : "navlink";

  return (
    <div
      className={`flex w-full justify-between  ${
        isOpen ? "items-start" : "items-center"
      } text-white relative`}
    >
      <div className="logo mx-10 mt-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fill-rule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </div>

      <div
        className={` mt-10 menu-btn cursor-pointer md:hidden mr-10 scale-150 ${
          isOpen ? "hidden" : ""
        }`}
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
          <g fill="#D0D6F9" fill-rule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
      </div>
      <div className="line bg-white xl:w-2/5 xl absolute top-1/2 mt-5 left-32 md:block hidden"></div>
      <div
        className={`nav-links flex flex-col md:mt-10 md:flex-row md:justify-end md:gap-10 h-screen ${
          isOpen ? "h-screen" : ""
        }  md:h-20 md:rounded-l-lg w-1/2 md:w-auto md:pl-10 lg:w-3/5 lg:max-w-5xl md:items-center pr-3 md:pr-20 md:static gap-1 fixed    ${
          isOpen
            ? "transition-all duration-500 ease-in-out right-0 "
            : "-right-full"
        }`}
      >
        <div
          className="close-btn absolute right-10 top-10 cursor-pointer scale-150 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
            <g fill="#D0D6F9" fill-rule="evenodd">
              <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
              <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
            </g>
          </svg>
        </div>
        <NavLink
          to="/"
          className={linkClass}
          id="home"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <b>00</b> Home
        </NavLink>
        <NavLink
          to="/destination"
          className={linkClass}
          onClick={() => setIsOpen(false)}
        >
          <b>01</b> Destination
        </NavLink>
        <NavLink
          to="/crew"
          className={linkClass}
          onClick={() => setIsOpen(false)}
        >
          <b>02</b> Crew
        </NavLink>
        <NavLink
          to="/technology"
          className={linkClass}
          onClick={() => setIsOpen(false)}
        >
          <b> 03</b> Technology
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
