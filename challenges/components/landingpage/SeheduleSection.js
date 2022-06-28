import Image from "next/image";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const SeheduleSection = () => {
  return (
    <div>
      <div className="h-[85vh] w-full bg-[#E5E5E5] flex py-5 px-[70px] flex-row">
        <div className="w-[50%] relative  h-[100%] ">
          <div className="absolute w-[80%] bg-white top-[] shadow-lg rounded-xl h-[320px] border-[1px]">
            <div className="font-[600] text-[20px] pt-2 px-5">
              Your Pie Chart
            </div>
            <div className="w-full flex relative justify-center items-center h-[250px]">
              <div className="w-[250px] h-[250px] relative">
                <Image
                  src={require("../../public/images/basics/Template.png")}
                  alt="barchart"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="absolute right-11 top-[-20px] h-[70px] border-blue-500  border-2 shadow-lg w-[70px] rounded-full bg-slate-300"></div>
              <div className="absolute  right-[2px] top-[-20px] h-[70px] border-blue-500  border-2 shadow-lg w-[70px] rounded-full bg-slate-300"></div>
              <div className="absolute right-[-40px] top-[-20px] h-[70px] border-blue-500  border-2 shadow-lg w-[70px] rounded-full bg-slate-300"></div>
              <div className="absolute right-[-85px] top-[-20px] border-blue-500  border-2 h-[70px] shadow-lg w-[70px] rounded-full bg-slate-300"></div>
            </div>
          </div>
          <div className="absolute rounded-xl overflow-hidden w-[70%]  shadow-lg left-[180px] top-[200px] h-[250px] border-[1px] border-green">
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
        <div className="w-[50%] h-full flex-col pl-10 justify-center  flex  ">
          <div className="text-[#39D220] uppercase">shedule</div>
          <div className="text-[40px] font-[600]">
            Your great customer relationship starts here
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
      </div>
    </div>
  );
};

export default SeheduleSection;
