import React from "react";
import logo from "../assets/logo.png";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 bg-red-300">
      <div className="flex justify-center p-10 space-x-16">
        <div className="flex flex-col items-center text-center w-full md:w-1/2 lg:w-1/4">
          <img src={logo} alt="logo" width={62} />
          <span className="font-semibold tracking-wide mt-2">Tasty Treat</span>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur&nbsp;adipisicing elit. Nostrum,
            ullam.
          </p>
        </div>
        <div >
          <h5 className="text-xl tracking-wide font-semibold">Delivery Time</h5>
          <p className="mt-2">Sunday - Thursday</p>
          <p className="mt-2">10:00am - 11:00pm</p>
          <p className="mt-4">Friday - Saturday</p>
          <p className="mt-2">Off Day</p>
        </div>
        <div >
          <h5 className="text-xl tracking-wide font-semibold">Contact</h5>
          <p className="mt-2">
            Location: ZindaBazar, Sylhet-3100,&nbsp;Bangladesh
          </p>
          <p className="mt-2">Phone: 01712345678</p>
          <p className="mt-4">Email: example@gmail.com</p>
        </div>
        <div>
          <h5 className="text-xl tracking-wide font-semibold">Newsletter</h5>
          <p className="mt-2">Subscribe to our newsletter for updates.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-2 p-2 w-full border border-gray-300 rounded"
          />
          <button className="mt-2 p-2 w-full bg-red-500 text-white rounded">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};