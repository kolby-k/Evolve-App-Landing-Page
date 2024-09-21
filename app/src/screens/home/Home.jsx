// Home.js
import React from "react";
import HeroSection from "./components/HeroSection";
import FeatureSection from "../../components/FeatureSection";
import DownloadAppSection from "./components/DownloadAppSection";

function Home() {
  return (
    <div className="flex flex-col w-full text-gray-100 space-y-16 ">
      {/* Hero Section */}
      <HeroSection />

      {/* Feature Sections */}
      <div className="flex h-12 border-b border-b-slate-600 w-1/3 self-center"></div>

      <FeatureSection
        title="Real-Time Workout Tracking"
        description="Track every set and rep in real-time and analyze past performance."
        icon="⏱️"
        videoSrc="/videos/tracking-demo.mp4"
      />

      <div className="flex h-12 border-b border-b-slate-600 w-4/5 self-center"></div>

      <FeatureSection
        title="Explore a Vast Library of Exercises"
        description="Save your favorite exercises for easy access."
        icon="📚"
        videoSrc="/videos/exercise-search-demo.mp4"
      />

      <div className="flex h-12 border-b border-b-slate-600 w-4/5 self-center"></div>

      <FeatureSection
        title="Stay Motivated with Analytics & Insights"
        description="Stay ontop of your past performance to consistently make gains."
        icon="📊"
        videoSrc="/videos/exercise-chart-demo.mp4"
      />

      <div className="flex h-12 border-b border-b-slate-600 w-4/5 self-center"></div>

      <FeatureSection
        title="View Your Workout History"
        description="Easily review past workouts with the calendar view."
        icon="📝"
        videoSrc="/videos/workout-history-demo.mp4"
      />

      <DownloadAppSection />
    </div>
  );
}

export default Home;
