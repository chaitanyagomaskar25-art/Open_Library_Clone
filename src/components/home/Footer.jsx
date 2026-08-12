import React from "react";
import { Globe, ExternalLink } from "lucide-react";

const Footer = () => {
  const data = {
    openLibrary: [
      "Vision",
      "Volunteer",
      "Partner With Us",
      "Careers",
      "Blog",
      "Terms of Service",
      "Donate",
    ],
    discover: [
      "Home",
      "Books",
      "Authors",
      "Subjects",
      "Collections",
      "Advanced Search",
      "Return to Top",
    ],
    develop: [
      "Developer Center",
      "API Documentation",
      "Bulk Data Dumps",
      "Writing Bots",
    ],
    helpDetails: {
      help: [
        "Help Center",
        "Contact Us",
        "Suggesting Edits",
        "Add a Book",
        "Release Notes",
      ],
      logos: [
        {
          name: "Bluesky",
          url: "data:image/png;base64,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",
          link: "https://bsky.app",
        },
        {
          name: "Twitter/X",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsyBk2vXZTrxy0NpoB-8RJC_fSB5cirDDGNlCWEHTWw&s=10",
          link: "https://twitter.com/openlibrary",
        },
        {
          name: "GitHub",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd43NPXZcOp-N1vst9Acu-2IV7ZqJ3zQiOJpoW5YOOyg&s=10",
          link: "https://github.com/internetarchive/openlibrary",
        },
      ],
    },
    languages: [
      "العربية (ar)",
      "Čeština (cs)",
      "Deutsch (de)",
      "English (en)",
      "Español (es)",
      "Français (fr)",
      "हिंदी (hi)",
      "Hrvatski (hr)",
      "Italiano (it)",
      "한국어 (ko)",
      "Português (pt)",
      "Română (ro)",
      "Sardu (sc)",
      "తెలుగు (te)",
      "Українська (uk)",
      "中文 (zh)",
      "Filipino (tl)",
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-stone-100/80 border-t border-stone-200 text-stone-700 font-sans pt-10 pb-8">
      {/* Container expands smoothly across mobile (full), desktop (1280px), and ultrawide (1536px+) */}
      <div className="max-w-7xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Fluid Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          
          {/* Column 1: Open Library */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-3 pb-1.5 border-b border-stone-200">
              Open Library
            </h3>
            <ul className="space-y-2 text-sm">
              {data.openLibrary.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-amber-800 hover:underline transition-colors block py-0.5"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Discover */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-3 pb-1.5 border-b border-stone-200">
              Discover
            </h3>
            <ul className="space-y-2 text-sm">
              {data.discover.map((item, idx) => (
                <li key={idx}>
                  {item === "Return to Top" ? (
                    <button
                      onClick={scrollToTop}
                      className="text-amber-800 font-medium hover:underline cursor-pointer py-0.5 text-left"
                    >
                      {item} ↑
                    </button>
                  ) : (
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-amber-800 hover:underline transition-colors block py-0.5"
                    >
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Develop */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-3 pb-1.5 border-b border-stone-200">
              Develop
            </h3>
            <ul className="space-y-2 text-sm">
              {data.develop.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-amber-800 hover:underline transition-colors block py-0.5"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Help & Community */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-3 pb-1.5 border-b border-stone-200">
              Help
            </h3>
            <ul className="space-y-2 text-sm mb-5">
              {data.helpDetails.help.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-amber-800 hover:underline transition-colors block py-0.5"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Logos */}
            <div className="flex items-center gap-3 pt-1">
              {data.helpDetails.logos.map((logo, idx) => (
                <a
                  key={idx}
                  href={logo.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={logo.name}
                  className="p-1.5 bg-white border border-stone-200 rounded-lg hover:border-amber-400 hover:shadow-xs transition-all"
                >
                  <img src={logo.url} alt={logo.name} className="w-5 h-5 object-contain" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Middle Section: Language Selector */}
        <div className="pt-6 pb-8 border-t border-stone-200/80 mb-6">
          <div className="flex items-center gap-2 mb-3 text-xs font-bold text-stone-600 uppercase tracking-wider">
            <Globe size={14} className="text-amber-700" /> Change Language
          </div>
          <div className="flex flex-wrap gap-1.5 text-xs text-stone-600">
            {data.languages.map((lang, idx) => (
              <a
                key={idx}
                href={`#lang-${idx}`}
                className="px-2.5 py-1 bg-white border border-stone-200/70 rounded-md hover:border-amber-400 hover:text-amber-900 transition-all text-[11px] sm:text-xs"
              >
                {lang}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section: Internet Archive Branding */}
        <div className="pt-6 border-t border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-stone-500 text-center md:text-left">
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="https://archive.org" target="_blank" rel="noreferrer" className="shrink-0">
              <img
                src="https://openlibrary.org/static/images/pantheon.png"
                alt="Internet Archive Logo"
                className="w-8 h-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="max-w-2xl leading-relaxed">
              Open Library is an initiative of the
              <a
                href="https://archive.org"
                target="_blank"
                rel="noreferrer"
                className="text-amber-800 font-medium hover:underline inline-flex items-center gap-0.5"
              >
                Internet Archive <ExternalLink size={10} />
              </a>
              , a 501(c)(3) non-profit, building a digital library of Internet sites and other cultural artifacts in digital form. Other projects include the{" "}
              <a href="https://web.archive.org" className="text-amber-800 hover:underline">
                Wayback Machine
              </a>
              ,
              <a href="https://archive.org" className="text-amber-800 hover:underline">
                archive.org
              </a>
              and
              <a href="https://archive-it.org" className="text-amber-800 hover:underline">
                archive-it.org
              </a>.
            </p>
          </div>

          {/* Version badge */}
          <div className="shrink-0">
            <a
              href="https://github.com/internetarchive/openlibrary"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 bg-stone-200/60 px-3 py-1 rounded-full text-[11px] font-mono text-stone-600 hover:bg-stone-200 transition-colors"
            >
              version <span className="font-semibold text-amber-900">7ea6b9e</span>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;