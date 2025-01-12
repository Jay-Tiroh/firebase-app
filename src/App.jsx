import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import MainLayout from "./layout.jsx/MainLayout";
import DestinationPage, { destinationLoader } from "./pages/DestinationPage";
import HomePage from "./pages/HomePage";
import CrewPage, { crewLoader } from "./pages/CrewPage";
import TechnologyPage, { technologyLoader } from "./pages/TechnologyPage";
import Register from "./pages/Register";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "destination",
          element: <DestinationPage />,
          loader: destinationLoader,
        },
        {
          path: "crew",
          element: <CrewPage />,
          loader: crewLoader,
        },
        {
          path: "technology",
          element: <TechnologyPage />,
          loader: technologyLoader,
        },
      ],
    },
    {
      path: "register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
