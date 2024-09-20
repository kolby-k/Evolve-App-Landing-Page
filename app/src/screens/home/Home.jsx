// Home.js
import React from "react";
import HeroSection from "./components/HeroSection";
import WorkoutTrackingFeature from "./components/WorkoutTrackingFeature";

function Home() {
  return (
    <div className="flex flex-col w-full text-slate-100 justify-evenly space-y-8 pb-10 overflow-auto">
      <HeroSection />

      {/* Target Section with ID "get-started" */}
      <div
        id="learn-more"
        className="flex self-center rounded-md shadow-md w-1/2 h-screen items-center"
      >
        <WorkoutTrackingFeature />
      </div>

      {/* Other Sections */}
      <div className="bg-white p-6 sm:p-8 rounded-md shadow-md w-full max-w-full sm:max-w-3xl">
        <h2 className="text-slate-900 font-semibold text-lg sm:text-xl text-center sm:text-left">
          Explore a vast library of exercises. / Save your favorite exercises
          for easy access.
        </h2>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-md shadow-md w-full max-w-full sm:max-w-3xl">
        <h2 className="text-slate-900 font-semibold text-lg sm:text-xl text-center sm:text-left">
          Stay motivated with detailed progress reports. / Easily review past
          workouts with the calendar view.
        </h2>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-md shadow-md w-full max-w-full sm:max-w-3xl">
        <h2 className="text-slate-900 font-semibold text-lg sm:text-xl text-center sm:text-left">
          Easily start new workouts or choose from templates. / Build
          personalized workout plans.
        </h2>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-md shadow-md w-full max-w-full sm:max-w-3xl">
        <h2 className="text-slate-900 font-semibold text-lg sm:text-xl text-center sm:text-left">
          Track every set and rep in real-time. / Dive deep into past workout
          performance.
        </h2>
      </div>
    </div>
  );
}

export default Home;
