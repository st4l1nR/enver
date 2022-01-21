import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X as Close } from "react-feather";

export default function Home() {
  const [menu, setMenu] = useState(false);
  return (
    <main>
      <div className="max-w-6xl px-5 mx-auto md:px-0">
        {/*Section 1*/}
        <div className="flex flex-col md:flex-row ">
          <div className="flex flex-col w-full space-y-8 text-left text-white md:w-1/3 md:mt-32 ">
            <span className="text-5xl font-black leading-relaxed md:text-7xl md:loading-normal ">
              Build Your Awesome Platform
            </span>
            <span className="text-lg font-thin leading-relaxed text-white/70">
              Enver studio is a digital studio that offers several services such
              as UI/UX Design to developers, we will provide the best service
              for those of you who use our services.
            </span>
            <Link href="/services">
              <button className="flex items-center justify-center h-12 space-x-2 font-bold text-white transition-shadow rounded-sm w-52 bg-primary filter hover:brightness-125 md:mx-0 hover:shadow-md hover:shadow-primary/50">
                <span>Our Services</span>n
                <img
                  className="w-5 h-5"
                  src="/icons/arrow-right-up.svg"
                  alt=""
                />
              </button>
            </Link>
          </div>
          <div className="relative w-full md:w-2/3">
            <Image
              src="/images/stroke-man.png"
              width={783}
              height={713}
            ></Image>
          </div>
        </div>

        {/*Section 2*/}
        <div className="mt-28 ">
          <div className="flex flex-col w-full space-y-3 md:space-y-0 md:space-x-5 md:flex-row">
            <span className="text-3xl font-black leading-relaxed text-white align-middle md:text-5xl md:basis-1/2">
              Why Enver Is The Best Choice?
            </span>
            <span className="text-lg font-thin leading-relaxed text-left text-white/70 md:basis-1/2">
              Watch this one minute video so you understand why you should use
              our services!
            </span>
          </div>
          <video
            className="w-full mt-10"
            src="/videos/metting.mp4"
            controls
          ></video>
        </div>

        {/*Section 3*/}
        <div className="relative max-w-6xl mx-auto mt-28">
          <div className="flex flex-col pb-20 space-y-10">
            <span className="max-w-xl mx-auto text-3xl font-black leading-relaxed text-center text-white md:text-5xl">
              The Service We Provide For You
            </span>
            <div className="flex flex-col max-w-4xl grid-cols-3 grid-rows-2 px-10 mx-auto space-y-10 md:space-y-0 md:grid gap-x-10 gap-y-20 md:px-0">
              <div className="flex flex-col items-center space-y-4 text-center text-white">
                <img className="w-12 h-12" src="/icons/code-blue.svg" alt="" />
                <span className="text-xl text-bold">Development</span>
                <span className="font-thin text-md text-white/70">
                  Create a platform with the best and coolest quality from us.
                </span>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center text-white">
                <img className="w-12 h-12" src="/icons/library.svg" alt="" />
                <span className="text-xl text-bold">UI/UX Designer</span>
                <span className="font-thin text-md text-white/70">
                  We provide UI/UX Design services, and of course with the best
                  quality
                </span>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center text-white">
                <img
                  className="w-12 h-12"
                  src="/icons/code-yellow.svg"
                  alt=""
                />
                <span className="text-xl text-bold">Graphik Designer</span>
                <span className="font-thin text-md text-white/70">
                  We provide Graphic Design services, with the best designers
                </span>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center text-white">
                <img className="w-12 h-12" src="/icons/direction.svg" alt="" />
                <span className="text-xl text-bold">Motion Graphik</span>
                <span className="font-thin text-md text-white/70">
                  Create a platform with the best and coolest quality from us.
                </span>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center text-white">
                <img className="w-12 h-12" src="/icons/camera.svg" alt="" />
                <span className="text-xl text-bold">Photography</span>
                <span className="font-thin text-md text-white/70">
                  We provide Photography services, and of course with the best
                  quality
                </span>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center text-white">
                <img className="w-12 h-12" src="/icons/video.svg" alt="" />
                <span className="text-xl text-bold">Videography</span>
                <span className="font-thin text-md text-white/70">
                  Create a platform with the best and coolest quality from us.
                </span>
              </div>
            </div>
          </div>
          <img
            className="absolute left-0 w-12 -top-16 md:top-0 md:w-24 "
            src="/icons/twice-triangle.svg"
            alt=""
          />
          <Close className="absolute hidden text-white transform md:block rotate-12 top-6 right-10" />
          <Close className="absolute text-white transform rotate-90 bottom-6 left-10" />
        </div>

        {/*Section 4*/}
        <div className="relative mt-28">
          <div className="flex flex-col space-y-10 felx-col">
            <span className="text-3xl font-black text-white md:text-5xl">
              Our Awesome Portfolio
            </span>
            <div className="flex flex-col pb-12 space-y-6 md:flex-row md:space-y-0 md:space-x-6 md:px-6 md:pb-0 ">
              <div className="md:pt-10">
                <Image src="/images/squid-game.png" width={336} height={253} />
              </div>
              <div className="md:pt-24">
                <Image
                  src="/images/furniture-app.png"
                  width={336}
                  height={253}
                />
              </div>
              <div className="md:pt-36">
                <Image src="/images/dig-teck.png" width={336} height={253} />
              </div>
            </div>
          </div>
          <img
            className="absolute top-0 right-0 w-16"
            src="/icons/twice-round.svg"
            alt=""
          />
          <img
            className="absolute bottom-0 left-0 w-16"
            src="/icons/stroke.svg"
            alt=""
          />
        </div>
      </div>

      {/*Section 4*/}
      <div className="relative px-5 mt-24 h-96 bg-metal">
        <div className="flex flex-col justify-center w-full h-full max-w-6xl mx-auto space-y-10 md:space-y-0 md:items-center md:space-x-6 md:flex-row ">
          <div className="md:px-16 md:basis-2/3 ">
            <span className="text-3xl font-black leading-relaxed text-white md:text-4xl">
              Contact us for the service you want to use
            </span>
          </div>

          <div className="flex justify-start md:items-center md:justify-center md:basis-1/3">
            <Link href="/contact-us">
              <button className="w-40 h-12 space-x-2 font-bold text-center text-white align-middle transition-shadow rounded-sm bg-primary filter hover:brightness-125 md:mx-0 hover:shadow-md hover:shadow-primary/50">
                Contact us
              </button>
            </Link>
          </div>
        </div>
        <Close className="absolute text-white transform rotate-45 top-10 right-10" />
        <img
          className="absolute bottom-0 left-0 w-16 md:left-36"
          src="/icons/twice-round.svg"
          alt=""
        />
      </div>
    </main>
  );
}
