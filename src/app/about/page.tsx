import React from 'react'
import Image from "next/image";
import {FaDotCircle } from 'react-icons/fa'
import Values from '../interfaces/Values';
import Members from '../interfaces/Members';
import MySwiper from '../interfaces/PartnersSection';

export default function About(){
    return<>
    <h2 className="text-center text-2xl font-bold mb-8 mt-6">ABOUT RIFT VALLEY CHILDREN AND WOMEN DEVELOPMENT ORGANIZATION</h2>

    <div className='md:grid-cols-2 grid grid-cols-1 gap-8 px-4 items-center'>
        <p> RCWDO aspires for a poverty free and thriving just society leaving no one behind. RCWDO works for robust and resilient community to ensure improved and sustainable livelihood whereby the rights of the poor and vulnerable groups of the societies are promoted and protected through their proactive engagement as owner & change agent. In line with its mission, RCWDO works to strategically address the critical and interlocking problems of the soecity such as pverty, igonrance, illness and inequalities for just society. Accordinly it has organizational goals of: Ensure improved livelihoods & resilience capacity of the poor and vulnerable people through inclusive, climate smart, age & gender sensitive and sustainable innovative solutions. Enhance and advocate for inclusive and quality education and skills development of children, women, youth, and other vulnerable groups to improve educational performance and sustainable employment creation. </p>
        <div className="relative w-full h-[480px] "> {/* Container with relative positioning */}
        <Image
          src="/HomeImage.png" // path to the image in the public folder
          alt="Example Image"
          layout="fill" // To fill the container
          objectFit="cover" // To ensure the image covers the container
          className="rounded" // Optional: add any additional styles
        />
      </div>
    </div>
    <h2 className="text-center text-2xl font-bold mb-8 mt-10">ORGANIZATIONAL GOALS/ OVERALL ORGANIZATIONAL OBJECTIVES
    </h2>
   <div className='w-full flex flex-row justify-center'>
   <div className='grid grid-cols-1 gap-14 w-[80%] md:grid-cols-2 p-4'>
        <div className='flex flex-row gap-4 items-center'>
        <div className='bg-cyan-400 animate-pulse rounded-full h-4 w-20'/>
        <p>To ensure improved livelihoods & resilience capacity of the poor and vulnerable people through inclusive, climate smart, age & gender sensitive and sustainable innovative solutions.</p>
        </div>
        <div className='flex flex-row gap-4 items-center'>
        <div className='bg-cyan-400 animate-pulse rounded-full h-4 w-20'/>
        <p>To enhance and advocate for inclusive and quality education and skills development of children, women, youth, and other vulnerable groups to improve educational performance and sustainable employment creation.</p>
        </div>
        <div className='flex flex-row gap-4 items-center'>
        <div className='bg-cyan-400 animate-pulse rounded-full h-4 w-20'/>
        <p>To amplify the voices and protection of the rights of people particularly the most vulnerable groups of the society to end inequalities and ensure empowerment through access to inclusive quality basic services and promotion of good governance.</p>
        </div>
        <div className='flex flex-row gap-4 items-center'>
        <div className='bg-cyan-400 animate-pulse rounded-full h-4 w-20'/>
        <p>To promote provision of safe, inclusive, and responsive lifesaving humanitarian assistance for victims of manmade crisis and natural disasters through proactive engagement & leadership of affected people and vulnerable groups by strengthening the resilience for recovery.</p>
        </div>
    </div>
   </div>
   <Values/>
  
   <Members/>
   <MySwiper/>
    </>
}