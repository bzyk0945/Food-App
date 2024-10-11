import React from "react";
import { services } from "../../constants";

export const Delivery: React.FC = () => {
  return (
    <section className="flex flex-wrap items-center mt-20">
      <div className="flex w-full flex-col justify-center items-center">
        <h5 className="text-3xl py-12 text-red-500 font-normal mb-4">
          What we serve
        </h5>
        <h2 className="text-6xl text-center">Just sit back at home</h2>
        <h2 className="text-6xl mb-4 text-center">
          {" "}
          we will <span className="text-red-500">take care</span>
        </h2>
        <p className="mt-4 py-1 text-md text-gray-300 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          officiis?
        </p>
        <p className="py-1 text-md text-gray-300 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          eius.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {services.en.map(
          (
            service: { name: string; icon: string; description: string },
            index: number
          ) => (
            <div
              key={index}
              className="flex mt-8 p-12 w-full md:w-1/2 lg:w-1/3 flex-col items-center text-center "
            >
              <img
                src={service.icon}
                alt={`${service.name} icon`}
                className="w-full h-auto max-w-[10rem]"
              />
              <h5 className="text-xl font-semibold mb-4">{service.name}</h5>
              <p className="text-sm">{service.description}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};
