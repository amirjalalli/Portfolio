import { useState } from "react";
import heroImage from "./../assets/heroImage.jpeg";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white sm:mt-20">
            I'm a FrontEnd Developer😎
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have one years of experience building and desighing software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS
          </p>
          <button
            to="portfolio"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <MdKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </button>
        </div>

        <div>
          <img
            src={heroImage}
            alt="my Profile"
            className="rounded-2xl mx-auto w-full h-64 md:w-96 md:h-96 md:my-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
