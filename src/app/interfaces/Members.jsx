import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
  
  
export default function Members(){
    return <>
       <h2 className="text-center text-2xl font-bold mb-8">Board Members</h2>
    <div className='flex flex-row justify-center'>
    <Carousel
     className="w-[60%] h-max flex flex-row justify-center"
 
>
  <CarouselContent>
    <CarouselItem >
      <div className='grid grid-cols-1 md:grid-cols-2  items-center gap-4'>
     <div >
     <Image
          src="/HomeImage.png" // path to the image in the public folder
          alt="Example Image"
          height={800}
          width={350}
          objectFit="cover" // To ensure the image covers the container
          className="rounded" // Optional: add any additional styles
        />
     </div>
    <div className='bg-red-500'>
    <p className='text-lg text-cyan-400'>Berhanu Geleto</p>
    <p className='text-sm'>Founder, Executive Director</p>
    <div>
          
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl hover:text-gray-300" color='#4267B2' />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-gray-300" color='#1DA1F2' />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-gray-300" color='#C13584'/>
            </a>
          
          </div>
        </div>
    </div>

      </div>
    </CarouselItem>
    <CarouselItem  >
      <div className='grid grid-cols-1 md:grid-cols-2  items-center gap-4'>
     <div >
     <Image
          src="/HomeImage.png" // path to the image in the public folder
          alt="Example Image"
          height={800}
          width={350}
          objectFit="cover" // To ensure the image covers the container
          className="rounded" // Optional: add any additional styles
        />
     </div>
    <div className='bg-red-500'>
    <p className='text-lg text-cyan-400'>Berhanu Geleto</p>
    <p className='text-sm'>Founder, Executive Director</p>
    <div>
          
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl hover:text-gray-300" color='#4267B2' />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-gray-300" color='#1DA1F2' />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-gray-300" color='#C13584'/>
            </a>
          
          </div>
        </div>
    </div>

      </div>
    </CarouselItem>
    <CarouselItem  >
      <div className='grid grid-cols-1 md:grid-cols-2  items-center gap-4'>
     <div >
     <Image
          src="/HomeImage.png" // path to the image in the public folder
          alt="Example Image"
          height={800}
          width={350}
          objectFit="cover" // To ensure the image covers the container
          className="rounded" // Optional: add any additional styles
        />
     </div>
    <div className='bg-red-500'>
    <p className='text-lg text-cyan-400'>Berhanu Geleto</p>
    <p className='text-sm'>Founder, Executive Director</p>
    <div>
          
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl hover:text-gray-300" color='#4267B2' />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-gray-300" color='#1DA1F2' />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-gray-300" color='#C13584'/>
            </a>
          
          </div>
        </div>
    </div>

      </div>
    </CarouselItem >
    <CarouselItem  >
      <div className='grid grid-cols-1 md:grid-cols-2  items-center gap-4'>
     <div >
     <Image
          src="/HomeImage.png" // path to the image in the public folder
          alt="Example Image"
          height={800}
          width={350}
          objectFit="cover" // To ensure the image covers the container
          className="rounded" // Optional: add any additional styles
        />
     </div>
    <div className='bg-red-500'>
    <p className='text-lg text-cyan-400'>Berhanu Geleto</p>
    <p className='text-sm'>Founder, Executive Director</p>
    <div>
          
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl hover:text-gray-300" color='#4267B2' />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-gray-300" color='#1DA1F2' />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-gray-300" color='#C13584'/>
            </a>
          
          </div>
        </div>
    </div>

      </div>
    </CarouselItem>
   
    
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
    </div>
</>
}