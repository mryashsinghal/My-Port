// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="bg-primary text-white min-h-screen flex flex-col justify-center items-center min-w-full">
      <div className="animate-fadeIn text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-dark">My Portfolio</span>
        </h1>
        <p className="mt-4 text-lg">
          Building Innovative Solutions with <span className="text-techyBlue">10 Years of Experience</span>
        </p>
        <div className="mt-8">
          <a
            href="#services"
            className="bg-black text-light px-6 py-3 rounded-full shadow-lg transition hover:bg-dark"
          >
            View My Work
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 animate-slideUp">
        <p className="text-sm">Scroll down to explore more</p>
      </div>
    </div>
  );
}
