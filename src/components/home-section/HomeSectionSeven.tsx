'use client';

import LinkWithArrow from "../contactButton";

const HomeSectionSeven = () => {
  return (
    <div className="relative bg-white">
      <div
        className="relative bg-cover bg-center lg:pt-10 pt-2 px-4 sm:px-6 lg:px-8 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
        style={{
          backgroundImage: "url('/hero-men.jpg')",
          backgroundBlendMode: 'lighten',
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // adds a white overlay
          filter: 'grayscale(60%)',
          
          borderRadius: "20px",
        }}
      >
        {/* Gradient Fade Into White */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-white pointer-events-none" />

        <div className="max-w-2xl lg:space-y-10 space-y-5 text-black">
          <h2 className="text-3xl md:text-7xl font-unbounded font-bold mb-6">MEET OUR <br /> TEAM</h2>
          <p className="text-[22px]">
            A diverse group of creators, strategists, and programmers, bound by a mutual passion for crafting impactful digital engagements. ●
          </p>
          <div>
            <LinkWithArrow
              href="/contact"
              label="get in touch"
              underlineColor="bg-black"
              iconColor="text-orange-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionSeven;
