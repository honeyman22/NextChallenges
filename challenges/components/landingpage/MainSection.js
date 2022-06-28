import React from "react";
import banner from "../../public/images/basics/homebannner.webp";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";

const MainSection = () => {
  return (
    <div>
      <div className="w-full flex flex-col px-[70px]  items-start bg-[#E5E5E5] h-[100vh]">
        <div className="h-[100px] w-full flex justify-between items-center flex-row ">
          <div className="h-[80px] w-[80px] rounded-full overflow-hidden shadow-xl relative">
            <Image
              src={require("../../public/images/basics/mylogo.jpg")}
              alt="my logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-[60%] flex flex-row justify-between">
            <a
              href=""
              className="text-[18px] px-6 py-2 font-[400] text-[#000000]/50"
            >
              About Us
            </a>
            <a
              href=""
              className="text-[18px] px-6 py-2 font-[400] text-[#000000]/50"
            >
              Our Services
            </a>
            <a
              href=""
              className="text-[18px] px-6 py-2 font-[400] text-[#000000]/50"
            >
              The Team
            </a>
            <a
              href=""
              className="text-[18px] px-6 py-2 font-[400] text-[#000000]/50"
            >
              Portfolio
            </a>
            <div className="px-8 flex shadow-lg justify-center rounded-full items-center text-white h-[45px] bg-[#0C6CA2] py-4">
              Get In Touch
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full flex-row">
          <div>
            <div className="text-[#0C6CA2] mt-[90px] h-[45px] w-full  text-[20px]">
              Take a step forward in your growth
            </div>
            <div className="w-[580px] text-[42px] font-[600] ">
              We Boost the growth for Startup to impact 500 Companies around the
              world
            </div>
            <div className="text-[16px] w-[450px]">
              It is a digital agency company, We can provide your business with
              a variety of digital solutions to promote your product or service
              online and help you hit your marketing goals and grow your
              business.
            </div>
            <div className="flex items-center gap-4 flex-row mt-6   w-[450px]">
              <input
                type="text"
                className="border-[1px] h-[45px] px-8 rounded-sm rounded-tl-xl  w-[380px] outline-none"
                placeholder="Email Address"
              />
              <button className="px-5 w-[100px] rounded-sm rounded-br-xl flex font-thin justify-center items-center text-[25px] py-2 h-[45px] bg-blue-600 text-white">
                <AiOutlineRight className="" size={25} />
              </button>
            </div>
          </div>
          <div className="w-[600px] bg-transparent h-[450px] relative">
            <Image
              src={banner}
              alt="home page bannaer"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
