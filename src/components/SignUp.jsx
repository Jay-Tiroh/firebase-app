import React, { useEffect, useRef, useState } from "react";

const SignUp = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleClickOutside = (event) => {
    if (nameRef.current && !nameRef.current.contains(event.target)) {
      setIsNameFocused(false);
    }
    if (emailRef.current && !emailRef.current.contains(event.target)) {
      setIsEmailFocused(false);
    }
    if (passwordRef.current && !passwordRef.current.contains(event.target)) {
      setIsPasswordFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white w-full p-10 flex flex-col items-center justify-center">
      <div className="form w-full border-b-2 ">
        {/* Name */}
        <div className="input-group flex flex-col w-full relative">
          <input
            type="text"
            ref={nameRef}
            value={name}
            onFocus={() => setIsNameFocused(true)}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-400 rounded-lg outline-none w-full font-semibold input text-lg absolute bg-transparent"
          />
          <div
            className={`label font-bold text-xl tracking-wider absolute bg-white ${
              isNameFocused || name ? "active" : ""
            }`}
          >
            Name
          </div>
        </div>

        {/* Email */}
        <div className="input-group flex flex-col w-full relative mt-6">
          <input
            type="email"
            ref={emailRef}
            value={email}
            onFocus={() => setIsEmailFocused(true)}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-400 rounded-lg outline-none w-full font-semibold input text-lg absolute bg-transparent"
          />
          <div
            className={`label font-bold text-xl tracking-wider absolute bg-white ${
              isEmailFocused || email ? "active" : ""
            }`}
          >
            Email
          </div>
        </div>

        {/* Password */}
        <div className="input-group flex flex-col w-full relative mt-6 ">
          <input
            type="password"
            ref={passwordRef}
            value={password}
            onFocus={() => setIsPasswordFocused(true)}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-400 rounded-lg outline-none w-full font-semibold input text-lg absolute bg-transparent"
          />
          <div
            className={`label font-bold text-xl tracking-wider absolute bg-white ${
              isPasswordFocused || password ? "active" : ""
            }`}
          >
            Password
          </div>
        </div>
        <div className="sign-up-btn hover:text-white text-xl rounded-xl cursor-pointer font-semibold hover:bg-blue-500 p-5 text-center tracking-widest bg-white text-blue-500  border-2 border-blue-500 transition-colors ease-in-out duration-300 mb-7">
          Sign Up
        </div>
        <p className="text-lg mb-10">
          Already have an account?{" "}
          <span className="text-blue-500 font-semibold cursor-pointer ml-1">
            Log in
          </span>
        </p>
      </div>
      <div className="Google mt-10 border-2 border-red-500 rounded-xl w-full text-center font-semibold text-xl p-5">
        Sign Up with Google
      </div>
    </div>
  );
};

export default SignUp;
