import Image from "next/image";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import Aibot from "../../public/images/basics/aibot.jpeg";
const SuscribeSection = () => {
  return (
    <div className=" px-[70px] h-[400px] flex items-center bg-[#E5E5E5] justify-center w-full">
      <div className="  shadow-lg flex  w-full flex-row justify-evenly  bg-white items-center h-[300px]">
        <div className="w-[65%] h-[300px] flex px-10 flex-col justify-center ">
          <div className="font-[500] text-[34px] ">Subscribe Newsletter</div>
          <div className="text-[15px] w-[450px]">
            You can always subscribe tou our newsletter to get events, updates,
            informations and also chat with us by sending us a mail.
          </div>
          <div className="flex items-center gap-4 flex-row  mt-8  w-full">
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
        <div className="w-[35%] h-[300px] relative">
          <Image src={Aibot} alt="Ai Bot" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default SuscribeSection;
