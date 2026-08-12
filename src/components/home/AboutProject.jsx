import React from 'react';
import { ExternalLink, BookOpen, Newspaper, ArrowRight } from 'lucide-react';

const AboutProject = () => {
  return (
    <section className="mb-16 font-sans max-w-7xl mx-auto px-4">
      {/* Container with top border accent */}
      <div className="pt-8 border-t border-stone-200 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column: Narrative (7 cols) */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={18} className="text-amber-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                About the Project
              </h2>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-3">
              Open Library is an open, editable library catalog, building towards a web page for every book ever published.{' '}
              <a
                href="https://openlibrary.org/about"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-amber-700 font-semibold hover:text-amber-900 hover:underline transition-colors"
              >
                More <ExternalLink size={13} />
              </a>
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Just like Wikipedia, you can contribute new information or corrections to the catalog. You can browse by{' '}
              <a href="#subjects" className="text-amber-700 font-medium hover:underline">
                subjects
              </a>
              ,{' '}
              <a href="#authors" className="text-amber-700 font-medium hover:underline">
                authors
              </a>
              , or{' '}
              <a href="#lists" className="text-amber-700 font-medium hover:underline">
                lists
              </a>{' '}
              members have created. If you love books, why not help build a library?
            </p>
          </div>
        </div>

        {/* Right Column: Latest Blog Posts (5 cols) */}
        <div className="md:col-span-5 bg-stone-50/80 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-200">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
                <Newspaper size={15} /> Latest Blog Posts
              </span>
              <a
                href="https://blog.openlibrary.org"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-stone-500 hover:text-amber-700 flex items-center gap-1 transition-colors"
              >
                View Blog <ArrowRight size={12} />
              </a>
            </div>

            <ul className="space-y-3">
              <li>
                <a
                  href="#blog-1"
                  className="group flex flex-col text-xs sm:text-sm font-medium text-stone-800 hover:text-amber-800 transition-colors"
                >
                  <span className="line-clamp-2 leading-snug group-hover:underline">
                    Google Summer of Code Contributors Improve Open Library’s Patron Experience
                  </span>
                  <span className="text-[11px] font-normal text-stone-400 mt-0.5">
                    July 15, 2026
                  </span>
                </a>
              </li>

              <li className="pt-2 border-t border-stone-200/60">
                <a
                  href="#blog-2"
                  className="group flex flex-col text-xs sm:text-sm font-medium text-stone-800 hover:text-amber-800 transition-colors"
                >
                  <span className="line-clamp-2 leading-snug group-hover:underline">
                    Security Incident Disclosure
                  </span>
                  <span className="text-[11px] font-normal text-stone-400 mt-0.5">
                    April 28, 2026
                  </span>
                </a>
              </li>

              <li className="pt-2 border-t border-stone-200/60">
                <a
                  href="#blog-3"
                  className="group flex flex-col text-xs sm:text-sm font-medium text-stone-800 hover:text-amber-800 transition-colors"
                >
                  <span className="line-clamp-2 leading-snug group-hover:underline">
                    Improving Search by 10%
                  </span>
                  <span className="text-[11px] font-normal text-stone-400 mt-0.5">
                    April 16, 2026
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutProject;