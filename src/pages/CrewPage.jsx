import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Crew from "../components/Crew";

export const crewLoader = async ({ params }) => {
  const res = await fetch("/api/crew");
  const crew = await res.json();
  return { crew };
};

const CrewPage = () => {
  const [role, setRole] = useState("Commander");
  const switchRole = (newRole) => {
    setRole(newRole);
  };

  const { crew } = useLoaderData();
  console.log(crew);
  return (
    <div className="m-20 md:m-14 xl:m-32 lg:m-20 text-white">
      <div className="step lg:mb-10">
        <span className="number ">02</span>
        <h2 className="text">meet your crew</h2>
      </div>
      <Crew crew={crew} role={role} switchRole={switchRole} />
    </div>
  );
};

export default CrewPage;
