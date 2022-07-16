import Image from "next/image";
import React, { useRef } from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { careerdata } from "./careerdata";
const TopCompany = () => {
  const container = useRef();
  const Scroll = (value) => {
    //in this function for small device or mobile the value must me 180
    //in large(lg:) the value must me 230
    container.current.scrollLeft += value;
  };
  return (
    <div>
      <div className="w-full h-auto py-5 bg-slate-100 flex flex-col justify-center items-center font-serif">
        <div className="w-full text-[32px]  sm:text-[40px] md:text-[48px] flex  justify-center font-semibold">
          Top Company
        </div>
        <div className=" px-2 sm:px-5 lg:px-[80px] mt-8 w-full flex items-center justify-center relative ">
          <div
            ref={container}
            className="md:w-[95%] w-full px-5  scrollbar-hide scroll-smooth overflow-x-scroll h-[250px] flex items-center gap-4 "
          >
            {careerdata.company.map((item, i) => (
              <div
                key={i}
                className="border flex-shrink-0 hover:bg-white hover:shadow-xl flex flex-col justify-center items-center rounded-md w-[48%] sm:w-[23.2%] md:w-[165px] lg:w-[210px] h-[230px] px-4"
              >
                <div className=" w-[55px]  h-[55px] rounded-md overflow-hidden  relative">
                  <Image
                    src={item.icon}
                    layout="fill"
                    objectFit="contain"
                    alt="dropbox"
                  />
                </div>
                <div className="text-[14px] h-[50px] flex items-center text-black/60">
                  jobs-{item.jobs}
                </div>
                <div className="text-[16px] font-semibold h-[60px] text-center w-[80%]">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
          <div
            onClick={() => Scroll(-230)}
            className=" top-[45%] sm:h-10 sm:w-10 flex justify-center items-center rounded-full hover:bg-white/70  font-light text-black/30 hover:text-black/60 cursor-pointer left-2  lg:left-[80px] absolute"
          >
            <HiOutlineArrowNarrowLeft size={20} />
          </div>
          <div
            onClick={() => Scroll(+230)}
            className=" top-[45%] font-light sm:h-10 sm:w-10 flex justify-center items-center rounded-full hover:bg-white/70 text-black/30 hover:text-black/60 cursor-pointer right-2  lg:right-[80px] absolute"
          >
            <HiOutlineArrowNarrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCompany;
