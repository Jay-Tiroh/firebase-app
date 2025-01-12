import React from "react";
const CrewNav = ({ switchRole }) => {
  const handleClick = (e) => {
    const current = e.currentTarget;
    const btns = document.querySelectorAll(".crew-link");
    btns.forEach((btn) => {
      btn.classList = btn === current ? "crew-link active-crew" : "crew-link";
    });
  };

  return (
    <div className="nav flex w-full  h-14 items-center justify-center gap-10 lg:justify-start lg:gap-14 rounded-xl ">
      <div
        className="crew-link  active-crew"
        onClick={(e) => {
          handleClick(e);
          switchRole("Commander");
        }}
      ></div>
      <div
        className="crew-link "
        onClick={(e) => {
          handleClick(e);
          switchRole("Mission Specialist");
        }}
      ></div>
      <div
        className="crew-link "
        onClick={(e) => {
          handleClick(e);
          switchRole("Pilot");
        }}
      ></div>
      <div
        className="crew-link "
        onClick={(e) => {
          handleClick(e);
          switchRole("Flight Engineer");
        }}
      ></div>
    </div>
  );
};

export default CrewNav;
