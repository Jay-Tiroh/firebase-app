import React from "react";
import { NavLink } from "react-router-dom";

const HomeHero = () => {
  return (
    <div className="text-white flex lg:flex-row flex-col justify-between items-center mt-20 lg:mt-48  p-10">
      <div className="hero-text text-white flex flex-col justify-start lg:items-start items-center  lg:w-1/2 ml-5 lg:ml-20 lg:text-left text-center mb-10 lg:mb-0">
        <p className="lead uppercase mb-3 text-xl">So, you want to travel to</p>
        <h2 className="large uppercase text-7xl mb-5">space</h2>
        <p className="text-lg">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outerspace and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="explore-circle flex justify-center items-center w-96 rounded-full cursor-pointer transition-all duration-150 ease-in-out h-96 lg:mr-20">
        <NavLink
          to="/destination"
          className="inner-circle w-72 bg-white h-72 rounded-full text-center text-3xl font-medium uppercase text-black justify-center items-center flex "
        >
          Explore
        </NavLink>
      </div>
    </div>
  );
};

export default HomeHero;
