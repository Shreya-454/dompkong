import React, { useState } from "react";
import wine from "../assets/images/wine.png";
import gradient1 from "../assets/images/gradient-1.png";
import gradient2 from "../assets/images/gradient-2.png";

const Sec5 = () => {
  const [first, setFirst] = useState(0o0);
  function ADD() {
    setFirst(first + 1);
  }
  function minus() {
    setFirst(first - 1);
    if (first === 0) {
      setFirst(first - 0);
    }
  }
  return (
    <div className="relative overflow-hidden z-[1] pt-[82px] pb-[62px]">
      <img src={gradient1} alt="g1" className="absolute top-0 left-0 right-0 " />
      <img
        src={gradient2}
        alt="g2"
        className="absolute bottom-0 left-0 right-0 "
      />
      <div className="w-[296px] h-[296px] rounded-[296px] bg-[#FDDA60] blur-[146px] absolute right-[-5%] top-[22%] z-[-1] "></div>
      <div className="w-[173px] h-[173px] bg-[#FDDA60] blur-[146px] absolute left-0 top-[25%] z-[-1] "></div>
      <div className="max-w-[1140px] mx-auto px-3">
        <div className="flex md:flex-row flex-wrap -mx-3 items-center flex-col-reverse ">
          <div className="lg:w-1/2 md:w-5/12 w-full px-3 flex justify-center">
            <img src={wine} alt="wine" data-aos="zoom-out-down" data-aos-duration="2300"  data-aos-easing="linear" />
          </div>
          <div className="lg:w-1/2 md:w-7/12 w-full px-3   mb-10 md:mb-0">
            <h3 className="text-white font-AzoSans text-[45px] md:text-[64px] leading-[69.6px] mb-12 text-center md:text-start">
              Mint NFT
            </h3>
            <div className="flex justify-between mb-12">
              <div className="">
                <h4 className="text-white font-mont text-3xl md:text-4xl font-black leading-[39.15px] mb-[14px] ">
                  9999{" "}
                </h4>
                <p className="font-mont text-white text-[14px] md:text-base leading-[25.6px] mb-8">
                  of 10,000 minted
                </p>
                <h4 className="text-white font-mont text-3xl md:text-4xl font-black leading-[39.15px] mb-[14px]  ">
                  Max 9{" "}
                </h4>
                <p className="font-mont text-white text-[14px] md:text-base leading-[25.6px]">
                  NFTs per transaction
                </p>
              </div>
              <div>
                <h4 className="text-white font-mont text-3xl md:text-4xl font-black leading-[39.15px] mb-[14px]  ">
                  .2 ETH
                </h4>
                <p className="font-mont text-white text-[14px] md:text-base leading-[25.6px] mb-8">
                  per NFT
                </p>
                <h4 className="text-white font-mont text-3xl md:text-4xl font-black leading-[39.15px] mb-[14px] ">
                  Max 2
                </h4>
                <p className="font-mont text-white text-[14px] md:text-base leading-[25.6px]">
                  Transaction per wallet
                </p>
              </div>
            </div>
            <div className="flex gap-2 md:gap-[14px] w-full mb-7">
              <button
                className="bg-white  md:py-[30px]  md:px-[30px] rounded-[4px] w-full max-w-[85px]"
                onClick={minus}
              >
                <span className="flex justify-center">
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.62 0.536H11.42V6.656H0.62V0.536Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </button>
              <div className="bg-transparent border-[2px] border-solid border-white rounded-[4px]  py-[13px] text-white text-3xl md:text-4xl font-mont text-center leading-[39.15px] font-black ]  w-full">
                {first}
              </div>
              <button
                className="bg-white rounded-[4px] md:py-[30px] md:px-[30px] max-w-[85px] w-full"
                onClick={ADD}
              >
                <span className="flex justify-center">
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.34 12.46H13.4V18.22H6.92V12.46H0.98V6.34H6.92V0.579999H13.4V6.34H19.34V12.46Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <button className="md:text-2xl text-xl font-AzoSans text-center w-full bg-[#FDDA60] rounded-[4px] py-[18px] shadow-[0px_4px_15px_0px_#FDDA6080] border-[4px] border-solid border-transparent hover:border-black duration-500 hover:shadow-none">
              MINT NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec5;
