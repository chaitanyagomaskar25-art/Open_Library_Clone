import React, { useState } from "react";
import { Heart, ChevronDown, Globe } from "lucide-react";
import { Link } from "react-router";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import Introduction from "../components/home/Introduction";
import BroweBySubject from "../components/home/BroweBySubject";
import AboutProject from "../components/home/AboutProject";
import Footer from "../components/home/Footer";
import { useLanguage, useSetLanguage } from "../context/LanguageContext";

const Home = () => {
  const categories = [
    "trending",
    "classics",
    "love",
    "kid",
    "thriller",
    "textbook",
    "history",
    "programming",
  ];

  const language = useLanguage();
  const setLanguage = useSetLanguage();
  const [showLanguage, setShowLanguage] = useState(false);

  const languageNames = {
    eng: "English",
    hin: "Hindi",
    fre: "French",
    spa: "Spanish",
  };

  return (
    <div className="w-full bg-[#f4f1ea] min-h-screen text-[#333333] font-sans antialiased selection:bg-[#e23e29]/20 selection:text-[#333333]">
      {/* Top Banner (Internet Archive Header) */}
      <header className="bg-[#333333] py-2 sm:py-2.5 text-white text-xs border-b border-black/20 sticky top-0 z-50">
        <div className="max-w-[1100px] w-full flex items-center justify-between mx-auto px-4">
          {/* Internet Archive Logo */}
          <Link to="/" className="flex items-center shrink-0 hover:opacity-85 transition-opacity">
            <img
              src="https://openlibrary.org/static/images/ia-logo.svg"
              alt="Internet Archive"
              className="h-4 sm:h-5 w-auto object-contain"
            />
          </Link>

          {/* Right Header Navigation */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Donate Link */}
            <Link
              to="/donate"
              className="flex items-center gap-1.5 hover:text-amber-200 text-xs font-medium transition-colors shrink-0"
            >
              <span>Donate</span>
              <Heart size={13} className="text-[#e23e29] fill-[#e23e29] shrink-0" />
            </Link>

            {/* Language Dropdown Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguage((prev) => !prev)}
                className="flex items-center gap-1.5 hover:text-amber-200 text-xs font-medium transition-colors shrink-0 focus:outline-none"
                aria-expanded={showLanguage}
              >
                <Globe size={14} className="text-gray-300" />
                <span className="hidden xs:inline uppercase">{languageNames[language] || "English"} ({language})</span>
                <ChevronDown
                  size={12}
                  className={`text-gray-300 transition-transform duration-200 ${
                    showLanguage ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Language Floating Menu */}
              {showLanguage && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg border border-stone-200 py-1 text-gray-800 z-50">
                  <div className="px-3 py-1.5 text-[10px] font-semibold text-stone-400 uppercase tracking-wider border-b border-stone-100">
                    Select Language
                  </div>
                  {Object.entries(languageNames).map(([code, name]) => (
                    <button
                      key={code}
                      onClick={() => {
                        setLanguage(code);
                        setShowLanguage(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs hover:bg-stone-100 transition-colors flex items-center justify-between ${
                        language === code ? "font-semibold text-[#0288d1] bg-sky-50/50" : "text-stone-700"
                      }`}
                    >
                      <span>{name}</span>
                      <span className="text-[10px] uppercase text-stone-400">{code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Wrap */}
      <main className="max-w-[1100px] w-full mx-auto px-3 sm:px-6 py-4 md:py-6 space-y-6">
        <Hero />

        {/* Content Section Container */}
        <section className="bg-[#fbf9f4] border border-[#d2ceb8] rounded-md p-4 sm:p-8 md:p-10 shadow-sm space-y-10">
          <Introduction />

          {/* Book Categories */}
          <div className="space-y-8 divide-y divide-[#e5e1d3] pt-2">
            {categories.map((category) => (
              <div key={category} className="pt-6 first:pt-0">
                <Categories category={category} />
              </div>
            ))}
          </div>

          {/* Subjects Navigation */}
          <div className="pt-6 border-t border-[#d2ceb8]">
            <BroweBySubject />
          </div>
        </section>

        {/* Project Details Footer Section */}
        <section className="mt-8">
          <AboutProject />
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default Home;