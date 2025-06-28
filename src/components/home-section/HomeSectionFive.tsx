'use client';

// import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import LinkWithArrow from '../contactButton';
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
      <div className="flex flex-col  items-center gap-4 lg:mb-36 mb-16">
        <div className="flex items-center gap-3">
          <p className="text-lg font-semibold">Our Services</p>
          <span className="w-5 h-5 bg-orange-600 rounded-full inline-block"></span>
        </div>
        <h1 className=" lg:text-8xl text-5xl capitalize font-bold ">
          OUR PROCESS

        </h1>
      </div>

      <div className="flex flex-col items-center gap-10 pb-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-gray-200 text-black rounded-2xl p-7 flex flex-col gap-16 max-w-md w-full shadow-md"
          >
            <h2 className="text-7xl mb-4 text-orange-600 font-extrabold">{step.number}</h2>

            <h3 className="text-3xl md:text-4xl uppercase font-extrabold leading-tight mb-2">{step.name}</h3>


            <p className="text-[22px] font-semibold text-gray-500 mb-10">{step.description}</p>

          </div>
        ))}
      </div>


      <div className="bg-orange-600 text-black rounded-2xl  p-7 flex flex-col gap-16 max-w-md mx-auto w-full shadow-md">
        <h2 className="text-4xl font-extrabold leading-tight mb-4">
          GOT A <br />
          PROJECT IN <br />
          MIND?
        </h2>
        <p className="text-[22px] font-semibold  mb-10">
          Book a call to learn more about how we can solve your design needs.
        </p>

        <div className="flex items-center justify-end gap-2 text-sm font-semibold group">
          <div>
            <LinkWithArrow
              href="/contact"
              label="get in touch"
              underlineColor="bg-black"
              iconColor="text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionFive;
