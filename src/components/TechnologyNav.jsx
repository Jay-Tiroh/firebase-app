import React from "react";

const TechnologyNav = ({ switchName }) => {
  const handleClick = (e) => {
    const current = e.currentTarget;
    const btns = document.querySelectorAll(".technology-link");
    btns.forEach((btn) => {
      btn.classList =
        btn === current
          ? "technology-link active-technology"
          : "technology-link";
    });
  };

  return (
    <div className="nav flex w-full  items-center justify-center gap-5 lg:justify-start rounded-xl mb-10 lg:flex-col lg:gap-0 lg:mr-10">
      <div
        className="technology-link  active-technology"
        onClick={(e) => {
          handleClick(e);
          switchName("Launch vehicle");
        }}
      >
        1
      </div>
      <div
        className="technology-link "
        onClick={(e) => {
          handleClick(e);
          switchName("Spaceport");
        }}
      >
        2
      </div>
      <div
        className="technology-link "
        onClick={(e) => {
          handleClick(e);
          switchName("Space capsule");
        }}
      >
        3
      </div>
    </div>
  );
};

export default TechnologyNav;
