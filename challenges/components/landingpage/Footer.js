import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="px-[70px] flex items-center w-full flex-col bg-white h-[400px]">
        <div className="flex-row flex w-full h-[90%]">
          <div className="w-[35%] flex justify-evenly flex-col h-full">
            <div className="flex flex-row items-center ">
              <div className="w-[50px] h-[50px] relative">
                <Image
                  src={require("../../public/images/basics/mylogo.jpg")}
                  alt="logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <span className="text-[16px]"> AN Software Solutions</span>
            </div>
            <div className="text-[14px] text-black/50">
              It is a Software Solutions company, We can provide your business
              with a variety of digital solutions to promote your product or
              service online and help you hit your marketing goals and grow your
              business.
            </div>
            <div className="h-[80px] text-slate-400 gap-5 flex flex-row">
              <FaLinkedinIn size={25} />
              <FaInstagram size={25} />
              <FaTwitter size={25} />
              <FaFacebook size={25} />
            </div>
          </div>
          <div className="w-[65%]  flex-row flex justify-evenly ">
            <div className="flex flex-col ">
              <span className="text-[20px] mt-[50px]">Company</span>
              <span className="text-[14] mt-3 cursor-pointer text-black/75">
                Our Team
              </span>
              <span className="text-[14] mt-3 cursor-pointer text-black/75">
                Partners
              </span>
              <span className="text-[14] mt-3 cursor-pointer text-black/75">
                FAQs
              </span>
              <span className="text-[14] mt-3 cursor-pointer text-black/75">
                Blog
              </span>
            </div>
            <div className="flex flex-col ">
              <span className="text-[20px] mt-[50px]">Support</span>
              <span className="text-[14] mt-3 cursor-pointer text-black/75">
                Account
              </span>
              <span className="text-[14] mt-3 cursor-pointer text-black/75">
                Support
              </span>
              <span className="text-[14] mt-3 cursor-pointer text-black/75">
                Feedback
              </span>
              <span className="text-[14] mt-3 cursor-pointer text-black/75">
                Accessibility
              </span>
            </div>
            <div className="flex flex-col ">
              <span className="text-[20px] mt-[50px]">Company</span>
              <span className="text-[14] mt-3 cursor-pointer text-black/75">
                Our Team
              </span>
              <span className="text-[14] mt-3 cursor-pointer text-black/75">
                Partners
              </span>
              <Link href="/landingpage/faqs">
                <a className="text-[14] mt-3 cursor-pointer text-black/75">
                  FAQs
                </a>
              </Link>
              <span className="text-[14] mt-3 cursor-pointer text-black/75">
                Blog
              </span>
            </div>
            <div className="flex flex-col ">
              <span className="text-[20px] mt-[50px]">Contact</span>
              <span className="text-[14] mt-3 cursor-pointer text-black/75">
                Whatsapp
              </span>
              <span className="text-[14] mt-3 cursor-pointer text-black/75">
                Call Servies
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center text-[18px] justify-center">
          <span className="text-[30px]">&#169;</span>
          CopyRight 2022
        </div>
      </div>
    </div>
  );
};

export default Footer;
