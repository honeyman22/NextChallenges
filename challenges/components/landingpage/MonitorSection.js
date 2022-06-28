import Image from "next/image";
import React from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { TbArrowsDownUp } from "react-icons/tb";
const MonitorSection = () => {
  return (
    <div>
      <div className="h-[85vh] w-full bg-white flex py-5 px-[70px] flex-row">
        <div className="w-[50%] h-full flex-col pl-10 justify-center  flex  ">
          <div className="text-[#39D220] uppercase">monitor</div>
          <div className="text-[40px] font-[600]">
            Introducing the ever best mobile carousels{" "}
          </div>
          <div className="font-[400] text-[14px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse optio
            assumenda saepe vitae atque et hic eos omnis aliquid corrupti,
            laborum praesentium fugit eligendi consectetur commodi veritatis
            tempore, nobis consequuntur!
          </div>
          <div className="text-[16px] flex flex-row mt-8 items-center text-[#0C6CA2] font-400">
            Learn more about publishing{" "}
            <HiOutlineArrowNarrowRight className="ml-4" size={30} />
          </div>
        </div>
        <div className="relative w-[50%] h-full  ">
          <div className="relative z-50 w-[320px] h-[350px]  top-10">
            <div className=" absolute w-[280px] left-10 h-[320px] flex justify-center items-center rounded-lg bg-blue-500">
              <div className="w-[200px] h-[200px] relative">
                <Image
                  src={require("../../public/images/basics/donut-chart-1.png")}
                  alt="barchart"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="absolute top-[35%] left-[44%] w-[80px] h-[80px] bg-white rounded-full  flex items-center  justify-center">
              <TbArrowsDownUp size={35} />
            </div>
            <div className="h-[70px] w-[70px] rounded-full top-[40%] flex items-center text-[#000000]/50  bg-white shadow-xl absolute border-2">
              <HiOutlineArrowNarrowLeft className="ml-4" size={30} />
            </div>
            <div className="h-[70px] w-[70px] rounded-full flex items-center text-[#000000]/50 right-[-35px] bg-white top-[40%]  shadow-xl absolute border-2">
              <HiOutlineArrowNarrowRight className="ml-4" size={30} />
            </div>
          </div>
          <div className="absolute rounded-xl overflow-hidden w-[60%]  shadow-lg left-[180px] top-[260px] h-[200px] border-[1px] border-green">
            <div className="w-full h-full relative">
              <Image
                src={require("../../public/images/basics/bargraph-2.png")}
                alt="barchart"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitorSection;
