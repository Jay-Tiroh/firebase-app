import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SignUp from "../components/SignUp";
// import Img from "../../public/assets/register/space-bg-2.jpg";
// const useBodyClass = () => {
//   const location = useLocation();

//   useEffect(() => {
//     let bodyClass = "";
//     if (location.pathname.startsWith("/register")) {
//       bodyClass = "register-bg";
//     }

//     document.body.className = bodyClass;

//     return () => {
//       document.body.className = "";
//     };
//   }, [location]);
// };

const Register = () => {
  //   useBodyClass();
  return (
    <div className="min-h-screen flex flex-col py-20 px-10 justify-start items-center bg-slate-500">
      <h2 className="welcome-text mb-10 text-white text-5xl">
        Welcome to Space Tourism
      </h2>
      <div className="container w-full bg-white flex rounded-xl overflow-hidden shadow-2xl">
        <div className="register-img w-1/2 " />
        <div />
        <div className=" flex flex-col justify-start items-center p-5 w-1/2">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Register;
