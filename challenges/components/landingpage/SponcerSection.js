import Image from "next/image";
import React from "react";

const SponcerSection = () => {
  return (
    <div>
      <div className="h-[180px] w-full bg-white px-[70px] border-2 flex flex-row items-center justify-between">
        <div className="font-[500] text-[#000000]/50 text-[24px]">
          Our Sponsors
        </div>
        <div className="flex flex-row justify-between w-[75%]">
          <div className="w-[100px] h-[80px]  relative">
            <Image
              src={require("../../public/images/basics/upworklogo.png")}
              alt="upwork in sponser"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-[100px] h-[80px]  relative">
            <Image
              src={require("../../public/images/basics/googleplay.png")}
              alt="upwork in sponser"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-[100px] h-[80px]  relative">
            <Image
              src={require("../../public/images/basics/slacklogo.png")}
              alt="upwork in sponser"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-[100px] h-[80px]  relative">
            <Image
              src={require("../../public/images/basics/vstlogo.png")}
              alt="upwork in sponser"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-[100px] h-[80px]  relative">
            <Image
              src={require("../../public/images/basics/youtubelogo.png")}
              alt="upwork in sponser"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponcerSection;
