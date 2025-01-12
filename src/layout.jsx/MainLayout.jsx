import React, { useEffect } from "react";
import Home from "../pages/HomePage";
import Navbar from "../components/Navbar";
import Destination from "../pages/DestinationPage";
import { Outlet, useLocation } from "react-router-dom";

const useBodyClass = () => {
  const location = useLocation();

  useEffect(() => {
    // Determine the body class dynamically
    let bodyClass = "";
    if (location.pathname.startsWith("/destination")) {
      bodyClass = "destination-bg";
    } else if (location.pathname.startsWith("/crew")) {
      bodyClass = "crew-bg";
    } else if (location.pathname.startsWith("/technology")) {
      bodyClass = "technology-bg";
    } else if (location.pathname === "/") {
      bodyClass = " home-bg";
    }

    // Apply the class to the body
    document.body.className = bodyClass;

    // Cleanup to reset the body class
    return () => {
      document.body.className = "";
    };
  }, [location]);
};

const MainLayout = () => {
  useBodyClass();
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Home /> */}
    </div>
  );
};

export default MainLayout;
