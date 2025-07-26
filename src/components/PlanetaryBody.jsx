import React from "react";
import { useOutletContext } from "react-router-dom";
// import satelliteImg from "../assets/destination/image-satellite.png";
import DestinationNav from "./DestinationNav";
const PlanetaryBody = ({ destinations, destination, switchDestination }) => {
  const satellite = destinations.find((item) => item.name === destination);

  const img = satellite.images.png;
  // const satelliteImg = `../../public${img.split(".")[1]}.png`;
  return (
    <div className="flex flex-col items-center text-white w-full lg:flex-row lg:justify-between lg:items-start gap-10">
      <div className="destination-img mt-10 lg:w-1/2">
        <img src={img} alt="satellite" className="scale-75 md:scale-100 " />
      </div>
      <div className="details w-full lg:w-1/2 ">
        <DestinationNav switchDestination={switchDestination} />

        <div className="description flex flex-col justify-center items-center mt-10 border-b-2 pb-20  lg:text-start lg:items-start">
          <h2 className="destination text-9xl md:text-7xl uppercase animated">
            {satellite?.name}
          </h2>
          <p className="text mt-10 text-2xl text-center lg:text-left animated">
            {satellite.description}
          </p>
        </div>
        <div className="more-deets md:flex justify-evenly lg:justify-start lg:text-left gap-20  ">
          <div className="detail uppercase animated">
            <span className="text">avg. distance</span>
            <span className="number">{satellite.distance}</span>
          </div>
          <div className="detail uppercase animated">
            <span className="text">est. travel time</span>
            <span className="number">{satellite.travel}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetaryBody;
