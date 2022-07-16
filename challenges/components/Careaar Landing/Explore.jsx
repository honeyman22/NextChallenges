import React from "react";
import { HiOutlineDocumentText, HiOutlineSearch } from "react-icons/hi";

const Explore = () => {
  return (
    <div>
      <div className="w-full font-serif py-10">
        <div className="w-full h-[250px]  flex flex-col items-center justify-center">
          <div className="text-black/60 uppercase text-sm">for candidates</div>
          <div className="text-[48px] h-[100px] flex justify-center items-center  font-semibold text-black/80">
            Explore Thousands of Jobs
          </div>
          <div className="text-black/60 w-[40%] text-center">
            Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.
            Morbi mattis ullamcorper velit.
          </div>
        </div>
        <div className="w-full gap-16 h-[400px] flex justify-center items-center">
          <div className="w-[300px]  h-[350px] gap-3 flex  flex-col items-center justify-center p-2">
            <div className="h-[100px]  text-orange-500 font-extralight w-[100px] mb-4 flex justify-center items-center">
              <HiOutlineDocumentText size={90} />
            </div>
            <div className="text-black/60 uppercase text-xs">step-1</div>
            <div className=" text-lg text-center font-semibold capitalize ">
              create an account
              <br />
              <span className="text-black/60 text-[15px] text-center">
                Nunc nonummy metus. Donec elit libero.
              </span>
            </div>
          </div>
          <div className="w-[300px]  h-[350px] gap-3 flex  flex-col items-center justify-center p-2">
            <div className="h-[100px]  text-orange-500 font-extralight w-[100px] mb-4 flex justify-center items-center">
              <HiOutlineDocumentText size={90} />
            </div>
            <div className="text-black/60 uppercase text-xs">step-2</div>
            <div className=" text-lg text-center font-semibold capitalize ">
              complete your profile
              <br />
              <span className="text-black/60 text-[15px] text-center">
                Nunc nonummy metus. Donec elit libero.
              </span>
            </div>
          </div>
          <div className="w-[300px]  h-[350px] gap-3 flex  flex-col items-center justify-center p-2">
            <div className="h-[100px]  text-orange-500 font-extralight w-[100px] mb-4 flex justify-center items-center">
              <HiOutlineSearch size={90} />
            </div>
            <div className="text-black/60 uppercase text-xs">step-1</div>
            <div className=" text-lg text-center font-semibold capitalize ">
              search your job
              <br />
              <span className="text-black/60 text-[15px] text-center">
                Nunc nonummy metus. Donec elit libero.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
