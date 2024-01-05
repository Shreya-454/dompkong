import React, { useState } from "react";
import goldmonkey from "../assets/images/gold-monkey.png";
import heman from "../assets/images/He-Man.png";
import anonymous from "../assets/images/Anonymous.png";
import pac from "../assets/images/2Pac.png";
import elvis from "../assets/images/Elvis.png";
import hugh from "../assets/images/Hugh.png";
import rambo from "../assets/images/Rambo.png";
import albert from "../assets/images/Albert (1).png";
import prince from "../assets/images/Prince.png";
import royals from "../assets/images/Royals.png";
import bany from "../assets/images/any-big.png";
import bigheman from "../assets/images/big-heman.png";
import bigpac from "../assets/images/big-pac.png";
import belvis from "../assets/images/big-elvis.png";
import bhugh from "../assets/images/big-hugh.png";
import brambo from "../assets/images/big-rambo.png";
import balbert from "../assets/images/big-albert.png";
import broyals from "../assets/images/big-royals.png";
import bprince from "../assets/images/big-prince.png";
const Kongs = () => {
  const [tab, settab] = useState("tab1");
  function handletab(tabs) {
    settab(tabs);
  }
  return (
    <div className="md:pt-11 pt-6 xl:pb-64 md:pb-32 pb-8 relative overflow-x-clip z-10 bg-[#0A0A0A]">
      <div className=".container max-w-[1140px] mx-auto px-3">
        <h2 className="md:text-[64px] text-[45px] text-white font-AzoSans text-center font-normal leading-[108%]">
          THE kONGS
        </h2>
        <span className="flex flex-nowrap pt-5 overflow-y-scroll gap-5 mx-auto md:justify-center md:items-center">
          <img
            onClick={() => handletab("tab2")}
            src={heman}
            alt="first"
            data-aos="zoom-in-left"
             data-aos-duration="2000"
               data-aos-easing="linear"
            className="lg:absolute top-0 lg:right-0  xl:right-[-3%] max-sm:w-[100px] max-sm:h-[100px] rounded-lg border-[4px] border-solid border-[#FDDA60]"
          />
          <img
            onClick={() => handletab("tab3")}
            src={anonymous}
            alt="sec"
            data-aos="zoom-in-left"
            data-aos-duration="2000"
               data-aos-easing="linear"
            className="lg:absolute top-[22%] xl:top-[20%] lg:right-0  xl:right-[5%] max-sm:w-[100px] max-sm:h-[100px] rounded-lg border-[4px] border-solid border-[#FDDA60] "
          />
          <img
            onClick={() => handletab("tab4")}
            src={pac}
            alt="thord"
            data-aos="zoom-in-left"
            data-aos-duration="2000"
               data-aos-easing="linear"
            className="lg:absolute top-[44%] xl:top-[41%] lg:right-0  xl:right-[11%]  max-sm:w-[100px] max-sm:h-[100px]  rounded-lg border-[4px] border-solid border-[#FDDA60]"
          />
          <img
            onClick={() => handletab("tab5")}
            src={elvis}
            alt="fourth"
            data-aos="zoom-in-left"
            data-aos-duration="2000"
              data-aos-easing="linear"
            className="lg:absolute bottom-[15%] xl:bottom-[21%] lg:right-0  xl:right-[5%] max-sm:w-[100px] max-sm:h-[100px] rounded-lg border-[4px] border-solid border-[#FDDA60] "
          />
          <img
            onClick={() => handletab("tab6")}
            src={hugh}
            alt="fifth"
            data-aos="zoom-in-left"
            data-aos-duration="2000"
              data-aos-easing="linear"
            className="lg:absolute bottom-[-7%] xl:bottom-0 lg:right-0  xl:right-[-3%] max-sm:w-[100px] max-sm:h-[100px] rounded-lg border-[4px] border-solid border-[#FDDA60] "
          />
        </span>
        <div className="flex justify-center items-center flex-col lg:mt-6 py-6 ">
          {tab === "tab1" && (
            <img
              src={goldmonkey}
              alt="blackmonkey"
              className="max-max-h-[701px]"
              data-aos="zoom-in"
              data-aos-duration="2000"
                data-aos-easing="linear"
            />
          )}{" "}
          {tab === "tab2" && (
            <img
              src={bigheman}
              alt="2"
              className="max-h-[701px]"
              data-aos="zoom-in"
              data-aos-duration="2000"
                data-aos-easing="linear"
            />
          )}{" "}
          {tab === "tab3" && (
            <img
              src={bany}
              alt="3"
              className="max-h-[701px]"
              data-aos="zoom-in"
              data-aos-duration="2000"
                data-aos-easing="linear"
            />
          )}{" "}
          {tab === "tab4" && (
            <img
              src={bigpac}
              alt="4"
              className="max-h-[701px]"
              data-aos="zoom-in"
              data-aos-duration="2000"
                data-aos-easing="linear"
            />
          )}{" "}
          {tab === "tab5" && (
            <img
              src={belvis}
              alt="5"
              className="max-h-[701px]"
              data-aos="zoom-in"
              data-aos-duration="2000"
                data-aos-easing="linear"
            />
          )}
          {tab === "tab6" && (
            <img
              src={bhugh}
              alt="6"
              className="max-h-[701px]"
              data-aos="zoom-in"
              data-aos-duration="2000"
                data-aos-easing="linear"
            />
          )}
          {tab === "tab7" && (
            <img
              src={brambo}
              alt="7"
              className="max-h-[701px]"
              data-aos="zoom-in"
              data-aos-duration="2000"
                data-aos-easing="linear"
            />
          )}
          {tab === "tab8" && (
            <img
              src={balbert}
              alt="8"
              className="max-h-[701px]"
              data-aos="zoom-in"
              data-aos-duration="2000"
                data-aos-easing="linear"
            />
          )}
          {tab === "tab9" && (
            <img
              src={broyals}
              alt="9"
              className="max-h-[701px]"
              data-aos="zoom-in"
              data-aos-duration="2000"
                data-aos-easing="linear"
            />
          )}
          {tab === "tab10" && (
            <img
              src={bprince}
              alt="10"
              className="max-h-[701px]"
              data-aos="zoom-in"
              data-aos-duration="2000"
                data-aos-easing="linear"
            />
          )}
        </div>
        <span className="flex flex-nowrap overflow-y-scroll gap-5 mx-auto md:justify-center md:items-center ">
          <img
            onClick={() => handletab("tab6")}
            src={hugh}
            alt="redsmall"
            data-aos="zoom-in-right"
              data-aos-easing="linear"
            data-aos-duration="2000"
            className="lg:absolute lg:top-0 top-[12%] left-0 xl:left-[-3%] max-sm:w-[100px] max-sm:h-[100px] rounded-lg border-[4px] border-solid border-[#FDDA60] "
          />
          <img
            onClick={() => handletab("tab7")}
            src={rambo}
            alt="secsmall"
            data-aos="zoom-in-right"
            data-aos-duration="2000"
              data-aos-easing="linear"
            className="lg:absolute lg:top-[22%] xl:top-[20%] top-[12%] left-[20%] lg:left-0 xl:left-[5%] max-sm:w-[100px] max-sm:h-[100px] rounded-lg border-[4px] border-solid border-[#FDDA60]"
          />
          <img
            onClick={() => handletab("tab8")}
            src={albert}
            alt="thirdsmall"
            data-aos="zoom-in-right"
            data-aos-duration="2000"
              data-aos-easing="linear"
            className="lg:absolute lg:top-[44%] xl:top-[41%] top-[12%] left-[40%] lg:left-0 xl:left-[11%] max-sm:w-[100px] max-sm:h-[100px] rounded-lg border-[4px] border-solid border-[#FDDA60]"
          />
          <img
            onClick={() => handletab("tab10")}
            src={prince}
            alt="fourthimg"
            data-aos="zoom-in-right"
            data-aos-duration="2000"
            className="lg:absolute lg:bottom-[15%] xl:bottom-[21%] max-lg:top-[12%] left-[60%] lg:left-0 xl:left-[5%] max-sm:w-[100px] max-sm:h-[100px] rounded-lg border-[4px] border-solid border-[#FDDA60]"
          />
          <img
            onClick={() => handletab("tab9")}
            src={royals}
            alt="fifthimg"
            data-aos="zoom-in-right"
            data-aos-duration="2000"
            className="lg:absolute lg:bottom-[-7%] xl:bottom-0 max-lg:top-[12%] left-[85%] md:left-[90%] lg:left-0 xl:left-[-3%] max-sm:w-[100px] max-sm:h-[100px] rounded-lg border-[4px] border-solid border-[#FDDA60] "
          />
        </span>
      </div>
      <div className="lg:w-[350px] w-[150px] h-[350px] rounded-[50%] bg-[#FDDA60] blur-[179.54052734375px] absolute top-[29%] z-[-10] left-[40%]"></div>
    </div>
  );
};

export default Kongs;
