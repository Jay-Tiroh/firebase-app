import React from "react";

import CrewNav from "./CrewNav";
const Crew = ({ crew, switchRole, role }) => {
  const crewMember = crew.find((item) => item.role === role);

  const img = crewMember.images.png;
  const crewImg = `../../public${img.split(".")[1]}.png`;
  return (
    <div className="flex flex-col items-center text-white w-full lg:flex-row lg:justify-between lg:items-end md:mt-10 lg:gap-10">
      <div className="details w-full lg:w-1/2 flex flex-col lg:justify-between lg:gap-32">
        <div className="crew-description flex flex-col justify-center  items-center mt-10 pb-20  lg:text-start lg:items-start ">
          <h2 className="role text-2xl md:text-3xl text-center tracking-wide uppercase mb-2">
            {crewMember?.role}
          </h2>
          <h2 className="crew text-3xl md:text-4xl w-full md:text-nowrap tracking-widest uppercase animated text-center lg:text-left lg:text-5xl ">
            {crewMember?.name}
          </h2>
          <p className="bio-text mt-10 text-xl text-center lg:text-left animated md:w-3/4 lg:w-full ">
            {crewMember?.bio}
          </p>
        </div>
        <CrewNav switchRole={switchRole} />
      </div>

      <div className="crew-img  lg:w-1/2 mt-5">
        <img src={crewImg} alt="crew" />
      </div>
    </div>
  );
};

export default Crew;
