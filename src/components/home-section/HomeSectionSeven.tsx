'use client';

import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

const HomeSectionSeven = () => {
  return (
    <div className="relative bg-white">
      <div
        className="relative bg-cover bg-center py-40 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: "url('/hero-men.jpg')",
          backgroundBlendMode: 'lighten',
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // adds a white overlay
          filter: 'grayscale(60%)',
        }}
      >
        {/* Gradient Fade Into White */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-white pointer-events-none" />

        <div className="max-w-2xl space-y-5">
          <h2 className="text-3xl md:text-7xl font-semibold mb-6">MEET OUR TEAM</h2>
          <p className="text-lg  ">
            A diverse group of creators, strategists, and programmers, bound by a mutual passion for crafting impactful digital engagements. ●
          </p>
          <div>
            <Link
              href={'/contact'}
              className="uppercase flex flex-col items-start gap-1 font-semibold group"
            >
              <div className="flex items-center gap-3">
                get in touch
                <MdOutlineArrowOutward className="text-orange-600" size={30} />
              </div>
              <span className="w-10 h-[2px] bg-black"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionSeven;
