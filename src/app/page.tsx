import Image from "next/image";
import SideLink from "./interfaces/SideLink"
import Stats from "./interfaces/HorizontalInfo";
import ProgramAreas from "./interfaces/ProgramAreas";
import MissionVis from "./interfaces/MissionVis";
import News from "./interfaces/News";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
// import PartnerLogos from "./interfaces/PartnersSection";
export default function Home() {
  const data = [
    {
      name:"Visiting Arsi",
      description:"Visiting the wonders of Arsi with our coleques "
    },
    {
      name:"Visiting Arsi",
      description:"Visiting the wonders of Arsi with our coleques"
    },
    {
      name:"Visiting Arsi",
      description:"Visiting the wonders of Arsi with our coleques"
    },
    {
      name:"Visiting Arsi",
      description:"Visiting the wonders of Arsi with our coleques"
    },
    {
      name:"Visiting Arsi",
      description:"Visiting the wonders of Arsi with our coleques"
    },
    {
      name:"Visiting Arsi",
      description:"Visiting the wonders of Arsi with our coleques"
    }
  ]
  return (
    <>
        <div className="mt-36 absolute z-10"><SideLink/></div>
      <div className="relative w-full h-[480px] "> {/* Container with relative positioning */}
        <Image
          src="/HomeImage.png" // path to the image in the public folder
          alt="Example Image"
          layout="fill" // To fill the container
          objectFit="cover" // To ensure the image covers the container
          className="rounded" // Optional: add any additional styles
        />
      </div>
      <Stats/>
      <ProgramAreas/>
      <MissionVis/>
      <h2 className="text-center text-2xl font-bold mb-8 mt-6">RECENT NEWS</h2>
     <div className="flex flex-row justify-center w-full ">
     <Carousel className="w-[60%] h-max">
      <CarouselContent >
        {data.map((news, index) => (
          <CarouselItem key={index}>
            <News params={{ name: news.name, description: news.description }}/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
     </div>
 
    </>
  );
}
