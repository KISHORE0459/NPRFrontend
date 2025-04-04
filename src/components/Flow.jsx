import {
  FaCar,
  FaCamera,
  FaParking,
  FaSignOutAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import PropTypes from "prop-types";
import { useState } from "react";
const Flow = () => {
  const steps = [
    {
      title: "Enter",
      icon: <FaCar />,
      description: "Vehicle enters the parking area.",
    },
    {
      title: "NPR Recognition",
      icon: <FaCamera />,
      description: "Number plate is scanned and verified.",
    },
    {
      title: "Slot Allocation",
      icon: <FaParking />,
      description: "System assigns an available parking slot.",
    },
    {
      title: "Exit",
      icon: <FaSignOutAlt />,
      description: "Vehicle exits the parking area.",
    },
    {
      title: "Payment Calculation",
      icon: <FaMoneyBillWave />,
      description: "Fee is calculated and deducted.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center py-10">
      <h2 className="text-3xl font-semibold text-[#1E40AF] mb-8">
        NPR Project Flow
      </h2>
      <div className="relative flex flex-col md:flex-row items-center gap-[25px]">
        {steps.map((step, index) => (
          <Element step={step} key={index} />
        ))}
      </div>
    </div>
  );
};

const Element = ({ step }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="flex flex-col items-center text-center relative hover:scale-105 hover:cursor-pointer gap-3"
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div
        className={`flex items-center justify-center w-16 h-16 rounded-full text-2xl shadow-lg ${
          hover ? "bg-gray-200 text-blue-400" : "bg-blue-500 text-white "
        }`}
      >
        {step.icon}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="mt-4 text-lg font-semibold text-gray-800">
          {step.title}
        </h3>
        <p className="text-gray-600 text-sm w-40">{step.description}</p>
      </div>
    </div>
  );
};

Element.propTypes = {
  step: PropTypes.any,
};
export default Flow;
