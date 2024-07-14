"use client"
import Link from "next/link";
import { useTheme } from "next-themes"
import { FaDonate, FaMoon, FaSun } from 'react-icons/fa'
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { usePathname } from "next/navigation";
const links = [
    {
        name:"Home",
        path:"/"
    },
    {
        name:"About us",
        path:"/about"
    },
    {
        name:"Publication",
        path:"/publications"
    },
    {
        name:"News",
        path:"/news"
    },
    {
        name:"Gallery",
        path:"/gallery"
    }, {
        name:"Contact us",
        path:"/contactus"
    },
]

export default function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname()
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <>
            <div className="h-20 p-2 w-full flex flex-row justify-between items-center sticky top-0 z-20 bg-white dark:bg-black border-b-2 border-slate-300 ">
              
            <img
           src="./RCRIFT.png"
                alt="Company Logo" 
               className="md:w-64 md:h-20 w-48 h-16"
/>
                <div className="hidden md:flex flex-row gap-5 mt-12 ">
                    {links.map((link)=>(
                        <Link href={link.path} className={`text-[16px] ${pathname == link.path?"text-cyan-500":""} hover:text-cyan-500 transition-all duration-300`}>{link.name}</Link>
                    ))}
                   
                </div>

                <div className="md:hidden flex flex-row items-center">
                    <Drawer>
                        <DrawerTrigger asChild>
                            <Button variant="outline">Open Menu</Button>
                        </DrawerTrigger>
                        <DrawerContent className="bg-white dark:bg-black">
                            <div className="mx-auto w-full max-w-sm">
                                <DrawerHeader>
                                    <DrawerTitle>Move Goal</DrawerTitle>
                                    <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                                </DrawerHeader>
                                <div className="p-4 pb-0">
                                    <div className="flex flex-col items-center justify-center w-full gap-3">
                                    {links.map((link)=>(
                        <Button className={`w-full ${pathname == link.path?"text-white bg-cyan-400":""} border-2 border-white`}>
                        <Link href={link.path} className={` text-[15px]  hover:text-cyan-400 transition-all duration-75`}>{link.name}</Link>
                    </Button>
                    ))} 
                                        <Button variant="outline">Donate</Button>
                                    </div>
                                    <div className="mt-3 h-[120px]"></div>
                                </div>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
                <div className="flex flex-row justify-center">
                    <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                        {theme === "light" ? <FaMoon className="text-black h-[1.2rem] w-[1.2rem]" /> : <FaSun className="text-orange-400 h-[1.2rem] w-[1.2rem]" />}
                    </Button>
                    <Button  className="bg-green-500 font-bold rounded-xl hover:bg-green-600 text-white transition-all duration-200">
                        <div className="flex flex-row gap-2 items-center"><FaDonate/><span>Donate</span></div>
                    </Button>
                </div>
            </div>
        </>
    );
}
