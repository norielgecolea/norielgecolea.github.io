// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
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
              Software developer &amp; problem-solver. I build clean, performant web apps with
              attention to UX and detail. Currently exploring real-time vision systems and
              modern frontend workflows.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="mailto:hello@norielgecolea.com"
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
                hello@norielgecolea.com
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex-1 min-w-[160px] grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2">
            <div>
              <h4 className="text-sm font-medium text-green-400">Explore</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/" className="hover:text-green-400 transition-colors">Home</Link></li>
                <li><Link href="/projects" className="hover:text-green-400 transition-colors">Projects</Link></li>
                <li><Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-green-400">Services</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/services/consulting" className="hover:text-green-400 transition-colors">Consulting</Link></li>
                <li><Link href="/services/dev" className="hover:text-green-400 transition-colors">Web / App Dev</Link></li>
                <li><Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link></li>
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

                {/* Twitter / X */}
                <a
                  href="https://twitter.com/norielgecolea"
                  aria-label="Twitter"
                  className="group p-2 rounded-md bg-white/5 hover:bg-green-500/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  <svg
                    className="w-5 h-5 transition-transform group-hover:-translate-y-0.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M23 4.5c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.3 1.6-2.2-.7.4-1.5.7-2.3.9C19.6 3 18.2 2.5 16.8 2.5c-2.6 0-4.6 2.4-3.8 4.9C9.6 7 6.6 5.5 4.6 3.1 3 5.2 4.1 8 6.6 9 6 9 5.4 8.8 4.9 8.5c0 2.4 1.7 4.5 4 5-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 2 2.6 3.5 4.9 3.5-2 1.6-4.5 2.5-7.2 2.5-.5 0-1 0-1.5-.1 2.8 1.8 6.1 2.9 9.6 2.9 11.5 0 17.8-9.6 17.8-17.9v-.8C22.1 6 22.6 5.2 23 4.5z" />
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
            <Link href="/privacy" className="text-sm hover:text-green-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-sm hover:text-green-400 transition-colors">Terms</Link>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
