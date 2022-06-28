import Image from "next/image";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
const CourseSection = () => {
  return (
    <div>
      <div className="w-full flex flex-row h-[100vh] bg-[#E5E5E5] border-2 pl-[70px] ">
        <div className="w-[45%] h-full flex flex-col pt-[40px]">
          <div className="font-[600] text-[40px] ">
            We also have other interesting courses to learn
          </div>
          <div className="font-[400] w-[80%] mt-8 text-[#000000]/50 text-[14px]">
            We also have courses you can enroll for which will broaden your
            knowledge in tech and also enable you learn a skill and make some
            cool cash.
          </div>
          <div className="w-full mt-8 h-[40px] flex flex-row space-x-4">
            <AiFillCheckCircle fill="blue" size={30} />
            <span className="text-[18px]">Product Design</span>
          </div>
          <div className="w-full  h-[40px] flex flex-row space-x-4">
            <AiFillCheckCircle fill="blue" size={30} />
            <span className="text-[18px]">Graphics Design</span>
          </div>
          <div className="w-full h-[40px] flex flex-row space-x-4">
            <AiFillCheckCircle fill="blue" size={30} />
            <span className="text-[18px]">Web Development</span>
          </div>
          <div className="cursor-pointer mt-6 text-[18px] text-white rounded-full px-6 py-2 bg-blue-600 w-[150px]">
            Get Started
          </div>
        </div>
        <div className="py-[20px] h-full w-[50%] flex flex-row flex-wrap gap-5">
          <div className=" p-5 flex flex-col rounded-lg shadow-sm justify-between h-[290px] w-[300px]">
            <div className="w-[50px] h-[50px] flex items-center font-[700] text-[25px] justify-center bg-yellow-400">
              JS
            </div>
            <span className="font-[600] text-[20px] "> Javascript</span>
            <span className="text-[14px] text-black/50">
              JavaScript, often abbreviated JS, is a programming language that
              is one of the core technologies of the World Wide Web, alongside
              HTML and CSS.
            </span>
            <div className="text-[#0C6CA2] cursor-pointer uppercase text-[16px]">
              learn more
            </div>
          </div>
          <div className=" p-5 flex flex-col rounded-lg shadow-sm justify-between h-[290px] w-[300px]">
            <div className="w-[50px] h-[50px] relative">
              <Image
                src={require("../../public/images/basics/Reac.png")}
                alt="react"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <span className="font-[600] text-[20px] ">React</span>
            <span className="text-[14px] text-black/50">
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on UI components.
            </span>
            <div className="text-[#0C6CA2] cursor-pointer uppercase text-[16px]">
              learn more
            </div>
          </div>
          <div className=" p-5 flex flex-col rounded-lg shadow-sm justify-between h-[290px] w-[300px]">
            <div className="w-[50px] h-[50px] relative">
              <Image
                src={require("../../public/images/basics/figma.png")}
                alt="react"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <span className="font-[600] text-[20px] "> Figma</span>
            <span className="text-[14px] text-black/50">
              Figma is a vector graphics editor and prototyping tool which is
              primarily web-based, with additional offline features enabled by
              desktop applications for mac.
            </span>
            <div className="text-[#0C6CA2] cursor-pointer uppercase text-[16px]">
              learn more
            </div>
          </div>
          <div className=" p-5 flex flex-col rounded-lg shadow-sm justify-between h-[290px] w-[300px]">
            <div className="w-[50px] h-[50px] relative">
              <Image
                src={require("../../public/images/basics/htmllogo.png")}
                alt="react"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <span className="font-[600] text-[20px] ">HTML</span>
            <span className="text-[14px] text-black/50">
              The HyperText Markup Language or HTML is the standard markup
              language for documents designed to be displayed in a web browser
            </span>
            <div className="text-[#0C6CA2] cursor-pointer uppercase text-[16px]">
              learn more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
