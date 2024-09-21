// FeatureSection.js
import React from "react";

function FeatureSection({ title, description, icon, videoSrc }) {
  return (
    <section className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-4 py-12">
      {/* Text Content */}
      <div className="flex-1 flex flex-col gap-y-4 md:pr-8">
        <div className="flex items-center">
          <span className="text-4xl">{icon}</span>
          <h2 className="text-3xl font-bold ml-3">{title}</h2>
        </div>
        <p className="text-lg text-gray-200">{description}</p>
      </div>
      {/* Image */}
      <div className="flex-1 p-4">
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          className="w-full max-w-sm border border-gray-600 rounded-lg shadow-lg"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default FeatureSection;
