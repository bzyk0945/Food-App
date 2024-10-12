import React from "react";
import networkImg from "../../assets/network.png";
export const Testimonial: React.FC = () => {
  return (
    <section className="flex mt-20 flex-wrap">
      <div className="p-10 w-full lg:w-1/2">
        <h5 className="text-2xl font-semibold text-red-500">Testimonial</h5>
        <h2 className="mt-5 text-4xl whitespace-nowrap">
          What our <span className="text-red-500">customers</span> are saying
        </h2>
        <p className="mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ad
          distinctio necessitatibus quia et ipsa molestiae provident iure ex
          enim!
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <img src={networkImg} alt="network" />
      </div>
    </section>
  );
};
