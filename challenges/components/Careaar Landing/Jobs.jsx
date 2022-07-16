import Image from "next/image";
import React from "react";
import {
  HiChartBar,
  HiHeart,
  HiLocationMarker,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineHeart,
  HiOutlineLocationMarker,
  HiOutlineUser,
} from "react-icons/hi";
import { careerdata } from "./careerdata";

const Jobs = () => {
  return (
    <div>
      <div className="w-full h-auto py-5 justify-center bg-slate-50 font-serif items-center flex flex-col">
        <div className="w-[85%] justify-center items-center flex flex-col  min-h-[100vh]">
          <div className="w-full flex-col sm:flex-row flex justify-between items-start">
            <div className="sm:w-[20%] w-full mt-3 text-sm sm:text-md uppercase text-black/60 ">
              {" "}
              featured jobs
            </div>
            <div className="sm:w-[70%] w-full text-[18px] sm:text-[32px] font-semibold">
              Jobs available apply to Editorial Specialist, Account Manager,
              Human Resources Specialist and more!
            </div>
          </div>
          <div className="w-full py-5  lg:mt-20 mt-5 flex-wrap gap-5 flex justify-between items-start">
            {careerdata.jobs.slice(0, 6).map((item) => (
              <div
                key={item.c_name}
                className="lg:w-[32%]   bg-white/80 shadow-sm hover:shadow-lg flex flex-col justify-center sm:w-[50%] w-full h-[340px] gap-4 rounded-lg hover:bg-white cursor-pointer"
              >
                <div className="w-full p-4 h-16 flex justify-between items-start">
                  <div className="h-14 w-14 relative rounded-md overflow-hidden">
                    <Image
                      src={item.icon}
                      alt={"he"}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="w-10 h-10 flex justify-center hover:text-black/60 text-black/50 items-center hover:bg-pink-100 hover:shadow-md  rounded-full">
                    <HiOutlineHeart size={25} />
                  </div>
                </div>
                <div className="w-full p-4 border-black/20 border-b border-dashed h-[160px] flex flex-col justify-between  ">
                  <div className="w-full text-lg text-black/80 font-semibold">
                    {item.jobtitle}
                  </div>
                  <div className="w-full text-sm  text-cyan-500 font-[300]">
                    {item.c_name}
                  </div>
                  <div className="w-full text-sm  flex gap-2 text-black/60 font-[200]">
                    <HiOutlineLocationMarker size={20} />
                    {item.location}
                  </div>
                  <div className="w-full text-sm mt-2 flex gap-2 text-black/60 font-[200]">
                    Posted day:{item.date}
                  </div>
                </div>
                <div className="w-full p-4 text-[16px] text-black/60 h-[120px] flex justify-between items-center flex-wrap ">
                  <div className="w-[48%]  h-[48%]   flex capitalize gap-4 items-center">
                    <HiChartBar size={20} />
                    {item.experiences}
                  </div>
                  <div className="w-[48%] h-[48%]  flex capitalize gap-4 items-center">
                    <HiOutlineClock size={20} />
                    {item.j_type}
                  </div>
                  <div className="w-[48%] h-[48%]  flex capitalize gap-4 items-center">
                    <HiOutlineCurrencyDollar size={20} />
                    {item.salary}
                  </div>
                  <div className="w-[48%] h-[48%]  flex capitalize gap-4 items-center">
                    <HiOutlineUser size={20} />
                    {item.p_type}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full my-5 h-[80px] flex items-center justify-center">
            <button className="px-10 py-2 border ">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
