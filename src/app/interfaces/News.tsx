import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaCalendar, FaLocationArrow } from "react-icons/fa";
import { ScrollArea } from "@/components/ui/scroll-area"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
export default function News({params}:{params:{name:String,description:String}}){
    return<>
      <div className="mt-6">
    
      <div className="flex flex-row shadow-xl p-2 dark:border-2 dark:border-white rounded-xl sm:flex-col md:flex-row">
      <div className="relative w-full flex-col justify-center"> {/* Container with relative positioning */}
        <Image
          src="/HomeImage.png" // path to the image in the public folder
          alt="Example Image"
          width={400}
          height={200}
         
          objectFit="cover" // To ensure the image covers the container
           // Optional: add any additional styles
        />
      </div>
      <div className="w-full flex flex-col gap-4 sm:gap-1">
      <p className="text-cyan-400 pl-2 font-bold mt-12">{params.name}</p>
      <p className="dark:text-slate-300">{params.description}</p>
      <div className="flex flex-row justify-between px-4">
       <div className="flex flex-row gap-1">
       <FaCalendar className="text-cyan-400"/>
       <p className="text-sm text-slate-400">12-02-2024</p>
       </div>
       <div className="flex flex-row gap-1">
       <FaLocationArrow className="text-cyan-400"/>
       <p className="text-sm text-slate-400">Addis Ababa</p>
       </div>
      </div>
     
      <AlertDialog>
  <AlertDialogTrigger className="w-max px-3 text-center border-2 border-cyan-400 mt-4 rounded-xl hover:bg-cyan-400 transition-all duration-200">Read More</AlertDialogTrigger>
  <AlertDialogContent className="bg-white dark:bg-black">
  <Image
          src="/HomeImage.png" // path to the image in the public folder
          alt="Example Image"
          width={450}
          height={200}
          objectFit="cover" // To ensure the image covers the container
           // Optional: add any additional styles
        />
    <AlertDialogHeader>
      <AlertDialogTitle className="text-cyan-400">{params.name}</AlertDialogTitle>
      
      <ScrollArea className="h-max w-[460px] rounded-md border-0 p-4 overflow-auto">
      {params.description} 

      </ScrollArea>

    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Close</AlertDialogCancel>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
      </div>
      </div>
      </div>
      </>
}