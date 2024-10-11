import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/hero-img.png";
import arrowIcon from "../../assets/icons/arrow-icon.svg";
export const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-wrap items-center">
      <div className="text-center w-full lg:w-1/2 px-4">
        <h5 className="text-xl font-semibold mb-4">
          Easy way to to make an order
        </h5>
        <h1 className="mt-2 text-6xl font-bold mb-6">
          <span className="text-red-500">Hungry?</span> Just wait food at{" "}
          <span className="text-red-500">your door</span>
        </h1>
        <p className="text-gray-300 mb-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
          vitae exercitationem saepe alias eveniet iusto deserunt accusamus
          nulla laborum dicta!
        </p>
        <div className="flex gap-12 justify-center items-center">
          <Link to='/foods' className="flex  items-center bg-red-700 px-4 py-2 rounded-md font-normal ">
            Order now <img src={arrowIcon} alt="arrow icon" className="ml-2" />
          </Link>
          <Link to='/foods' className="border-2 border-red-650 bg-white font-normal  text-red-500 px-4 py-2 rounded-md ">
            See all foods
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-4">
        <img src={heroImg} alt="hero img" className="w-full h-auto" />
      </div>
    </section>
  );
};
