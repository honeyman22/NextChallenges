import Image from "next/image";
import React, { useRef } from "react";
import {
  FaArrowAltCircleRight,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { careerdata } from "./careerdata";

const Gobal = () => {
  const container = useRef();
  const scroll = (value) => {
    container.current.scrollLeft += value;
  };
  return (
    <div>
      <div className="w-full font-serif h-[100vh] items-center flex ">
        <div className="w-[40%] h-[430px] flex flex-col gap-4 pl-[100px] ">
          <div className="text-[48px] w-[80%] leading-[68px] text-black/80 font-bold">
            Global Connections
          </div>
          <div className="w-[80%] text-[18px] text-black/50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            ratione nesciunt voluptatem itaque
          </div>
          <button className=" py-3 bg-orange-600 text-[18px] rounded-lg justify-center items-center text-white flex gap-2 w-[200px] mt-4 ">
            View all Jobs
            <FaLongArrowAltRight />
          </button>
        </div>
        <div className="w-[60%] h-[450px] ">
          <div
            ref={container}
            className="px-2 flex gap-8 scrollbar-hide scroll-smooth overflow-scroll "
          >
            {careerdata.globle.map((item) => (
              <div
                key={item.country}
                className="border flex-shrink-0 w-[280px] rounded-lg overflow-hidden h-[450px]"
              >
                <div className="w-full h-[350px] relative">
                  <Image
                    src={item.img}
                    alt="s"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="w-full justify-center text-black/80 flex mt-4 h-5 text-[24px] font-semibold capitalize">
                  {item.country}
                </div>
                <div className="text-black/50 mt-4 text-center text-sm">
                  {item.jobs} jobs
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex gap-4 justify-center  items-center mt-5">
            <div
              onClick={() => scroll(-300)}
              className="w-[40px] h-[40px] text-black/60  hover:shadow-md hover:text-black/80 rounded-full flex justify-center items-center border cursor-pointer hover:bg-white/20"
            >
              <FaLongArrowAltLeft />
            </div>
            <div
              onClick={() => scroll(+300)}
              className="w-[40px] h-[40px] text-black/60  hover:shadow-md hover:text-black/80 rounded-full flex justify-center items-center border cursor-pointer hover:bg-white/20"
            >
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gobal;
