import { useQuery } from "@tanstack/react-query";
import { getCategoryBooks } from "../../api/bookApi";
import { useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { IsPending } from "../home/IsPending";
import { Link } from "react-router";

function SubjectCard({ category }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [page, setPage] = useState(1);

  const { data, isPending, isError } = useQuery({
    queryKey: ["books", category, page],
    queryFn: ({ queryKey }) => getCategoryBooks(queryKey[1], queryKey[2]),
    placeholderData: (previous) => previous
  });
  const books = data?.docs || [];
  

  const visibleBooks = books.slice(currentIndex, currentIndex + 4);

  if (isPending) return <IsPending />;

  if (isError) return <p className="text-xs text-rose-700 py-6 font-sans">Unable to load category books.</p>;

  return (
    <section className="mb-6 sm:mb-10 lg:mb-14 font-serif px-1 sm:px-0">
      {/* Library Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-5 lg:mb-7 border-b-2 border-[#b59775] pb-2 sm:pb-3 gap-2">
        <h2 className="text-sm sm:text-lg lg:text-2xl font-serif font-bold text-[#2e1c10] capitalize tracking-wide flex items-center gap-1.5 sm:gap-2.5">
          <span className="w-1.5 sm:w-2 h-4 sm:h-5 lg:h-7 bg-[#704328] rounded-sm shadow-xs" />
          {category} {data?.numFound}
        </h2>
        <span className="text-[8px] sm:text-[10px] lg:text-xs font-sans font-semibold text-[#54341c] tracking-wider uppercase bg-[#ebdccb] px-1.5 sm:px-2.5 lg:px-3 py-0.5 sm:py-1 rounded-md border border-[#c2a78a] shadow-xs shrink-0">
          Shelf {page} • Books {currentIndex + 1}-{currentIndex + visibleBooks.length}
        </span>
      </div>

      <div className="relative flex items-center gap-1.5 sm:gap-2.5 lg:gap-4">
        {/* Navigation Left */}
        <button
          disabled={currentIndex === 0 && page === 1}
          onClick={() => {
            if (currentIndex >= 4) {
              setCurrentIndex((prev) => prev - 4);
            } else if (page > 1) {
              setPage((prev) => prev - 1);
              setCurrentIndex(96);
            }
          }}
          className={`p-1.5 sm:p-2 lg:p-3 transition-all duration-200 rounded-full shrink-0 ${
            currentIndex === 0 && page === 1
              ? 'text-stone-300 cursor-not-allowed opacity-40'
              : 'text-[#3b2010] bg-[#f5ebd9] border border-[#c4a685] hover:bg-[#ebd3b2] hover:scale-105 active:scale-95 cursor-pointer shadow-md'
          }`}
          aria-label="Previous books"
        >
          <ChevronLeft classNameOL14909099W="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </button>

        {/* 4-Column Grid with Your Exact Original Responsiveness */}
        <div  className="flex-1 grid grid-cols-4 gap-1.5 sm:gap-3 lg:gap-6">
          {visibleBooks.map((book) => (
           <Link to={`/book/${book.key.split("/").pop()}`}>
            <div
            
              key={book.key || book.cover_i || book.title}
              className="group flex flex-col items-center cursor-pointer w-full"
            >

              {/* REALISTIC WOODEN ALCOVE BOX */}
              <div 
                className="relative w-full h-32 sm:h-48 md:h-60 lg:h-76 rounded-md sm:rounded-lg p-1 sm:p-2.5 lg:p-4 border sm:border-2 lg:border-[3px] border-[#381e0d] shadow-[0_4px_12px_rgba(20,10,5,0.35)] group-hover:shadow-[0_12px_28px_rgba(20,10,5,0.5)] transition-all duration-300 flex items-center justify-center overflow-hidden"
                style={{
                  background: 'radial-gradient(circle at center, #633f26 0%, #3d2312 60%, #241208 100%)'
                }}
              >
                
                {/* Real 3D Interior Cavity Shadows */}
                <div className="absolute inset-0 shadow-[inset_0_12px_20px_rgba(0,0,0,0.65),inset_0_-8px_14px_rgba(0,0,0,0.4),inset_10px_0_16px_rgba(0,0,0,0.5),inset_-10px_0_16px_rgba(0,0,0,0.5)] pointer-events-none rounded-xs" />
                
                {/* Corner Wall Shadows */}
                <div className="absolute inset-y-0 left-0 w-2 sm:w-4 lg:w-6 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-2 sm:w-4 lg:w-6 bg-gradient-to-l from-black/50 to-transparent pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-2 sm:h-4 lg:h-6 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

                {/* Book Cover Container */}
                <div className="relative h-24 sm:h-38 md:h-48 lg:h-60 w-full flex items-center justify-center p-0.5 sm:p-1 z-10">
                  {book.cover_i ? (
                    <img
                      src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                      alt={book.title}
                      className="max-h-full max-w-full object-contain rounded-xs shadow-[0_6px_16px_rgba(0,0,0,0.6)] group-hover:scale-105 group-hover:shadow-[0_16px_32px_rgba(0,0,0,0.75)] group-hover:-translate-y-1 transition-all duration-300 ease-out"
                    />
                  ) : (
                    /* Leather Book Placeholder */
                    <div className="h-20 sm:h-34 md:h-44 lg:h-52 w-16 sm:w-24 lg:w-34 bg-gradient-to-br from-[#6b2c12] via-[#4a1c09] to-[#2b0f04] border border-[#a85932] flex flex-col items-center justify-center p-1 sm:p-2 lg:p-3 text-[8px] sm:text-[10px] lg:text-xs text-[#f7ebd7] font-serif italic text-center rounded-xs shadow-[0_6px_14px_rgba(0,0,0,0.6)] group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300">
                      <BookOpen className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 lg:w-5 lg:h-5 mb-0.5 sm:mb-1 lg:mb-2 text-[#e8ba87]" />
                      <span className="line-clamp-2 sm:line-clamp-3 font-semibold leading-tight">{book.title}</span>
                    </div>
                  )}
                </div>

                {/* Realistic Wooden Shelf Floor Plank */}
                <div className="absolute bottom-0 inset-x-0 h-1.5 sm:h-3 lg:h-4 bg-gradient-to-b from-[#8a5430] via-[#5c361c] to-[#2e190b] border-t border-[#a66a3f] shadow-[0_-2px_6px_rgba(0,0,0,0.5)] z-0" />
              </div>

              {/* Title & Author Tag Box (Parchment Paper Aesthetic) */}
              <div className="w-full mt-1.5 sm:mt-2 lg:mt-3 bg-[#fbf8f0] border border-[#d2be9b] p-1 sm:p-1.5 lg:p-2.5 rounded-xs sm:rounded-md shadow-[0_2px_6px_rgba(40,20,10,0.08)] text-center group-hover:-translate-y-0.5 sm:group-hover:-translate-y-1 group-hover:shadow-[0_6px_16px_rgba(40,20,10,0.18)] group-hover:border-[#9c714d] transition-all duration-300">
                <h3 className="text-[9px] sm:text-xs lg:text-sm font-serif font-bold text-[#2e1a0c] line-clamp-1 w-full" title={book.title}>
                  {book.title}
                </h3>
                <p className="text-[7.5px] sm:text-[9px] lg:text-[11px] font-sans text-[#66432b] line-clamp-1 w-full mt-0.5 font-medium">
                  {book.author_name?.join(", ") || "Unknown Author"}
                </p>
              </div>
            </div></Link>
          ))}
        </div>

        {/* Navigation Right */}
        <button
          onClick={() => {
            if (currentIndex + 4 < books.length) {
              setCurrentIndex((prev) => prev - -4);
            } else {
              setPage((prev) => prev + 1);
              setCurrentIndex(0);
            }
          }}
          className="p-1.5 sm:p-2 lg:p-3 text-[#3b2010] bg-[#f5ebd9] border border-[#c4a685] hover:bg-[#ebd3b2] hover:scale-105 active:scale-95 transition-all duration-200 rounded-full shrink-0 cursor-pointer shadow-md"
          aria-label="Next books"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </button>
      </div>
    </section>
  );
}

export default SubjectCard;