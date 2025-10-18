"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
];

// ✅ Helper for seamless loop
const duplicate = (arr: any[]) => [...arr, ...arr];

function InfiniteRow({ items, direction = "left", duration = 30 }: any) {
  const moveX = direction === "left" ? "-100%" : "0%";
  const resetX = direction === "left" ? "0%" : "-100%";

  return (
    <div className="relative overflow-hidden blur-xs mt-19">
      <motion.div
        className="flex gap-16 items-center whitespace-nowrap"
        animate={{
          x: [resetX, moveX],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
        }}
      >
        {/* Duplicate content twice for smoothness */}
        {duplicate(items).map((tech: any, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center min-w-[120px] mt-10"
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={60}
              height={60}
              className="drop-shadow-lg hover:scale-110 hover-shake1 transition-transform"
            />
            <p className="mt-2 text-sm text-white font-medium">{tech.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechnologiesSlider() {
  return (
    <div className="absolute w-full py-8 space-y-8 select-none">
      {/* Row 1 - Left to Right */}
      <InfiniteRow items={technologies} direction="left" duration={40} />
      {/* Row 2 - Right to Left */}
      <InfiniteRow
        items={[...technologies].reverse()}
        direction="right"
        duration={35}
      />
    </div>
  );
}
