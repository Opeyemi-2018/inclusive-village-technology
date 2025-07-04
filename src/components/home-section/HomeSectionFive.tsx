'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import LinkWithArrow from '../contactButton';

type ProcessStep = {
  number: number;
  name: string;
  description: string;
};

const steps: ProcessStep[] = [
  {
    number: 1,
    name: 'Discovery & Research',
    description: 'Understanding your goals, users, and challenges.',
  },
  {
    number: 2,
    name: 'Design & Architecture',
    description: 'Crafting intuitive user experiences and robust system blueprints.',
  },
  {
    number: 3,
    name: 'Development & Integration',
    description: 'Turning concepts into scalable, efficient software solutions.',
  },
  {
    number: 4,
    name: 'Deployment & Support',
    description: 'Launching, monitoring, and supporting your digital ecosystem.',
  },
];

const HomeSectionFive = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 6,
        ease: 'linear',
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="lg:px-10 px-3 py-20">
      {/* 🔁 Scrolling “Our Services” */}
      <div className="overflow-hidden w-[200px] h-6 relative mb-6 mx-auto">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap w-max"
          style={{ willChange: 'transform' }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-3 pr-10">
              <p className="text-lg font-semibold">Our Services</p>
              <span className="w-4 h-4 bg-orange-600 rounded-full inline-block"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Title */}
      <div className="flex flex-col items-center md:gap-4 gap-7 lg:mb-36 mb-16">
        <h1 className="lg:text-7xl text-5xl uppercase text-center font-unbounded font-bold">
          OUR PROCESS
        </h1>
      </div>

      {/* Steps */}
      <div className="flex flex-col items-center gap-10 pb-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-gray-200 text-black rounded-2xl p-7 flex flex-col md:gap-8 gap-6 max-w-md w-full"
          >
            <h2 className="text-7xl mb-4 text-orange-600 font-bold font-unbounded">
              {step.number}
            </h2>
            <h3 className="text-3xl md:text-4xl uppercase font-bold font-unbounded leading-tight mb-2">
              {step.name}
            </h3>
            <p className="text-[22px] font-semibold text-gray-500 mb-10">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="bg-orange-600 text-black rounded-2xl p-7 flex flex-col gap-16 max-w-md mx-auto w-full">
        <h2 className="text-4xl font-bold font-unbounded leading-tight mb-4">
          GOT A <br />
          PROJECT IN <br />
          MIND?
        </h2>
        <p className="text-[22px] font-semibold mb-10">
          Book a call to learn more about how we can solve your design needs.
        </p>

        <div className="flex items-center justify-end gap-2 text-sm font-semibold group">
          <LinkWithArrow
            href="/contact"
            label="Let’s Talk"
            underlineColor="bg-black"
            iconColor="text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSectionFive;
