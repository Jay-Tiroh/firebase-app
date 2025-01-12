import React from "react";
import TechnologyNav from "./TechnologyNav";
const Technology = ({ technology, name, switchName }) => {
  const technologicalTool = technology.find((item) => item.name === name);
  const img = technologicalTool.images.portrait;
  console.log(technologicalTool);
  const technologyImg = `../../public${img.split(".")[1]}.jpg`;
  return (
    <div className="flex flex-col justify-center items-center w-full lg:flex-row-reverse lg:gap-14 lg:justify-between">
      <img
        className="technology-img w-full mt-32 h-96 lg:w-2/5 mb-10"
        src={technologyImg}
      />
      <div className="details w-full lg:w-1/2 flex flex-col lg:justify-between  lg:flex-row lg:ml-14 lg:items-start">
        <TechnologyNav switchName={switchName} />
        <div className="technology-description flex flex-col justify-center  items-center mt-10 pb-20  lg:text-start lg:items-start p-10 ">
          <h2 className="role text-3xl tracking-wide uppercase mb-2 animated">
            the terminology...
          </h2>
          <h2 className="crew text-4xl w-full md: text-nowrap tracking-widest uppercase animated text-center lg:text-left lg:text-5xl ">
            {technologicalTool?.name}
          </h2>
          <p className="description-text mt-10 text-xl text-center lg:text-left animated md:w-3/4 lg:w-full">
            {technologicalTool?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
