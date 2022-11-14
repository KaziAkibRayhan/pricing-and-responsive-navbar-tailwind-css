import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Feature = ({ feature }) => {
  return (
    <div className="flex items-center">
      <CheckCircleIcon className="w-5 h-5 text-pink-400"></CheckCircleIcon>
      <p className="ml-2">{feature}</p>
    </div>
  );
};

export default Feature;
