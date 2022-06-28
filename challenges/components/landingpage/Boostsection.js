import React from "react";
import { AiFillSetting, AiFillWechat } from "react-icons/ai";
import { RiTimerFill } from "react-icons/ri";

const Boostsection = () => {
  return (
    <div className="w-full flex flex-col justify-evenly items-center px-8 md:px-[70px] h-[100vh]">
      <div className="w-[320px]  h-[95px] font-[600] text-center text-[30px]">
        How can we help boost your business
      </div>
      <div className="w-full h-[25px] text-gray-500 text-center text-[18px] ">
        There are many ways we can help your business grow
      </div>
      <div className="flex flex-row w-full gap-4 flex-wrap justify-center items-center">
        <div className="flex h-[245px] md:h-[345px] rounded-lg sm:w-full md:w-[32%]  border-[1px] flex-col justify-start pt-8 items-center">
          <div className="h-[75px] w-[75px] flex justify-center items-center rounded-full bg-blue-300">
            <AiFillWechat fill="blue" size={50} />
          </div>
          <div className="w-full h-[45px] leading-6 px-5 text-center font-[500] text-[16px] ">
            We find out your needs
          </div>
          <div className="w-full text-gray-500  leading-6 px-5 text-center font-[500] text-[12px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            eum esse delectus dolore quibusdam consequatur quam, optio assumenda
            non quia, aperiam, incidunt accusamus odit a praesentium velit
            libero veniam eaque?
          </div>
        </div>
        <div className="flex md:h-[345px] sm:h-[245px] rounded-lg sm:w-full md:w-[32%]  border-[1px] flex-col justify-start pt-8 items-center">
          <div className="h-[75px] w-[75px] flex justify-center items-center rounded-full bg-orange-300">
            <AiFillSetting fill="red" size={50} />
          </div>
          <div className="w-full h-[45px] leading-6 px-5 text-center font-[500] text-[16px] ">
            Figure out the details
          </div>
          <div className="w-full  leading-6 text-gray-500 px-5 text-center font-[500] text-[12px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            eum esse delectus dolore quibusdam consequatur quam, optio assumenda
            non quia, aperiam, incidunt accusamus odit a praesentium velit
            libero veniam eaque?
          </div>
        </div>
        <div className="flex md:h-[345px] sm:h-[245px] sm:w-full md:w-[32%]  rounded-lg border-[1px] flex-col justify-start pt-2 md:pt-8 items-center">
          <div className="h-[75px] w-[75px] flex justify-center items-center rounded-full bg-green-300">
            <RiTimerFill fill="green" size={50} />
          </div>
          <div className="w-full h-[45px] leading-6 px-5 text-center font-[500] text-[12px]  md:text-[16px] ">
            Fast and quick delivery
          </div>
          <div className="w-full  leading-6 text-gray-500 px-5 text-center font-[500] text-[8px] md:text-[12px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            eum esse delectus dolore quibusdam consequatur quam, optio assumenda
            non quia, aperiam, incidunt accusamus odit a praesentium velit
            libero veniam eaque?
          </div>
        </div>
      </div>
      <div className="bg-[#0C6CA2] rounded-full text-white px-6 py-2">
        Become a patner
      </div>
    </div>
  );
};

export default Boostsection;
