import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const Pricing = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Free",
      price: 0,
      features: [
        "Awesome Feature",
        "Extra Feature",
        "Unnecessary Feature",
        "Will never use Feature",
        "Emni Feature",
        "Bolod Feature",
      ],
    },
    {
      id: 2,
      name: "Medium",
      price: 9.99,
      features: [
        "Awesome Feature",
        "Extra Feature",
        "Unnecessary Feature",
        "Will never use Feature",
        "Emni Feature",
        "Bolod Feature",
      ],
    },
    {
      id: 3,
      name: "Platinum",
      price: 19.99,
      features: [
        "Awesome Feature",
        "Extra Feature",
        "Unnecessary Feature",
        "Will never use Feature",
        "Emni Feature",
        "Bolod Feature",
      ],
    },
  ];
  return (
    <div>
      <h1 className="text-5xl bg-indigo-300 text-white p-12 font-bold">
        Best Deal of The Town
      </h1>
      <div className="grid md:grid-cols-3 gap-3 mt-4">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
