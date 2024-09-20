import React from "react";

function About() {
  return (
    <div className="flex flex-col w-full justify-evenly items-center text-slate-100 space-y-8 py-10">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-3xl">
        <h1 className="text-slate-900 font-semibold text-3xl">About Evolve</h1>
      </div>
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-3xl">
        <h2 className="text-slate-900 font-semibold text-xl">About Section</h2>
      </div>
    </div>
  );
}

export default About;
