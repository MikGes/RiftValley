// components/SponsorSlider.tsx
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const sponsors = [
  { id: 1, name: "Sponsor 1", imageUrl: "/Rift.png" },
  { id: 2, name: "Sponsor 2", imageUrl: "/Rift.png" },
  { id: 3, name: "Sponsor 3", imageUrl: "/Rift.png" },
  { id: 4, name: "Sponsor 4", imageUrl: "/Rift.png" },
  { id: 5, name: "Sponsor 5", imageUrl: "/Rift.png" },
  { id: 6, name: "Sponsor 6", imageUrl: "/Rift.png" },
  { id: 7, name: "Sponsor 7", imageUrl: "/Rift.png" },
];

const SponsorSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrameId: number;
    let scrollAmount = 0;

    const moveSlider = () => {
      if (slider) {
        slider.scrollLeft += 1;
        scrollAmount += 1;

        if (scrollAmount >= slider.clientWidth) {
          scrollAmount = 0;
          slider.appendChild(slider.firstElementChild as Node);
          slider.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(moveSlider);
    };

    animationFrameId = requestAnimationFrame(moveSlider);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className=" flex-row flex justify-center">
      
      <div className="overflow-hidden relative w-[70%]">
      <div
        className="flex space-x-4 transition-transform duration-1000"
        ref={sliderRef}
      >
        {sponsors.concat(sponsors).map((sponsor, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-max h-max p-4  rounded-xl shadow-lg dark:border-white border-2"
          >
            <Image
              src={sponsor.imageUrl}
              alt={sponsor.name}
              width={100}
              height={100}
              className="object-contain w-full h-full"
            />
            <p className="text-center mt-2 text-sm font-semibold">
              {sponsor.name}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default SponsorSlider;
