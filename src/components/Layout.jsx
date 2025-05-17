import React from "react";
import ArrowImg from "../assets/Arrow.svg";
import Mail from "../assets/Mail.svg";
import Git from "../assets/Git.svg";
import File from "../assets/File.svg";
import Linkedin from "../assets/Linkedin.svg";
import ProjectImg from "../assets/ProjectImg.svg";
import Donut from "../assets/Donut.svg";
const Main = () => {
  return (
    <div>
      <div className="grid grid-cols-1 grid-rows-6 gap-3 min-w-screen p-5 md:justify-items-center md:grid-cols-3 md:grid-rows-4 md:gap-8 lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:p-20">
        <div className="relative col-span-1 row-span-1 bg-zinc-800 border border-zinc-600 ring-1 shadow-2xl rounded-xl max-w-96 p-6 md:w-full md:max-w-md">
          <p className="text-zinc-400 mb-2 md:text-1xl">A Web Developer</p>
          <h1 className="text-amber-500 text-5xl font-semibold mb-4 md:text-6xl">
            Kevin Hendorson
          </h1>
          <p className="text-zinc-200 text-[18px] md:text-2xl ">
            a B.Tech IT student passionate about full-stack development, game
            design, and UI/UX. I enjoy creating interactive experiences and
            building innovative web applications.
          </p>

          <img
            className="absolute bottom-5 right-8 w-10"
            src={ArrowImg}
            alt="Arrow"
          />
        </div>

        <div className="col-span-1 row-span-1 md:w-full md:max-w-md">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full max-w-96 md:w-full md:max-w-md ">
            <div className="col-span-1 row-span-1 bg-zinc-800 border border-zinc-600 ring-1 shadow-2xl rounded-xl grid place-items-center">
              <img src={Git} alt="Git Logo" />
            </div>

            <div className="col-span-1 row-span-1 bg-zinc-800 border-zinc-600 border-1 ring-1 shadow-2xl rounded-xl grid place-items-center">
              <img className="" src={Mail} alt="" />
            </div>
            <div className="col-span-1 row-span-1 bg-zinc-800 border-zinc-600 border-1 ring-1 shadow-2xl rounded-xl grid place-items-center">
              <img className="" src={Linkedin} alt="" />
            </div>
            <div className="col-span-1 row-span-1 bg-zinc-800 border-zinc-600 border-1 ring-1 shadow-2xl rounded-xl grid place-items-center">
              <img className="" src={File} alt="" />
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 bg-zinc-800 border-zinc-600 border-1 ring-1 shadow-2xl rounded-xl max-w-96 md:w-full md:max-w-md  lg:col-span-2 lg:w-full lg:mr-auto">
          <h1 className="text-4xl font-semibold text-amber-500 pt-5 pb-6 pl-5 md:text-5xl md:pl-10 md:pt-8 lg:mb-5">
            Building Skill For Future.
          </h1>
          <div className="flex justify-around px-5">
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
          </div>
          <div className="flex justify-around px-5 mt-3">
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
          </div>
          <div className="flex justify-around px-5 mt-3">
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 bg-zinc-800 border-zinc-600 border-1 ring-1 shadow-2xl rounded-xl max-w-96 md:w-full md:max-w-md">
          <div className="flex justify-around px-5 pt-6">
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
          </div>
          <div className="flex justify-around px-5 mt-3">
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
          </div>
          <div className="flex justify-around px-5 mt-3">
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
          </div>
          <div className="flex justify-around px-5 mt-3">
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
            <div className="bg-zinc-700 border-1 border-zinc-600 w-16 h-16 rounded-full"></div>
          </div>
          <div className="px-8">
            <h1 className="text-4xl text-zinc-200 font-semibold my-4 md:mt-10 md:ml-4">
              Skills
            </h1>
          </div>
        </div>

        <div className="col-span-1 row-span-1 bg-zinc-800 border-zinc-600 border-1 ring-1 shadow-2xl rounded-xl max-w-96 relative md:w-full md:max-w-md lg:col-span-2 lg:w-full ">
          <img className="w-full p-4" src={ProjectImg} alt="" />

          <div className="flex justify-center gap-2 rounded-4xl">
            <div className="w-4 bg-zinc-600 h-2 "></div>
            <div className="w-4 bg-zinc-600 h-2 "></div>
            <div className="w-4 bg-zinc-600 h-2 "></div>
          </div>

          <p className="text-[18px] text-zinc-500 pl-6">Showcase</p>
          <h1 className="text-4xl font-semibold pl-6  text-zinc-200">
            Projects
          </h1>

          <div className="flex pt-4">
            <div className="w-20 h-8 ml-6 bg-zinc-500 rounded-2xl"></div>
            <div className="w-20 h-8 ml-2 bg-zinc-500 rounded-2xl"></div>
          </div>

          <img
            className="w-10 absolute bottom-5 right-8"
            src={ArrowImg}
            alt="Arrow"
          />
        </div>

        <div className="col-span-1 row-span-1 bg-zinc-800 border-zinc-600 border-1 ring-1 shadow-2xl rounded-xl max-w-96 relative md:w-full md:max-w-md">
          <img className="w-full p-4" src={Donut} alt="" />

          <div className="flex justify-center gap-2 rounded-4xl">
            <div className="w-4 bg-zinc-600 h-2 "></div>
            <div className="w-4 bg-zinc-600 h-2 "></div>
            <div className="w-4 bg-zinc-600 h-2 "></div>
          </div>

          <p className="text-[18px] text-zinc-500 pl-6">Hobbies</p>
          <h1 className="text-4xl font-semibold pl-6  text-zinc-200">3D Art</h1>

          <div className="flex pt-4">
            <div className="w-20 h-8 ml-6 mb-3 bg-zinc-500 rounded-2xl"></div>
            <div className="w-20 h-8 ml-2 mb-3 bg-zinc-500 rounded-2xl"></div>
          </div>

          <img
            className="w-10 absolute bottom-5 right-8"
            src={ArrowImg}
            alt="Arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
