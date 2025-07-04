"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type IntegrationItem = {
  title: string;
  description: string;
  image?: string;
  imageOne?: string;
  imageTwo?: string;
  imageThree?: string;
};

const data: IntegrationItem[] = [
  {
    title: "3rd Party Service Integrations",
    description:
      "Integrate with NIBSS, Interswitch, MPGS, Cybersource, Mastercard, Mobile Money providers, USSD frameworks, and more.",
    imageOne: "/3d.jpg",
    imageTwo: "/3d-2.jpg",
    imageThree: "/3d-3.jpg",
  },
  {
    title: "E-Channels Integrations",
    description:
      "Power your ATMs, POS, web channels, mobile banking apps, and USSD with unified connectivity.",
    image: "/integration.jpg",
  },
];

const Integration = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.from(ref, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: index * 0.1,
        });
      }
    });
  }, []);

  return (
    <div className="lg:px-10 px-3 pt-36 pb-20 text-[#0b0b0b]">
      <div className="space-y-4">
        <h1 className="lg:text-[40px] font-bold uppercase text-3xl font-unbounded">
          Integration Services
        </h1>
        <p>
          We connect your systems to the services that matter — ensuring seamless operations and customer experiences.
        </p>
      </div>

      <div className="space-y-36 pt-28 max-w-4xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) sectionRefs.current[index] = el;
            }}
            className={`flex flex-col-reverse ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } lg:items-center gap-10`}
          >
           
            <div className="lg:w-1/2 w-full space-y-4 text-left">
              <div>
                <h1 className="lg:text-[27px] text-2xl font-bold uppercase font-unbounded">
                  {item.title}
                </h1>
                <div className="h-1 w-16 bg-orange-600 mt-2 rounded"></div>
              </div>
              <p className="text-[#0b0b0b] font-inter text-[18px]">
                {item.description}
              </p>
            </div>

           
            <div className="lg:w-1/2 w-full lg:inline hidden">
              {index === 0 ? (
                <div className="grid grid-cols-3 gap-3 h-[300px]">
                  <div className="flex flex-col justify-between gap-3 col-span-1">
                    <Image
                      src={item.imageOne ?? ""}
                      alt={`${item.title} 1`}
                      width={500}
                      height={400}
                      className="w-full h-[145px] object-cover rounded-lg"
                    />
                    <Image
                      src={item.imageTwo ?? ""}
                      alt={`${item.title} 2`}
                      width={500}
                      height={400}
                      className="w-full h-[145px] object-cover rounded-lg"
                    />
                  </div>

                  {/* Right Column - single full-height image */}
                  <div className="col-span-2">
                    <Image
                      src={item.imageThree ?? ""}
                      alt={`${item.title} 3`}
                      width={500}
                      height={400}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              ) : (
                <div className="overflow-hidden rounded-lg group">
                  <Image
                    src={item.image ?? ""}
                    alt={item.title}
                    width={500}
                    height={400}
                    className="w-full h-[250px] lg:h-[200px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integration;
