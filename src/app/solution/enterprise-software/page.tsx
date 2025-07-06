"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const EnterpriseSoftware = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const marquee = marqueeRef.current;

            gsap.to(marquee, {
                xPercent: -50,
                duration: 6,
                ease: "linear",
                repeat: -1,
            });
        }, marqueeRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative bg-center bg-cover bg-no-repeat flex flex-col gap-3 items-center justify-center text-center h-[80vh] md:h-screen "
            style={{
                backgroundImage: `url('/agency-1.jpg')`,
                backgroundBlendMode: 'overlay',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
            }}
        >
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-white"></div>


            <div className="flex items-center gap-2.5 z-10">
                <p className="text-lg capitalize font-medium ">  Enterprise Software Development</p>
                <span className="w-2 h-2 bg-orange-600 rounded-full inline-block"></span>
            </div>
            <h1 className="md:text-6xl max-w-6xl mx-auto text-4xl font-bold font-unbounded uppercase  z-10 leading-snug">
                Enterprise Software Development

            </h1>
        </div>

    );
};

export default EnterpriseSoftware;
