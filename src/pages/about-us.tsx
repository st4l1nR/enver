import React from "react";
import Image from "next/image";
import { X as Close } from "react-feather";

const aboutUs = () => {
  return (
    <div className="relative max-w-6xl px-5 m-auto mt-16 md:px-0">
      <div className="flex flex-col space-y-5">
        <span className="text-3xl font-black text-white md:text-5xl">
          About Enver
        </span>
        <span className="text-lg font-thin md:text-2xl md:pr-36 text-white/70">
          Enver is a creative-focussed digital marketing agency that helps
          premium businesses amplify their brand.
        </span>
      </div>
      <div className="flex flex-col mt-16 space-y-10">
        {/*Item*/}
        <div className="flex flex-col items-center justify-between space-y-5 md:space-y-0 md:flex-row">
          <div className="max-w-xl ">
            <span className="text-sm font-bold text-white md:text-md">
              Enver was originally founded in 2016{" "}
            </span>
            <span className="text-sm font-thin md:text-md text-white/70">
              (as GreanTea Productions) by Olly Fawcett as a content production
              agency, in Richmond. We produced short films, commercials and put
              on a number of theatre shows around the UK, including a sell out
              show at the Edinburgh Fringe Festival. Fast forward to late 2019,
              Jamie Vaughan entered the picture and the agency was rebranded and
              repositioned as 303, to better align with what it had become.
            </span>
          </div>

          <div>
            <Image src="/images/programmer-team.png" width={486} height={471} />
          </div>
        </div>

        {/*Item*/}
        <div className="flex flex-col items-center justify-between space-y-5 md:space-y-0 md:flex-row-reverse">
          <div className="max-w-xl ">
            <span className="text-sm font-bold text-white md:text-md">
              Creativity is still at the core of everything that we do.{" "}
            </span>
            <span className="text-sm font-thin md:text-md text-white/70">
              with an in house team of videographers, photographers, graphic
              designers and motion graphics experts. However, our creative team
              is now partnered by a market-leading group of performance
              marketing, brand building and e-commerce specialists who take our
              creative digital media and amplify it across organic social media,
              paid social media, PPC Google advertising and programmatic display
              channels.
            </span>
          </div>

          <div>
            <Image src="/images/artist-dog.png" width={486} height={471} />
          </div>
        </div>

        {/*Item*/}
        <div className="flex flex-col items-center justify-between space-y-5 md:space-y-0 md:flex-row">
          <div className="max-w-xl ">
            <span className="text-sm font-bold text-white md:text-md">
              Enver partners with brands in the premium and luxury sectors.{" "}
            </span>
            <span className="text-sm font-thin md:text-md text-white/70">
              Our team has extensive knowledge and experience in targeting
              aspirational & affluent audiences, which has led to
              business-transformational growth in revenue, brand awareness and
              traffic for our clients. We offer a unique service to our clients;
              by creating stunning, premium digital content and distributing it
              expertly to audiences that drive significant growth for premium
              and luxury brands, all under one roof.
            </span>
          </div>

          <div>
            <Image
              src="/images/man-reading-book.png"
              width={486}
              height={471}
            />
          </div>
        </div>
      </div>
      <img
        className="absolute w-10 -top-5 md:top-0 right-5 md:right-0 md:w-20"
        src="/icons/twice-triangle.svg"
        alt=""
      />
      <Close className="absolute bottom-0 hidden text-white md:block -left-10 transofrm rotate-12" />
    </div>
  );
};

export default aboutUs;
