import React from "react";
import Image from "next/image";
const services = () => {
  return (
    <div className="relative max-w-6xl px-5 m-auto mt-16 md:px-0">
      <div className="flex flex-col space-y-5">
        <span className="text-3xl font-black text-white md:text-5xl">
          Our Services
        </span>
        <span className="text-lg font-thin md:text-2xl md:pr-36 text-white/70">
          Communicating at scale while being 100% relevant to each and every
          individual is still impossible. We have a unique approach and most
          importantly the right team to get you the results you need.
        </span>
      </div>
      <div className="flex flex-col mt-16 space-y-10">
        {/*Item*/}
        <div className="flex flex-col items-center justify-between space-y-5 md:space-y-0 md:flex-row">
          <div className="flex flex-col max-w-xl space-y-5">
            <span className="text-lg text-white md:text-2xl">
              Creative Services
            </span>
            <span className="text-sm font-thin md:text-md text-white/70">
              Pastilla’s comprehensive approach leverages data and creative
              storytelling. Crafting a targeted and insightful plan that
              resonates with your consumers and yields results.
            </span>
          </div>
          <div>
            <Image
              src="/images/abstrac-rainbown.png"
              width={486}
              height={471}
            />
          </div>
        </div>

        {/*Item*/}
        <div className="flex flex-col items-center justify-between space-y-5 md:flex-row-reverse">
          <div className="flex flex-col max-w-xl space-y-5">
            <span className="text-lg text-white md:text-2xl ">
              Marketing Services
            </span>
            <span className="text-sm font-thin md:text-md text-white/70">
              In today’s changing world, marketing is as much an art form as it
              is a skill. We take our time, understand your brand, communicate
              it and optimize for your key objectives across an ever increasing
              number of channels.
            </span>
          </div>
          <div>
            <Image src="/images/marketing-pc.png" width={486} height={471} />
          </div>
        </div>

        {/*Item*/}
        <div className="flex flex-col items-center justify-between space-y-5 md:flex-row">
          <div className="flex flex-col max-w-xl space-y-5 ">
            <span className="text-lg text-white md:text-2xl ">
              Development Services
            </span>
            <span className="text-sm font-thin md:text-md text-white/70">
              When it comes to high-end development we don’t forget about the
              basics. Delivering on time, on budget, and per scope. It’s what
              we’ve done for over a decade.
            </span>
          </div>
          <div>
            <Image src="/images/programmer.png" width={486} height={471} />
          </div>
        </div>
      </div>
      <img
        className="absolute right-0 w-12 md:w-16 -top-5 "
        src="/icons/twice-round.svg"
        alt=""
      />
      <img
        className="absolute w-12 md:w-20 left-2 -bottom-10 md:bottom-0 md:left-0"
        src="/icons/stroke.svg"
        alt=""
      />
    </div>
  );
};

export default services;
