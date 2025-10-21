// components/Footer.tsx
"use client"
import Link from "next/link";
import Alert from "./alert";
import { useState,useEffect } from "react";

export default function Footer() {
  const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000); // 3 seconds
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (!section) return;

        const yOffset = -80; // Adjust based on navbar height
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

        // Close the mobile menu first, then scroll smoothly
       
        setTimeout(() => {
            window.scrollTo({ top: y, behavior: "smooth" });
        }, 250);
    };
  
  const year = new Date().getFullYear();
  return (
    <footer className="bg-neutral-700 backdrop-blur-3xl  border-t border-neutral-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand / About */}
          <div className="flex-1 min-w-[220px]">
            <Link href="https://www.portfolio.norielgecolea.com" className="inline-block">
              <span className="text-2xl font-semibold text-green-400 hover:text-green-300 transition-colors">
                Noriel Gecolea
              </span>
            </Link>
            <p className="mt-3 text-sm text-gray-400 max-w-md">
I’m a software developer who loves turning ideas into fast, elegant, and user-friendly web experiences. Passionate about solving problems through code, I’m currently diving into real-time vision systems and cutting-edge frontend development.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="mailto:norielgecolea23@gmail.com"
                className="text-sm inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-green-500/10 transition-all duration-300 ring-offset-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                aria-label="Email Noriel"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 8.5L12 13 3 8.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                norielgecolea23@gmail.com
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex-1 min-w-[160px] grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2">
            <div>
              <h4 className="text-sm font-medium text-green-400">Explore</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/" className="hover:text-green-400 transition-colors">Home</Link></li>
                <li><button onClick={() => scrollToSection('projects')} className="hover:text-green-400 transition-colors">Projects</button></li>
                <li><button onClick={() => scrollToSection('testimonial')} className="hover:text-green-400 transition-colors">Testimonials</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-green-400">Services</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><button onClick={() => setShowAlert(true)} className="hover:text-green-400 transition-colors">Consulting</button></li>
                <li><button onClick={() => setShowAlert(true)} className="hover:text-green-400 transition-colors">Web / App Dev</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-green-400 transition-colors">Contact</button></li>
              </ul>
            </div>

            <div className="col-span-full sm:col-auto">
              <h4 className="text-sm font-medium text-green-400">Follow</h4>
              <div className="mt-3 flex gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/norielgecolea"
                  aria-label="GitHub"
                  className="group p-2 rounded-md bg-white/5 hover:bg-green-500/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  <svg
                    className="w-5 h-5 transition-transform group-hover:-translate-y-0.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M12 .5C5.7.5.8 5.4.8 11.7c0 4.9 3.2 9.1 7.6 10.6.6.1.8-.3.8-.6v-2c-3.1.7-3.8-1.4-3.8-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.7.8 2.1 1.2.6.9 1.6.6 2-.5.2-1 .8-1.6 1.4-2-2.5-.3-5.2-1.3-5.2-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2.9-.3 1.9-.5 2.9-.5s2 .2 2.9.5c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.9.8 1.6 2.1 1.6 4.3v3.2c0 .3.2.7.8.6 4.4-1.5 7.6-5.7 7.6-10.6C23.2 5.4 18.3.5 12 .5z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/norielgecolea"
                  aria-label="LinkedIn"
                  className="group p-2 rounded-md bg-white/5 hover:bg-green-500/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  <svg
                    className="w-5 h-5 transition-transform group-hover:-translate-y-0.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M4.98 3.5C4.98 5 3.75 6.25 2.25 6.25S-.48 5 .48 3.5 2.25.75 3.75.75 4.98 2 4.98 3.5zM.75 8.25h4.5V23H.75V8.25zM8.25 8.25h4.32v2.02h.06c.6-1.14 2.06-2.35 4.24-2.35 4.54 0 5.38 2.99 5.38 6.88V23h-4.5v-6.46c0-1.54-.03-3.52-2.14-3.52-2.15 0-2.48 1.68-2.48 3.41V23H8.25V8.25z" />
                  </svg>
                </a>

                
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
         <div className="mt-8 horizontal-line bg-emerald-600"></div>
        <div className="  pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {year} Noriel Gecolea. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button onClick={() => setShowAlert(true)} className="text-sm hover:text-green-400 transition-colors">Privacy</button>
            
            
            <button onClick={() => setShowAlert(true)} className="text-sm hover:text-green-400 transition-colors">Terms</button>
            
            <a
              href="/#top"
              className="text-sm inline-flex items-center gap-2 hover:text-green-400 transition-colors"
              aria-label="Back to top"
            >
            
            
            
          
              Back to top
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M12 19V6" />
                <path d="M5 12l7-7 7 7" />
              </svg>
            </a>



            {showAlert && <Alert message="This feature is Coming Soon! 😄" />}
          </div>
        </div>
      </div>
    </footer>
  );
}
