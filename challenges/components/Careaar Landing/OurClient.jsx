import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { careerdata } from "./careerdata";

const OurClient = () => {
  const container = useRef();
  const Scroll = () => {
    container.current.scrollLeft += 1;
  };
  useEffect(() => {
    setInterval(Scroll, 100);
  }, []);
  return (
    <div>
      <div className="w-full h-[350px] sm:h-[100vh] bg-slate-50 flex flex-col justify-center items-center font-serif">
        <div className="w-full text-[32px] sm:text-[48px] flex  justify-center font-semibold">
          Our Clients
        </div>
        <div className="w-full flex justify-center">
          <div className="sm:w-[40%] w-[90%] text-[16px] sm:text-[18px] text-center text-black/60">
            Curabitur a felis in nunc fringilla tristique. Fusce egestas elit
            eget lorem. Etiam vitae tortor.
          </div>
        </div>
        <div className=" px-5 lg:px-[80px] mt-8 w-full ">
          <div
            ref={container}
            className="w-full px-2 scrollbar-hide  overflow-x-scroll h-[100px] sm:h-[200px] flex items-center gap-4"
          >
            {careerdata.clients.map((item) => (
              <div
                key={item.name}
                className="border flex-shrink-0 flex justify-center items-center rounded-md w-[48%] sm:w-[23.2%] md:w-[150px] lg:w-[185px] h-[60px] sm:h-[80px]"
              >
                <div className=" w-[120px] sm:w-[150px] h-[40px] lg:h-[60px] relative">
                  <Image
                    src={item.img}
                    layout="fill"
                    objectFit="contain"
                    alt="dropbox"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
