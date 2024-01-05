import React from "react";
import roadmapmonkey from "../assets/images/roadmap-monkey.png";
import semicircle from "../assets/images/semicircle.png";
import monkey1 from "../assets/images/roadmap-man1.png";
import mon2 from "../assets/images/road-mon1.png";
const Roadmap = () => {
  return (
    <div className="bg-[#0A0A0A]  md:pt-24 pt-10 md:pb-12 pb-0">
      <div className="max-w-[1140px] mx-auto px-3 ">
        <h2 className="text-white font-AzoSans text-[45px] md:text-[64px] text-center leading-[69.6px] md:mb-[90px] mb-5">
          Roadmap
        </h2>
        <div className="flex flex-row flex-wrap items-center -mx-3 relative">
          <div className="md:w-5/12 w-full flex justify-center md:block px-3 mb-5 md:mb-0">
            <img src={roadmapmonkey} alt="monkey" className="hidden lg:block" />
            <img src={mon2} alt="m2" className="block md:hidden" />
            <div className="relative hidden md:block">
              <img
                src={semicircle}
                alt="roadmap"
                className="md:block hidden lg:hidden "
              />
              <img
                src={monkey1}
                alt="m1"
                className="absolute block lg:hidden top-[19%]"
              />
            </div>
          </div>
          <div className="md:w-7/12 w-full px-3">
            <div
              className="flex md:absolute lg:gap-11 gap-8 left-[23%] top-[-2%] group items-center mb-10 md:mb-0 duration-300 "
              data-aos="fade-left"
              data-aos-duration="2500"
              data-aos-easing="linear"
            >
              <div className="flex items-center gap-6">
                <span className="hidden lg:block">
                  <svg
                    width="179"
                    height="12"
                    viewBox="0 0 179 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM167.667 6.00001C167.667 8.94553 170.054 11.3333 173 11.3333C175.946 11.3333 178.333 8.94553 178.333 6.00002C178.333 3.0545 175.946 0.666681 173 0.666681C170.054 0.666681 167.667 3.0545 167.667 6.00001ZM6 7L173 7.00001L173 5.00001L6 5L6 7Z"
                      fill="white"
                      className="group-hover:fill-[#FDDA60] duration-300"
                    />
                  </svg>
                </span>
                <div className="rounded-full w-[65px] h-[65px] md:w-[76px] md:h-[76px] bg-white flex justify-center items-center group-hover:bg-[#FDDA60] group-hover:shadow-[0px_4px_21px_0px_#FDDA60B2]  duration-300">
                  <p className=" font-mont text-black md:text-xl text-lg font-black leading-[21.75px]">
                    20%
                  </p>
                </div>
              </div>
              <span>
                <h5 className="text-white font-AzoSans text-lg md:text-xl leading-[21.75px] mb-2">
                  Phase 1
                </h5>
                <p className="text-white text-[14px] md:text-base font-mont max-w-[593px]">
                  Mi amet elementum, posuere tempus odio eu lacinia. Natoque
                  arcu viverra ullamcorper condimentum massa laoree
                </p>
              </span>
            </div>
            <div
              className="flex lg:gap-11 gap-8 items-center md:absolute lg:left-[34%] left-[36%] top-[19.5%] group mb-10 md:mb-0 duration-300"
              data-aos="fade-left"
              data-aos-duration="2500"
              data-aos-easing="linear"
            >
              <div className="flex items-center gap-10">
                <span className="hidden lg:block">
                  <svg
                    width="109"
                    height="12"
                    viewBox="0 0 109 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM97.6667 6.00001C97.6667 8.94553 100.054 11.3333 103 11.3333C105.946 11.3333 108.333 8.94553 108.333 6.00001C108.333 3.05449 105.946 0.666675 103 0.666675C100.054 0.666675 97.6667 3.05449 97.6667 6.00001ZM6 7L103 7.00001L103 5.00001L6 5L6 7Z"
                      fill="white"
                      className="group-hover:fill-[#FDDA60] duration-300"
                    />
                  </svg>
                </span>
                <div className="bg-white md:w-[76px] md:h-[76px] w-[65px] h-[65px] rounded-full flex justify-center items-center text-xl font-mont font-black leading-[21.75px] group-hover:bg-[#FDDA60] group-hover:shadow-[0px_4px_21px_0px_#FDDA60B2] duration-300">
                  40%
                </div>
              </div>
              <div>
                <h5 className="text-white md:text-xl text-lg font-AzoSans leading-[21.75px] mb-2">
                  Phase 2
                </h5>
                <p className="text-white md:text-base text-[14px] font-mont leading-[25.6px] max-w-[550px]">
                  Amet viverra diam netus aenean at mauris, facilisis quis. Urna
                  euismod sed ultricies arcu ullamcorper{" "}
                </p>
              </div>
            </div>
            <div
              className="flex items-center lg:gap-11 gap-8 md:absolute lg:left-[37%] left-[42%] top-[40.5%] group duration-300 mb-10 md:mb-0"
              data-aos="fade-left"
              data-aos-duration="2500"
              data-aos-easing="linear"
            >
              <div className="flex items-center gap-[54px] ">
                <span className="hidden lg:block">
                  <svg
                    width="123"
                    height="12"
                    viewBox="0 0 123 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM111.667 6C111.667 8.94552 114.054 11.3333 117 11.3333C119.946 11.3333 122.333 8.94552 122.333 6C122.333 3.05448 119.946 0.666667 117 0.666667C114.054 0.666667 111.667 3.05448 111.667 6ZM6 7H117V5H6V7Z"
                      fill="white"
                      className=" group-hover:fill-[#FDDA60] duration-300"
                    />
                  </svg>
                </span>
                <div className="md:w-[76px] md:h-[76px] h-[65px] w-[65px] bg-white rounded-full flex justify-center items-center font-mont text-xl font-black  leading-[21.75px] group-hover:bg-[#FDDA60] group-hover:shadow-[0px_4px_21px_0px_#FDDA60B2] duration-300">
                  60%
                </div>
              </div>
              <div>
                <h5 className=" font-AzoSans text-white md:text-xl text-lg leading-[21.75px] mb-2">
                  Phase 3
                </h5>
                <p className="text-white text-[14px] md:text-base font-mont leading-[25.6px] max-w-[495px]">
                  Hendrerit massa non sed sit. Lobortis in pulvinar lectus ut in
                  elit nibh faucibus mauris.{" "}
                </p>
              </div>
            </div>
            <div
              className="flex items-center group lg:gap-11 gap-8 md:absolute top-[61%] lg:left-[34%] left-[38%] duration-300 mb-10 md:mb-0"
              data-aos="fade-left"
              data-aos-duration="2500"
              data-aos-easing="linear"
            >
              <div className="flex items-center gap-10">
                <span className="hidden lg:block">
                  <svg
                    width="97"
                    height="12"
                    viewBox="0 0 97 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM85.6667 6.00001C85.6667 8.94553 88.0545 11.3333 91 11.3333C93.9455 11.3333 96.3333 8.94553 96.3333 6.00001C96.3333 3.05449 93.9455 0.666674 91 0.666674C88.0545 0.666674 85.6667 3.05449 85.6667 6.00001ZM6 7L91 7.00001L91 5.00001L6 5L6 7Z"
                      fill="white"
                      className="group-hover:fill-[#FDDA60] duration-300"
                    />
                  </svg>
                </span>
                <div className="md:w-[76px] md:h-[76px] w-[65px] h-[65px] rounded-full bg-white md:text-xl text-lg font-mont flex justify-center items-center font-black group-hover:bg-[#FDDA60] group-hover:shadow-[0px_4px_21px_0px_#FDDA60B2] leading-[21.75px] duration-300">
                  80%
                </div>
              </div>
              <div>
                <h4 className="text-white md:text-xl text-lg font-AzoSans leading-[21.75px] mb-2">
                  Phase4
                </h4>
                <p className=" font-mont md:text-base text-[14px] text-white leading-[25.6px] max-w-[550px] ">
                  Ut egestas lacus nec varius blandit volutpat, malesuada nunc,
                  nisl. Nisl mattis convallis lacus tristique.
                </p>
              </div>
            </div>
            <div
              className="flex items-center lg:gap-11 gap-8 md:absolute top-[81.5%] lg:left-[26%] left-[28%] group mb-10 md:mb-0 duration-300"
              data-aos="fade-left"
              data-aos-duration="2500"
              data-aos-easing="linear"
            >
              <div className="flex items-center gap-6">
                <span className="hidden lg:block">
                  <svg
                    width="133"
                    height="12"
                    viewBox="0 0 133 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM121.667 6.00001C121.667 8.94553 124.054 11.3333 127 11.3333C129.946 11.3333 132.333 8.94553 132.333 6.00001C132.333 3.05449 129.946 0.666677 127 0.666677C124.054 0.666677 121.667 3.05449 121.667 6.00001ZM6 7L127 7.00001L127 5.00001L6 5L6 7Z"
                      fill="white"
                      className="group-hover:fill-[#FDDA60] duration-300"
                    />
                  </svg>
                </span>
                <div className="md:w-[76px] md:h-[76px] w-[65px] h-[65px] rounded-full bg-white flex justify-center items-center md:text-xl text-[lg] font-mont font-black leading-[21.75px] group-hover:shadow-[0px_4px_21px_0px_#FDDA60B2] group-hover:bg-[#FDDA60]">
                  100%
                </div>
              </div>
              <div>
                <h4 className="text-white md:text-xl text-lg font-AzoSans leading-[21.75px] mb-2">
                  Phase 5
                </h4>
                <p className="text-white md:text-base text-[14px] font-mont max-w-[593px] leading-[25.6px]">
                  Faucibus congue risus nisl dictum. A, viverra malesuada nunc
                  varius. Ut dignissim mauris eu sed nisl neque.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:mt-16 mt-0">
          <button className=" font-AzoSans md:text-xl text-lg leading-[21.75px] bg-[#FDDA60] py-4 px-6 rounded-[4px] shadow-[0px_4px_24px_0px_#FDDA60CC]">
            {" "}
            Read Our Whitepaper
          </button>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
