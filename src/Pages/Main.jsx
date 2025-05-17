import React from "react";
import { Arrow, Menu } from "../assets/DesignIcons/DesignIcon";
import { Donut, Project } from "../assets/Images/Images";
import icons from "../assets/Skills_Icons/skillassets";
import { File, Git, Linkedin, Mail } from "../assets/Social_Icons/Socialasstes";
import Header from "./Header";
import Footer from "./Footer";
import { Navigate, useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 grid-rows-6 gap-3 p-5 md:grid-cols-3 md:grid-rows-4 md:gap-6 md:px-5  xl:grid-cols-4 xl:grid-rows-2 xl:px-20 xl:py-5 ">
        <div className="col-span-1 row-span-1 bg-zinc-800 border border-zinc-600 ring-1 shadow-2xl rounded-xl w-full h-full md:col-span-2 xl:col-span-1 relative p-6 ">
          <div className="absolute inset-0 rounded-lg blur-2xl opacity-20 bg-zinc-600 z-0"></div>
          <p className="text-lg xl:text-sm inter-font text-zinc-400 mb-2">
            A Web Devloper
          </p>

          <h1 className="text-4xl xl:text-3xl text-white font-bold mb-2 inter-800">
            Harshal Sewatkar
          </h1>

          <p className="text-zinc-300 inter-font md:text-[18px] xl:text-[16px]">
            B.Tech IT student focused on DSA, MERN stack, and machine learning.
            I love developing functional web apps and exploring new tech with
            enthusiasm to solve real-world problems.
          </p>

          <button className="absolute top-4 right-4 w-10 h-10 rounded-full cursor-pointer">
            <img onClick={() => navigate("/About")} src={Arrow} alt="" />
          </button>
        </div>

        <div className="col-span-1 row-span-1 w-full h-full">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full">
            <a
              href="https://github.com/codewithharshal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-zinc-800 border border-zinc-600 ring-1 shadow-2xl rounded-xl grid place-items-center w-full h-full p-6">
                <img className="w-11" src={Git} alt="Git Logo" />
              </div>
            </a>
            <a
              href="mailto:harshalself7@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-zinc-800 border border-zinc-600 ring-1 shadow-2xl rounded-xl grid place-items-center w-full h-full p-6">
                <img className="w-11" src={Mail} alt="Mail" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/harshalsewatkar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-zinc-800 border border-zinc-600 ring-1 shadow-2xl rounded-xl grid place-items-center w-full h-full p-6">
                <img className="w-11" src={Linkedin} alt="LinkedIn" />
              </div>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <div className="bg-zinc-800 border border-zinc-600 ring-1 shadow-2xl rounded-xl grid place-items-center w-full h-full p-6">
                <img className="w-11" src={File} alt="File" />
              </div>
            </a>
          </div>
        </div>

        <div className="col-span-1 row-span-1 bg-zinc-800 border border-zinc-600 ring-1 shadow-2xl rounded-xl w-full h-full md:col-span-3 xl:mr-auto xl:col-span-2 relative p-6">
          <div className="absolute inset-0 rounded-lg blur-2xl opacity-20 bg-zinc-600 z-0"></div>
          <h1 className="text-2xl md:text-3xl text-white font-semibold inter-600">
            My Achievements & Certifications
          </h1>

          <div className="flex flex-wrap gap-4 items-center mt-5">
            {/* <img src={File} alt="Badge 1" className="w-8 h-8" />
            <img src={Git} alt="Badge 2" className="w-8 h-8" />
            <img src={Mail} alt="Badge 3" className="w-8 h-8" /> */}

            <p className="text-sm text-white inter-font">
              No achievements added yet
            </p>
            <p className="text-sm text-zinc-500 inter-font">Coming soon...</p>
          </div>

          <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center cursor-pointer">
            <img src={Arrow} alt="Certificate Icon" />
          </div>
        </div>

        <div className="col-span-1 row-span-1 bg-zinc-800 border border-zinc-600 ring-1 shadow-2xl rounded-xl w-full h-full xl:col-span-1 relative p-6 md:p-4 xl:p-6">
          <div className="absolute inset-0 rounded-lg blur-2xl opacity-20 bg-zinc-600 z-0"></div>
          <div className="flex flex-wrap gap-4 items-center mt-2">
            <div className="max-h-40 md:max-h-35 xl:max-h-40  overflow-y-auto grid grid-cols-4 gap-4 p-2 hide-scrollbar flex-1/2 ">
              {Object.entries(icons).map(([name, src]) => (
                <div key={name} className="flex flex-col items-center">
                  <img src={src} alt={name} className="w-8 h-8" />
                  <p className="text-white text-sm mt-2">{name}</p>
                </div>
              ))}
              {/* Add more icons here */}
            </div>

            <div className="absolute bottom-5">
              <p className="text-sm text-zinc-500 inter-font">Most Used</p>
              <p className="text-xl text-zinc-300 inter-600">Skills</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 row-span-1 bg-zinc-800 border border-zinc-600 ring-1 shadow-2xl rounded-xl w-full h-full md:col-span-2 p-4 xl:col-span-2 relative">
          <img
            src={Project}
            alt="Project"
            className="w-full h-45 object-cover rounded-lg mb-4"
          />

          <div className="xl:hidden w-24 h-18 bg-zinc-800 absolute bottom-0 left-2 rounded-xl"></div>
          <div className="xl:hidden w-15 h-15 bg-zinc-800 absolute bottom-0 right-0 rounded-xl"></div>

          {/* Content Area */}
          <div className="absolute bottom-4 left-4">
            <p className="text-zinc-400 text-sm inter-font">Showcase</p>
            <h1 className="text-zinc-100 text-xl font-semibold inter-600">
              Projects
            </h1>
          </div>

          {/* Corner Button */}
          <button className=" cursor-pointer absolute bottom-4 right-4 ">
            <img onClick={() => navigate("/Work")} src={Arrow} alt="" />
          </button>
        </div>

        <div className="relative col-span-1 row-span-1 bg-zinc-800 border border-zinc-600 ring-1 shadow-2xl rounded-xl w-full h-full p-4 md:col-span-3 xl:col-span-1">
          {/* Image */}
          <img
            src={Donut}
            alt="Hobby"
            className="w-full h-48 xl:h-44 object-cover rounded-lg"
          />
          <div className="xl:hidden w-24 h-18 bg-zinc-800 absolute bottom-0 left-2 rounded-xl"></div>
          <div className="xl:hidden w-15 h-15 bg-zinc-800 absolute bottom-0 right-0 rounded-xl"></div>
          {/* Content Area */}
          <div className="absolute bottom-4 left-4">
            <p className="text-sm text-zinc-500 inter-font">
              3d art - Playing Games
            </p>
            <p className="text-xl text-zinc-300 inter-600">Hobbies</p>
          </div>

          {/* Corner Button */}
          <button className="absolute cursor-pointer bottom-4 right-4 ">
            <img onClick={() => navigate("/Hobbies")} src={Arrow} alt="" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
