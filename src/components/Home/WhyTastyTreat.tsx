import React from "react";
import deliveryLocation from "../../assets/delivery-location.png";
export const WhyTastyTreat: React.FC = () => {
  return (
    <section className="flex mt-20 flex-wrap justify-center items-center px-16 ">
      <img
        src={deliveryLocation}
        alt="delivery location"
        className="w-full md:w-1/2"
      />
      <div className="flex flex-col gap-12 w-full md:w-1/2 ">
        <h5 className="text-4xl">Why <span className="text-red-500">Teasty Treat?</span></h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          minus. Tempora reprehenderit a corporis velit, laboriosam vitae ullam,
          repellat illo sequi odio esse iste fugiat dolor, optio incidunt
          eligendi deleniti!
        </p>
      </div>
    </section>
  );
};
