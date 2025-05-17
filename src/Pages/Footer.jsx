import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className=" text-zinc-200 pt-5 lg:pt-1 inter-font">
      <div className="container mx-auto px-4">
        <h1
          className="text-center inter-600 text-3xl cursor-pointer mb-6"
          onClick={() => navigate("/home")}
        >
          Codewithharshal.
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-zinc-400 mb-6">
          <p
            className="cursor-pointer hover:text-white transition"
            onClick={() => navigate("/home")}
          >
            Home
          </p>
          <p
            className="cursor-pointer hover:text-white transition"
            onClick={() => navigate("/About")}
          >
            About
          </p>
          <p
            className="cursor-pointer hover:text-white transition"
            onClick={() => navigate("/Work")}
          >
            Work
          </p>
          <p
            className="cursor-pointer hover:text-white transition"
            onClick={() => navigate("/Hobbies")}
          >
            Hobbies
          </p>
        </div>

        <div className="flex justify-center mb-6 md:hidden">
          <a href="mailto:harshalself7@gmail.com">
            <button className="bg-zinc-700 border border-zinc-600 text-white px-3 py-2 rounded-2xl cursor-pointer text-sm font-normal">
              Let's talk
            </button>
          </a>
        </div>

        <p className="text-center cursor-pointer text-zinc-400 text-sm">
          © All rights reserved by{" "}
          <span className="text-zinc-100">Codewithharshal</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
