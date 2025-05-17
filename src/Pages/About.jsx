import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import aboutData from "../assets/About";

const About = () => {
  const { profile, bio, experience, education } = aboutData;

  return (
    <div>
      <Header />
      <div className="w-full max-w-6xl mx-auto px-4 py-5 md:flex md:gap-8">
        <div className="bg-zinc-800 p-5 rounded-2xl border border-zinc-600 text-center md:w-1/3 md:max-h-[470px]">
          <div className="text-center">
            <img
              className="inline-block content-center"
              src={profile.avatar}
              alt="Avatar"
            />
            <h1 className="text-zinc-100 mt-4 text-2xl inter-700">
              {profile.name}
            </h1>
            <p className="text-zinc-400 inter-font">{profile.username}</p>
          </div>
          <div className="flex gap-4 justify-center items-center mt-4">
            {profile.socials.map((src, index) => (
              <img
                key={index}
                className="w-10 h-10 rounded-full bg-zinc-500"
                src={src}
                alt="social"
              />
            ))}
          </div>
          <button className="bg-zinc-700 border border-zinc-600 text-white px-3 py-2 mt-5 rounded-2xl cursor-pointer text-sm font-normal">
            Let's talk
          </button>
        </div>

        <div className="mt-8 md:mt-0 md:ml-5 md:w-2/3 min-h-[300px] max-h-[500px] md:max-h-[900px] xl:max-h-[500px] overflow-y-auto hide-scrollbar">
          <h1 className="text-zinc-100 mb-5 inter-600 text-2xl">About</h1>
          <p className="text-zinc-100 inter-font md:text-[16px]">
            I'm Harshal, a passionate developer and 3D designer with a knack for
            turning complex ideas into creative digital solutions. I'm currently
            pursuing my Bachelor's in IT, with a strong interest in full-stack
            web development, machine learning, and visual storytelling through
            3D art.
            <br />
            <br />
            My toolkit includes technologies like React, Node.js, MongoDB, and
            Python for machine learning. I also love crafting immersive visuals
            in Blender and sharing them on my Instagram page, Studio.
            <br />
            <br />
            I thrive on solving real-world problems, whether it’s through an AI
            model or a Web Applicatin. My goal is to work on impactful tech
            products and always stay at the edge of what’s next in technology.
            <br />
            <br />
            When I’m not building apps or rendering scenes, you’ll find me
            gaming, watching tech documentaries, or diving into futuristic ideas
            for my next creative build.
          </p>

          <div className="text-white mt-10">
            <h1 className="inter-600 text-xl pb-2">Experience</h1>
            <p>{experience.duration}</p>
            <p>{experience.company}</p>
            <p className="mt-2">{experience.description}</p>
          </div>

          <div className="text-white mt-10">
            <h1 className="inter-600 text-xl pb-2">Education</h1>
            {education.map((edu, index) => (
              <div key={index} className="mb-8">
                <p>{edu.duration}</p>
                <p>{edu.institution}</p>
                <p className="mt-2">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
