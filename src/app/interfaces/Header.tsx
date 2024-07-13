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

export default function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <>
            <div className="h-20 p-2 w-full flex flex-row justify-between items-center sticky top-0 z-20 bg-white dark:bg-black border-b-2 border-slate-300 ">
                <div className="bg-slate-300 h-10 w-16"></div>
                <div className="hidden md:flex flex-row gap-5 mt-12 ">
                    <Link href={'/'} className="text-[16px] text-cyan-500 hover:text-cyan-500 transition-all duration-300">Home</Link>
                    <Link href={'/about'} className="text-[16px] hover:text-cyan-500 transition-all duration-300">About us</Link>
                    <Link href="#" className="text-[16px] hover:text-cyan-500 transition-all duration-300">Publication</Link>
                    <Link href="#" className="text-[16px] hover:text-cyan-500 transition-all duration-300">News</Link>
                    <Link href="#" className="text-[16px] hover:text-cyan-500 transition-all duration-300">Gallery</Link>
                    <Link href="#" className="text-[16px] hover:text-cyan-500 transition-all duration-300">Contact us</Link>
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
                                        <Button className="w-full" variant="outline">
                                            <Link href="#" className="text-[15px] text-slate-900 hover:text-slate-900 transition-all duration-75">Home</Link>
                                        </Button>
                                        <Button className="w-full" variant="outline">
                                            <Link href="#" className="text-[15px] text-slate-100 hover:text-slate-900 transition-all duration-300">About Us</Link>
                                        </Button>
                                        <Button className="w-full" variant="outline">
                                            <Link href="#" className="text-[15px] text-slate-100 hover:text-slate-900 transition-all duration-300">Publication</Link>
                                        </Button>
                                        <Button className="w-full" variant="outline">
                                            <Link href="#" className="text-[15px] text-slate-100 hover:text-slate-900 transition-all duration-300">News</Link>
                                        </Button>
                                        <Button className="w-full" variant="outline">
                                            <Link href="#" className="text-[15px] text-slate-100 hover:text-slate-900 transition-all duration-300">Gallery</Link>
                                        </Button>
                                        <Button variant="outline">
                                            <Link href="#" className="text-[15px] text-slate-100 hover:text-slate-900 transition-all duration-300">Contact Us</Link>
                                        </Button>
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
