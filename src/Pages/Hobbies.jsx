import React from "react";
import { Arrow } from "../assets/DesignIcons/DesignIcon"; // Top-right arrow
import Footer from "./Footer";
import Header from "./Header";
import Hobbies_projects from "../assets/Hobbies";

const Hobbies = () => {
  return (
    <>
      <Header />
      <div className="px-4 py-10  min-h-screen flex flex-col items-center">
        <div className="w-1/2 overflow-hidden mb-6 flex justify-center">
          <div className=" marquee-track whitespace-nowrap text-2xl text-zinc-700 font-bold tracking-widest uppercase flex">
            <div className="flex gap-8">
              <span>Hobbies</span>
              <span>Hobbies</span>
              <span>Hobbies</span>
              <span>Hobbies</span>
              <span>Hobbies</span>
              <span>Hobbies</span>
              <span>Hobbies</span>
            </div>
            <div className="flex gap-8 ml-8">
              <span>Hobbies</span>
              <span>Hobbies</span>
              <span>Hobbies</span>
              <span>Hobbies</span>
              <span>Hobbies</span>
              <span>Hobbies</span>
              <span>Hobbies</span>
            </div>
          </div>
        </div>

        {/* Centered Masonry Grid */}
        <div className="w-full max-w-6xl">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {Hobbies_projects.map((Hobbies_Projects, index) => (
              <div
                key={index}
                className="relative break-inside-avoid bg-zinc-800 border border-zinc-600 rounded-xl p-4 shadow-lg"
              >
                {/* Category Label */}
                <span className="absolute bottom-4 left-4 bg-zinc-700 text-zinc-300 text-xs px-2 py-1 rounded">
                  {Hobbies_Projects.category}
                </span>

                {/* Project Image */}
                <img
                  src={Hobbies_Projects.image}
                  alt={Hobbies_Projects.name}
                  className="w-full rounded-lg mb-4"
                />

                {/* Project Name */}
                <h2 className="text-white text-lg font-semibold mb-6">
                  {Hobbies_Projects.name}
                </h2>

                {/* Top-right Arrow Button */}
                <a
                  href={Hobbies_Projects.link}
                  className="absolute bottom-4 right-4 w-8 h-8 "
                >
                  <img src={Arrow} alt="Arrow Icon" className="" />
                </a>

                {/* Bottom-left Link Icon */}
                <a
                  href={Hobbies_Projects.link}
                  className="absolute bottom-4 left-4 text-zinc-400 hover:text-zinc-200"
                  title="Visit Project"
                ></a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hobbies;
