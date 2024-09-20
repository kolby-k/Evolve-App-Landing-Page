// HeroSection.js
import React from "react";
import { Link } from "react-scroll";
import { FaChevronDown } from "react-icons/fa";

function HeroSection() {
  return (
    <section
      className="bg-cover bg-center h-[80vh] relative"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-800 to-slate-500 opacity-70"></div>
      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full relative z-10">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to Evolve
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8">
            Start tracking your workouts with Evolve to get more out of your
            workouts!
          </p>
          <Link
            to="learn-more"
            smooth={true}
            duration={500}
            className="absolute bottom-10 cursor-pointer animate-bounce"
          >
            <FaChevronDown className="text-white text-2xl" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
