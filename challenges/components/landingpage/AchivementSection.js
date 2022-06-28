import React from "react";
import { BsBarChartFill } from "react-icons/bs";
import { ImLoop2 } from "react-icons/im";
const AchivementSection = () => {
  return (
    <>
      <div className="w-full h-[350px] flex flex-row items-center justify-between px-[70px] bg-[#E5E5E5]">
        <div className="w-[30%] h-[200px] flex flex-col ">
          <span className="uppercase text-[#A99425] text-[14px]">
            achivements
          </span>
          <span className="w-[95%] text-[35px]">
            Pourpose of a Convoy is to keep your team together
          </span>
        </div>
        <div className="w-[30%] flex flex-row h-[200px]">
          <div className="w-[50px] bg-purple-700 flex items-center justify-center h-[50px] rounded-full">
            <BsBarChartFill fill="white" size={30} />
          </div>
          <div className="flex flex-col w-[80%] py-4 px-4">
            <span className="text-[16px] ">Designed for Greatness</span>
            <span className="text-[12px] mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus, ducimus maxime cupiditate animi ad molestiae
              excepturi nemo error atque repellendus? Adipisci, fuga! Aut ea
              possimus quidem. Blanditiis rem delectus vitae.
            </span>
          </div>
        </div>
        <div className="w-[30%] h-[200px] flex flex-row border-2 ">
          <div className="w-[50px] bg-orange-700 flex items-center justify-center h-[50px] rounded-full">
            <ImLoop2 fill="white" size={30} />
          </div>
          <div className="flex flex-col w-[80%] py-4 px-4">
            <span className="text-[16px] ">Together we can sync with you</span>
            <span className="text-[12px] mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus, ducimus maxime cupiditate animi ad molestiae
              excepturi nemo error atque repellendus? Adipisci, fuga! Aut ea
              possimus quidem. Blanditiis rem delectus vitae.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AchivementSection;
