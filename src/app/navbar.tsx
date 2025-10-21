"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Detect scroll to change navbar style
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 2);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        if (!menuOpen) return;
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuOpen]);

    // ✅ Smooth scroll function
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);

        if (pathname === "/") {
            // Already on homepage
            if (section) {
                const yOffset = -80;
                const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
                setMenuOpen(false);
                setTimeout(() => {
                    window.scrollTo({ top: y, behavior: "smooth" });
                }, 250);
            }
        } else {
            // Not on homepage → navigate and let homepage handle scroll
            router.push(`/#${id}`);
        }
    };

    // ✅ Scroll after returning to homepage with hash
    useEffect(() => {
        if (pathname === "/" && window.location.hash) {
            const id = window.location.hash.replace("#", "");
            const section = document.getElementById(id);
            if (section) {
                const yOffset = -80;
                const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
                setTimeout(() => {
                    window.scrollTo({ top: y, behavior: "smooth" });
                }, 400);
            }
        }
    }, [pathname]);

    return (
        <nav
            className={`transition-all duration-500 text-white ${
                scrolled
                    ? "fixed top-0 z-50 backdrop-blur-sm bg-neutral-900/50 w-screen shadow-lg"
                    : "sticky mb-4 top-0 z-50 w-full backdrop-blur-lg bg-emerald-900/50 rounded-3xl max-w-7xl"
            }`}
        >
            <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 w-full">
                {/* Logo / Home Button */}
                <motion.button
                    onClick={() => router.push("/")}
                    className="flex items-center gap-2 focus:outline-none cursor-pointer"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                        duration: 2.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    whileHover={{ scale: 1.1 }}
                >
                    <span className="font-bold font-mono tracking-widest text-lg hover:text-emerald-300 transition-colors duration-200">
                        &lt;NorielGecolea/&gt;
                    </span>
                </motion.button>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex text-lg gap-2">
                    {[
                        { id: "projects", label: "Projects" },
                        { id: "skills", label: "Skills & Certificates" },
                        { id: "testimonial", label: "Testimonials" },
                        { id: "contact", label: "Contact" },
                    ].map(({ id, label }) => (
                        <motion.button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="h-12 px-3 rounded-3xl hover:bg-emerald-700/40 transition duration-200 ease-in-out"
                        >
                            {label}
                        </motion.button>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    className="rounded-md bg-neutral-600 px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 lg:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        ref={menuRef}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="absolute top-16 left-0 w-full backdrop-blur-sm bg-neutral-900/50 text-white flex flex-col items-center gap-3 py-4 z-[9999]"
                    >
                        {[
                            { id: "projects", label: "Projects" },
                            { id: "skills", label: "Skills & Certificates" },
                            { id: "testimonial", label: "Testimonials" },
                            { id: "contact", label: "Contact" },
                        ].map(({ id, label }) => (
                            <motion.button
                                key={id}
                                onClick={() => scrollToSection(id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-lg px-3 py-2 w-3/4 text-center rounded-xl hover:bg-emerald-700/40 transition-all duration-200"
                            >
                                {label}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
