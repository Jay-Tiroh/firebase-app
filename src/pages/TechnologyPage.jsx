import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Technology from "../components/Technology";

export const technologyLoader = async ({ params }) => {
  const res = await fetch("/api/technology");
  const technology = await res.json();
  return { technology };
};

const TechnologyPage = () => {
  const [name, setName] = useState("Launch vehicle");
  const switchName = (newName) => {
    setName(newName);
  };

  const { technology } = useLoaderData();
  //   console.log(technology);
  return (
    <div className="my-20 md:my-14 xl:my-32 lg:my-20 text-white">
      <div className="step lg:mb-10 md:pl-10">
        <span className="number ">02</span>
        <h2 className="text">space launch 101</h2>
      </div>
      <Technology technology={technology} name={name} switchName={switchName} />
    </div>
  );
};

export default TechnologyPage;
