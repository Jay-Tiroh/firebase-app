import React from "react";
// import { NavLink } from "react-router-dom";
const DestinationNav = ({ switchDestination }) => {
  const handleClick = (e) => {
    const current = e.currentTarget;
    const btns = document.querySelectorAll(".destination-link");
    btns.forEach((btn) => {
      btn.classList =
        btn === current
          ? "destination-link active-destination"
          : "destination-link";
    });
  };

  return (
    <div className="nav flex w-full tracking-widest h-14 items-center justify-evenly lg:justify-start lg:gap-14 rounded-xl mt-10">
      <div
        className="active-destination destination-link"
        onClick={(e) => {
          handleClick(e);
          switchDestination("Moon");
        }}
      >
        Moon
      </div>
      <div
        className="destination-link"
        onClick={(e) => {
          handleClick(e);
          switchDestination("Mars");
        }}
      >
        Mars
      </div>
      <div
        className="destination-link"
        onClick={(e) => {
          handleClick(e);
          switchDestination("Europa");
        }}
      >
        Europa
      </div>
      <div
        className="destination-link"
        onClick={(e) => {
          handleClick(e);
          switchDestination("Titan");
        }}
      >
        Titan
      </div>
    </div>
  );
};

export default DestinationNav;
