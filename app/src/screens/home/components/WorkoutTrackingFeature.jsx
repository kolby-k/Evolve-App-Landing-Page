import React from "react";

function WorkoutTrackingFeature() {
  return (
    <div className="flex flex-1 flex-col font-bold text-3xl">
      <h2 className="text-center pb-4">
        Log Workouts and Performance Details Effortlessly
      </h2>
      <div className="flex font-medium text-lg p-4">
        <ul className="flex flex-1 flex-col justify-start gap-y-4">
          <li className="pt-12">Quick to add exercises to your workout</li>
          <li>View each exercises including set details</li>
          <li>Built in rest timer to automatically track rest periods</li>
        </ul>
        <div className="flex flex-1">
          <img
            src="/screenshots/tracking-screen.png"
            className="m-2 border-2 border-black rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default WorkoutTrackingFeature;
