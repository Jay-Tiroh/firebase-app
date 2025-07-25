import React, { useState } from "react";
import { Outlet, useLoaderData, useParams } from "react-router-dom";
import PlanetaryBody from "../components/PlanetaryBody";

export const destinationLoader = async ({ params }) => {
  const res = await fetch("/api/destinations");
  const destinations = await res.json();
  return { destinations };
};

const DestinationPage = () => {
  const { destinations } = useLoaderData();
  // console.log(destinations);

  const [destination, setDestination] = useState("Moon");
  const switchDestination = (newOne) => {
    setDestination(newOne);
  };

  return (
    <div className="m-20 md:m-32 xl:m-32 lg:m-20 text-white">
      <div className="step lg:mb-10">
        <span className="number ">01</span>{" "}
        <h2 className="text">pick your destination</h2>
      </div>
      <PlanetaryBody
        destinations={destinations}
        switchDestination={switchDestination}
        destination={destination}
      />
      {/* <Outlet context={{ destinations }} /> */}
    </div>
  );
};

export default DestinationPage;
