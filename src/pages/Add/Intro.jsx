import { useState } from "react";
import { introData } from "./IntroData";
import { useNavigate } from "react-router-dom";
const Intro = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const introHandler = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    } else {
      navigate("/");
    }
  };
  const stepHandler = (value) => {
    setStep(value);
  };
  return (
    <div className="flex flex-col items-center  ">
      <div className="flex gap-2 my-3  w-[60%]">
        <div
          onClick={() => stepHandler(1)}
          className={`${
            step === 1 ? "bg-gray-900" : "bg-gray-500"
          } rounded-full w-2 h-2 cursor-pointer`}
        ></div>
        <div
          onClick={() => stepHandler(2)}
          className={`${
            step === 2 ? "bg-gray-900" : "bg-gray-500"
          } rounded-full w-2 h-2 cursor-pointer`}
        ></div>
        <div
          onClick={() => stepHandler(3)}
          className={`${
            step === 3 ? "bg-gray-900" : "bg-gray-500"
          } rounded-full w-2 h-2 cursor-pointer`}
        ></div>
        <div
          onClick={() => stepHandler(4)}
          className={`${
            step === 4 ? "bg-gray-900" : "bg-gray-500"
          } rounded-full w-2 h-2 cursor-pointer`}
        ></div>
      </div>
      {introData.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              step === item.step ? "flex" : "hidden"
            } flex-col   w-[60%] gap-6 pt-4 pl-2`}
          >
            <div className="">{item.icon}</div>
            <h1 className="text-4xl font-bold ">{item.heading}</h1>
            <p className="text-xl">{item.details}</p>
            <div className="flex gap-8">
              <button className="rounded-full border border-blue-600 py-2 px-16 text-lg font-semibold text-blue-600">
                Skip
              </button>
              <button
                className="rounded-full border border-blue-500 bg-blue-500 py-2 px-16 text-lg font-semibold text-white"
                onClick={introHandler}
              >
                Next
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Intro;
