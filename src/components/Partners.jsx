import React from "react";
import evening from "../assets/images/evening.png";
import calender from "../assets/images/calender.png";
import furniture from "../assets/images/furniture.png";
import fannie from "../assets/images/Fannie.png";
const Partners = () => {
  return (
    <div className="pt-16 bg-[#0A0A0A] md:pb-[94px] pb-10">
      <div className="max-w-[1140px] mx-auto px-3">
        <h2 className="text-white font-AzoSans text-[45px] md:text-[64px] text-center md:pb-[52px] pb-5">
          Partners
        </h2>
        <div className="flex flex-row flex-wrap ">
          <div className="lg:w-1/4 md:w-1/2 w-full flex justify-center relative after:h-full after:w-[5px] after:bg-[#FDDA60] after:absolute after:right-0 after:top-0 after:bottom-0 lg:after:rotate-12  after:shadow-[0px_0px_12px_2px_#FDDA60] after:hidden md:after:block py-6 md:py-0 ">
            <div className="flex items-center ">
              <img src={evening} alt="even" data-aos="fade-right" data-aos-duration="4000"      data-aos-easing="linear" />
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full flex justify-center relative after:h-full after:w-[5px] after:bg-[#FDDA60] after:absolute after:right-0 after:top-0 after:bottom-0 after:rotate-12 lg:after:block after:hidden after:shadow-[0px_0px_12px_2px_#FDDA60] md:py-0 py-6">
            <div className="flex items-center ">
              <img
                src={calender}
                alt="even"
                className="w-full"
                data-aos-duration="4000"
                data-aos="fade-up"
                     data-aos-easing="linear"
              />
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full flex justify-center relative after:h-full after:w-[5px] after:bg-[#FDDA60] after:absolute after:right-0 after:top-0 after:bottom-0 lg:after:rotate-12   after:shadow-[0px_0px_12px_2px_#FDDA60] md:after:block after:hidden md:py-0 py-6">
            <div className="flex items-center ">
              <img
                src={furniture}
                alt="even"
                className="w-full"
                data-aos-duration="4000"
                data-aos="fade-down"
                     data-aos-easing="linear"
              />
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full flex justify-center py-6">
            <div className="flex items-center ">
              <img
                src={fannie}
                alt="even"
                className="w-full"
                data-aos-duration="4000"
                data-aos="fade-left"
                     data-aos-easing="linear"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
