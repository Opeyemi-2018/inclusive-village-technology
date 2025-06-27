'use client';

import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
type ProcessStep = {
  number: number;
  name: string;
  description: string;
};

const steps: ProcessStep[] = [
  {
    number: 1,
    name: 'Strategy & Analysis',
    description: 'We start by understanding your goals, audience, and business to craft the perfect plan.',
  },
  {
    number: 2,
    name: 'Design & Development',
    description: 'Our team creates beautiful interfaces and builds smooth digital experiences.',
  },
  {
    number: 3,
    name: 'Launch & Iterate',
    description: 'We deploy your solution and optimize based on real-world feedback.',
  },
];

const HomeSectionFive = () => {
  return (
    <div className="lg:px-10 px-3 py-20 ">
      <div className="flex flex-col  lg:items-center gap-4 lg:mb-20 mb-16">
        <div className="flex items-center gap-3">
          <p className="text-lg font-semibold">Our Services</p>
          <span className="w-5 h-5 bg-orange-600 rounded-full inline-block"></span>
        </div>
        <h1 className=" lg:text-7xl text-5xl capitalize font-bold max-w-2xl">
          OUR PROCESS

        </h1>
      </div>

      <div className="flex flex-col items-center gap-10 pb-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-gray-200 text-black rounded-2xl px-10 py-10 flex flex-col gap-16 max-w-md w-full shadow-md"
          >
            <h2 className="text-7xl font-bold mb-4 text-orange-600">{step.number}</h2>

            <h3 className="text-3xl font-extrabold leading-tight mb-2">{step.name}</h3>


            <p className="text-lg mb-10">{step.description}</p>

          </div>
        ))}
      </div>

      
      <div className="bg-orange-600 text-black rounded-2xl  px-10 py-10 flex flex-col gap-16 max-w-md mx-auto w-full shadow-md">
        <h2 className="text-4xl font-extrabold leading-tight mb-4">
          GOT A <br />
          PROJECT IN <br />
          MIND?
        </h2>
        <p className="text-lg mb-10">
          Book a call to learn more about how we can solve your design needs.
        </p>

        <button className="flex items-center justify-end gap-2 text-sm font-semibold group">
          <span className="relative after:block after:absolute after:w-full after:h-[1px] after:bg-black after:bottom-[-2px] after:left-0">
            SCHEDULE A CALL
          </span>
          <FaArrowUpRightFromSquare size={14} />
        </button>
      </div>
    </div>
  );
};

export default HomeSectionFive;
