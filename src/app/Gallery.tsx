"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import FadeInSection from "./fadeinsection";
interface GalleryItem {
  image: string;
  title: string;
  description: string;
}

const galleryItems: GalleryItem[] = [

  {
    image: "/certs/ccna.png",
    title: "CCNA: Introduction to Networking",
    description: "Learned the fundamentals of networking and Cisco technologies.",
  },
  {
    image: "/certs/safetyofficer.png",
    title: "Safety Officer 2",
    description: "Completed advanced safety officer training.",
  },
  {
    image: "/certs/Coursera Bulding a Calculator-1.webp",
    title: "Building a Calculator",
    description: "Created a functional calculator application.",
  },
  {
    image: "/certs/csnet.webp",
    title: "C# for .NET Developers",
    description: "Gained proficiency in C# programming for .NET applications.",
  },
  {
    image: "/certs/Coursera C++ Data Structures-1.webp",
    title: "C++ Data Structures",
    description: "Studied essential data structures in C++ programming.",
  },
  {
    image: "/certs/Coursera Crash Course on Python-1.webp",
    title: "Crash Course on Python",
    description: "Learned Python programming basics and problem solving.",
  },
  {
    image: "/certs/Coursera Foundation of Computer Science-1.webp",
    title: "Foundation of Computer Science",
    description: "Covered the foundational concepts of computer science.",
  },
  {
    image: "/certs/Coursera Foundation of User Experience Design-1.webp",
    title: "Foundation of User Experience Design",
    description: "Learned UX design principles and best practices.",
  },
  {
    image: "/certs/Coursera Introduction to Iot-1.webp",
    title: "Introduction to IoT",
    description: "Gained an understanding of the Internet of Things concepts.",
  },
  {
    image: "/certs/Coursera Introduction to visual basic programming-1.webp",
    title: "Introduction to Visual Basic Programming",
    description: "Learned the basics of Visual Basic programming.",
  },
  {
    image: "/certs/Coursera Technical Support Fundamental-1.webp",
    title: "Technical Support Fundamental Google",
    description: "Covered technical support fundamentals provided by Google.",
  },
  {
    image: "/certs/Coursera Technical Support IBM-1.webp",
    title: "Technical Support IBM",
    description: "Completed IBM’s technical support fundamentals training.",
  },
  {
    image: "/certs/ENGINEER TAYO WEBINAR-1.webp",
    title: "ENGINEER TAYO WEBINAR",
    description: "Participated in Engineer Tayo’s webinar series.",
  },
  {
    image: "/certs/Communicati-certificate-1.webp",
    title: "Networking Essentials CISCO",
    description: "Learned essential networking skills from Cisco.",
  },
  {
    image: "/certs/Intro to Packet -certificate-1.webp",
    title: "Introduction to Packet Tracer",
    description: "Learned to simulate networks using Cisco Packet Tracer.",
  },
  {
    image: "/certs/ISITE NATIONAL COMPETITION WEBINAR.webp",
    title: "ISITE NATIONAL COMPETITION",
    description: "Attended the ISITE national competition webinar.",
  },
  {
    image: "/certs/LYCO WEBINAR.webp",
    title: "\"The Journey from Code to Career\"",
    description: "Participated in LYCO’s career development webinar.",
  },
  {
    image: "/certs/Coursera 3TNWU5TDT8U8-1.webp",
    title: "Foundation of Cybersecurity",
    description: "Learned the basics and foundation of cybersecurity.",
  },


];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [centerImage, setCenterImage] = useState<string>(galleryItems[0].image);

  // Background crossfade state
  const [activeBg, setActiveBg] = useState<string>(galleryItems[0].image);
  const [prevBg, setPrevBg] = useState<string | null>(null);
  const [isCrossfading, setIsCrossfading] = useState(false);
  const fadeDuration = 900; // ms
  const fadeTimeoutRef = useRef<number | null>(null);

  // Clear timeout on unmount / new crossfade
  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current);
    };
  }, []);

  // When centerImage changes, preload the new image then crossfade
  useEffect(() => {
    if (centerImage === activeBg) return;

    // set previous background to current active (so we can fade it out)
    setPrevBg(activeBg);

    // preload new image
    const img = new window.Image();
    img.src = centerImage;
    img.onload = () => {
      // when loaded -> set new active and start crossfade
      setActiveBg(centerImage);
      // small microtask to ensure DOM has mounted the new Image element
      requestAnimationFrame(() => {
        setIsCrossfading(true);
        // after fadeDuration, remove previous bg and stop crossfading state
        fadeTimeoutRef.current = window.setTimeout(() => {
          setPrevBg(null);
          setIsCrossfading(false);
          fadeTimeoutRef.current = null;
        }, fadeDuration);
      });
    };

    // if preload fails for some reason, fallback to immediate swap
    img.onerror = () => {
      setActiveBg(centerImage);
      setPrevBg(null);
      setIsCrossfading(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [centerImage]);

  // --------- rest of your gallery scrolling logic (unchanged) ---------
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const cardWidth = scrollRef.current.children[0]?.clientWidth ?? 0;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

    setAutoScroll(false);
  };

  useEffect(() => {
    if (!autoScroll) return;
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const cardWidth = scrollRef.current.children[0]?.clientWidth ?? 0;
      const gap = 24;
      const scrollAmount = cardWidth + gap;

      if (
        scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
        scrollRef.current.scrollWidth
      ) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [autoScroll]);

  useEffect(() => {
    const refCurrent = scrollRef.current;
    if (!refCurrent) return;

    const handleScroll = () => {
      const children = Array.from(refCurrent.children) as HTMLDivElement[];
      const scrollCenter = refCurrent.scrollLeft + refCurrent.clientWidth / 2;

      let closestChild = children[0];
      let minDistance = Infinity;

      children.forEach((child) => {
        const childCenter = child.offsetLeft + child.clientWidth / 2;
        const distance = Math.abs(scrollCenter - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestChild = child;
        }
      });

      const index = children.indexOf(closestChild);
      if (index >= 0 && galleryItems[index].image !== centerImage) {
        setCenterImage(galleryItems[index].image);
      }
    };

    refCurrent.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => refCurrent.removeEventListener("scroll", handleScroll);
  }, [centerImage]);

  // ---------------- JSX ----------------
  return (
    <section className="no-select relative flex items-center justify-center w-screen h-screen overflow-hidden bg-black text-white">

      {/* Background crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* Previous background (fades out) */}
        {prevBg && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              transition: `opacity ${fadeDuration}ms ease-out, transform ${fadeDuration}ms ease-out`,
              opacity: isCrossfading ? 0 : 1,
              transform: isCrossfading ? "scale(1.12)" : "scale(1.1)",
            }}
          >
            <Image
              src={prevBg}
              alt="previous background"
              fill
              sizes="100vw"
              style={{ objectFit: "cover", filter: "blur(8px)" }}
            // priority may help for visible images, but only if necessary:
            // priority
            />
          </div>
        )}

        {/* Active background (fades in) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            transition: `opacity ${fadeDuration}ms ease-out, transform ${fadeDuration}ms ease-out`,
            // If there's a prevBg, new image should start invisible and fade in.
            opacity: prevBg ? (isCrossfading ? 0.4 : 0) : 0.4,
            transform: isCrossfading ? "scale(1.1)" : "scale(1.12)",
          }}
        >
          <Image
            src={activeBg}
            alt="background"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", filter: "blur(10px)" }}
          />
        </div>

      </div>

      {/* Dim gradient overlay */}
      <div className="inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    
        {/* Content (same as before) */}
        <div className=" flex flex-col justify-center relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 items-center">
          <div className="pb-16 text-center">
            <h1
              className="text-4xl sm:text-6xl font-extrabold font-mono uppercase tracking-[0.25em]
  text-green-300 drop-shadow-[0_0_12px_rgba(16,185,129,0.5)] mb-3 animate-glow"
            >
              MY CERTIFICATES
            </h1>
            <p className=" text-gray-200 text-xs  sm:text-base leading-relaxed ">
              Throughout my learning journey, I’ve earned various certifications that showcase my continuous growth in technology and software development. These certificates represent my dedication to improving my technical skills, exploring new tools, and staying up to date with industry standards.
            </p>
          </div>

          <div className="align bg-center relative w-100 lg:w-300 sm:w-200  ">
            <button
              onClick={() => scroll("right")}
              className="hover:bg-emerald-300 hover:text-emerald-900 bg-emerald-600 transition duration-200 ease-in-out absolute    right-0 top-1/2  translate-y-50 sm:-translate-y-1/2 z-20 w-11 h-11 p-3 shadow-md rounded-lg flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll("left")}
              className="hover:bg-emerald-300 hover:text-emerald-900 bg-emerald-600 transition duration-200 ease-in-out absolute   left-0  top-1/2 translate-y-50 sm:-translate-y-1/2 z-20 w-11 h-11 p-3 shadow-md rounded-lg flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>



            <div ref={scrollRef} className="overflow-x-auto flex gap-6 snap-x snap-mandatory scroll-smooth scrollbar-hide relative z-10">
              {galleryItems.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-80 snap-center transform transition-transform duration-500 hover:scale-105">
                  <div className="relative w-full h-64">
                    <Image src={item.image} alt={item.title} fill className="rounded-xl object-cover" />
                  </div>
                  <div className="mt-5 flex flex-col items-center gap-1 text-center">
                    <h5 className="text-2xl font-bold text-emerald-300 mb-3">{item.title}</h5>
                    <p className="text-gray-200 text-base leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    
    </section >
  );
}