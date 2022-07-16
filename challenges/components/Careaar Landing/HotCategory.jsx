import Image from "next/image";
import React from "react";
import { BsBank } from "react-icons/bs";
import { careerdata } from "./careerdata";

const HotCategory = () => {
  const jobs = ["110", "106", "85", "102", "112", "56", "125", "113"];
  return (
    <div>
      <div className="w-full h-auto py-5 bg-slate-100 flex flex-col justify-center items-center font-serif">
        <div className="w-full text-[32px]  sm:text-[40px] md:text-[48px] flex  justify-center font-semibold">
          Hot Categories
        </div>
        <div className=" px-2 sm:px-5 lg:px-[80px] mt-8 w-full flex items-center justify-center relative ">
          <div className="md:w-[95%] w-full px-10 sm:px-5  flex-wrap scroll-smooth  h-auto flex items-center gap-4 ">
            {careerdata.category.map((item, i) => (
              <div
                key={i}
                className="border group flex-shrink-0 hover:bg-white hover:shadow-xl flex flex-col justify-center items-center cursor-pointer rounded-md w-full sm:w-[23.2%] md:w-[165px] lg:w-[23%] h-[250px] px-4"
              >
                <div className=" font-small h-20 w-20 rounded-full group-hover:bg-orange-500 items-center justify-center flex text-black/40 font-thin overflow-hidden  relative">
                  {item.icon}
                </div>
                <div className="text-[20px] h-[50px] flex items-center text-black font-semibold">
                  {item.name}
                </div>
                <div className="text-[16px] font-[200] h-[60px] text-black/60 text-center w-[80%]">
                  {jobs[i]} jobs
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotCategory;
