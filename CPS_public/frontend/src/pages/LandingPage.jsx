//frontend/src/pages/LandingPage.jsx
import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans pt-6 pb-12">
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-10">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Get <span className="text-indigo-700">100% Open Rate</span> &{" "}
            <span className="text-indigo-700">Look Professional!</span>
          </h2>
          <p className="text-lg text-gray-700">
            The cost to use CPS is miniscule compared to emailing; plus, it’s much more effective as you appear so much more professional!
          </p>
          <p className="text-md text-gray-600">
            Open rates when emailing are puny compared to the 100% open rate CPS gets! User-friendly CPS works online as it imports fresh sales leads; it then uses AI to find contact pages, generate personalized messages, and solve captchas and submit! SO SLICK!
          </p>
        </div>

        <div className="md:w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/30/07/52/virtual-reality-2699211_960_720.jpg"
            alt="Hero"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
