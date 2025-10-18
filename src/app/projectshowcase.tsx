"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import FadeInSection from "./fadeinsection";

export interface Project {
    title: string;
    description: string;
    image: string;
    link?: string;
}

interface ProjectShowcaseProps {
    projects: Project[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push("/allprojects")
    };
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % projects.length);
    const prev = () =>
        setIndex((prev) => (prev - 1 + projects.length) % projects.length);

    const current = projects[index];

    return (
        <section className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-black text-white">
            {/* Blurred Background */}
            <Image
                src={current.image}
                alt={current.title}
                fill
                className="object-cover blur-md opacity-40 scale-110 transition-all duration-700"
                priority
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Main Content */}

            <div className="relative z-10 flex flex-col items-center gap-6 text-center  max-w-xl px-6">

                <AnimatePresence mode="wait">
                    <FadeInSection>
                        <motion.div
                            key={current.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="flex flex-col items-center gap-6"
                        >
                            {/* Image Preview (clickable) */}

                            <Link
                                href={current.link || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-full max-w-[500px] aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
                            >

                                <Image
                                    src={current.image}
                                    alt={current.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    priority
                                />

                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>

                            {/* Title + Description */}
                            <div>
                                <h2 className="text-3xl font-bold text-emerald-300 mb-3">
                                    {current.title}
                                </h2>
                                <p className="text-gray-200 text-base leading-relaxed">
                                    {current.description}
                                </p>
                            </div>

                        </motion.div>
                    </FadeInSection>
                </AnimatePresence>

                {/* Controls */}
                <div className="flex items-center gap-6 mt-8">
                    <button
                        onClick={prev}
                        className="px-5 py-2 bg-white/10 hover:bg-white/20 rounded-full transition"
                    >
                        ◀ Previous
                    </button>
                    <button
                        onClick={next}
                        className="px-5 py-2 bg-white/10 hover:bg-white/20 rounded-full transition"
                    >
                        Next ▶
                    </button>
                </div>



                <button onClick={handleClick}
                    className="mt-20
    group relative inline-flex items-center justify-center 
    px-10 py-8 text-lg font-bold text-white uppercase tracking-widest
    overflow-hidden rounded-2xl
    bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400
    shadow-[0_0_25px_rgba(0,255,200,0.3)]
    animate-gradient-rotate
    transition-all duration-500
    hover:scale-110 hover:shadow-[0_0_50px_rgba(0,255,200,0.9)]
  "
                >
                    <span
                        className="
      absolute inset-0 rounded-2xl bg-gradient-to-r 
      from-emerald-500 via-cyan-400 to-teal-400
      opacity-60 blur-xl animate-rotate-glow
    "
                    ></span>

                    <span
                        className="
      relative z-10 bg-clip-text  
      bg-gradient-to-r from-white via-emerald-100 to-cyan-200
      animate-text-shimmer
      group-hover:animate-text-shimmer-fast text-cyan-900 font-mono
    ">
                        View All Projects
                    </span>

                    <span
                        className="
      absolute -inset-[2px] rounded-2xl
      bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400
      opacity-70 animate-border-spin
    "
                    ></span>
                </button>



            </div>




        </section >

    );
}
