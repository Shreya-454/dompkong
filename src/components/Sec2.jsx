import React from "react";
import img1 from "../assets/images/sec2-img.png";
const Sec2 = () => {
  return (
    <div className="bg-[#0A0A0A] md:pt-[129px] pt-10 md:pb-[84px] pb-10 ">
      <div className="max-w-[1140px] mx-auto px-3">
        <div className="flex flex-row flex-wrap -mx-3 items-center">
          <div
            className="lg:w-1/2 w-full px-3"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="linear"
          >
            <h2 className="text-white font-AzoSans text-[45px] md:text-[64px] text-center lg:text-start">
              About
            </h2>
            <p className="text-white font-mont text-[14px] md:text-base leading-[25.6px] max-w-[500px] text-center lg:text-start mx-auto lg:mx-0">
              Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra
              amet et. Erat nam molestie. Vitae mollis lacus senectus mattis
              nisl. Porta , adipiscing sed mus diam amet, ac sed tellus.{" "}
            </p>
          </div>
          <div className="lg:w-1/2 w-full px-3 relative z-[1]">
            <img
              src={img1}
              alt="img"
              className="w-full"
              data-aos="fade-left"
                   data-aos-easing="linear"
              data-aos-duration="1500"
            />
            <div className="w-[216px] h-[216px] bg-[#FDDA60] blur-[131px] absolute left-[25%] bottom-[16%] z-[-1]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec2;
