// DownloadAppSection.js
import React, { useState, useEffect } from "react";

function DownloadAppSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setIsMobile(mobile);
  }, []);

  return (
    <section className="flex flex-col items-center bg-blue-700 py-12">
      <h2 className="text-3xl font-bold text-center text-white pb-6">
        Get Started with Evolve Today!
      </h2>
      <p className="text-lg text-center text-blue-100 mb-8 px-4 max-w-2xl">
        Download the app and take your workouts to the next level. Available on
        iOS.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <a
          href="https://apps.apple.com/app/your-app-id"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/app-store-badge.svg"
            alt="Download on the App Store"
            className="h-14"
          />
        </a>
      </div>
      {isMobile ? (
        <p className="text-blue-100 mt-8">
          Tap the button above to download the app.
        </p>
      ) : (
        <div className="mt-8 flex flex-col items-center">
          <p className="text-blue-100 mb-4">
            Scan the QR code to download the app:
          </p>
          <img
            src="/images/qr-code.png"
            alt="QR code to download app"
            className="h-40 w-40"
          />
        </div>
      )}
    </section>
  );
}

export default DownloadAppSection;
