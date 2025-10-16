'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function Navbar() {
    const router = useRouter();

    const homeClick = () => {
        router.push("/")
    };


    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 2);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);



    return (


        <nav className={` top-0 transition-all duration-500 text-white ${scrolled ? "fixed top-0 z-50 backdrop-blur-sm bg-neutral-900/50 w-screen" : "sticky mb-4 top-0 z-50 w-full backdrop-blur-lg bg-emerald-900/50 rounded-3xl max-w-7xl "}`} >

            <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 w-full">
                <button className="flex items-center gap-2">


                    <span onClick={homeClick} className="font-bold text-lg">Noriel Fernando Gecolea</span>
                </button>

                <nav className=" hidden transition-all duration-100 space-x-4 lg:flex text-lg gap-2">
                    <button className="h-12 px-2 rounded-3xl hover:backdrop-blur-sm transition duration-200 ease-in-out">About</button>
                    <button className="h-12 px-2 rounded-3xl hover:backdrop-blur-sm transition duration-200 ease-in-out">Projects</button>
                    <button className="h-12 px-2 rounded-3xl hover:backdrop-blur-sm transition duration-200 ease-in-out">Skills and Certificates</button>
                    <button className="h-12 px-2 rounded-3xl hover:backdrop-blur-sm transition duration-200 ease-in-out">Contact</button>
                </nav>
                <button className="rounded-md bg-neutral-600 px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

        </nav>




    );
}