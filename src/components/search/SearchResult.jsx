import { ChevronLeft, ChevronRight, BookOpen, User, Calendar } from "lucide-react";
import React, { useState } from "react";
import { useLocation, Link } from "react-router";

const SearchResult = () => {
  const { state } = useLocation();
  const books = state?.books || [];
  
  const ITEMS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);

  // Math for pagination
  const totalPages = Math.ceil(books.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBooks = books.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!books.length) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center min-h-[50vh]">
        <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center text-stone-400 mb-4">
          <BookOpen size={32} />
        </div>
        <h2 className="text-xl font-semibold text-stone-800">No Search Results Found</h2>
        <p className="text-sm text-stone-500 mt-1 max-w-sm">
          We couldn't find any books matching your query. Try searching with a different title or author.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Info */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-stone-200">
        <div>
          <h1 className="text-2xl font-bold text-stone-800">Search Results</h1>
          <p className="text-sm text-stone-500 mt-1">
            Showing {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, books.length)} of {books.length} books
          </p>
        </div>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentBooks.map((book) => (
          <Link
            key={book.key}
            to={`/book/${book.key.split("/").pop()}`}
            className="flex flex-col bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-200 overflow-hidden group"
          >
            {/* Book Thumbnail Container */}
            <div className="h-52 bg-stone-100 relative overflow-hidden flex items-center justify-center border-b border-stone-100">
              {book.cover_i ? (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={book.title}
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-stone-400 gap-1 p-4 text-center">
                  <BookOpen size={28} />
                  <span className="text-xs font-medium">No Cover Available</span>
                </div>
              )}
            </div>

            {/* Book Details */}
            <div className="flex flex-col flex-1 p-4">
              <h2 className="text-base font-semibold text-stone-800 line-clamp-2 group-hover:text-amber-700 transition-colors">
                {book.title}
              </h2>

              <div className="mt-2 space-y-1 text-xs text-stone-600">
                <p className="flex items-center gap-1.5 truncate">
                  <User size={13} className="shrink-0 text-stone-400" />
                  <span className="truncate">
                    {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
                  </span>
                </p>

                {book.first_publish_year && (
                  <p className="flex items-center gap-1.5 text-stone-500">
                    <Calendar size={13} className="shrink-0 text-stone-400" />
                    <span>Published {book.first_publish_year}</span>
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Bar */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-stone-200">
          <button
            disabled={currentPage === 1}
            onClick={handlePrev}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
              currentPage === 1
                ? "text-stone-300 bg-stone-100 cursor-not-allowed"
                : "text-[#3b2010] bg-[#f5ebd9] border border-[#c4a685] hover:bg-[#ebd3b2] active:scale-95 shadow-sm cursor-pointer"
            }`}
            aria-label="Previous Page"
          >
            <ChevronLeft size={18} />
            <span>Previous</span>
          </button>

          <span className="text-sm font-medium text-stone-600">
            Page <span className="text-stone-900 font-semibold">{currentPage}</span> of{" "}
            <span className="text-stone-900 font-semibold">{totalPages}</span>
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={handleNext}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
              currentPage === totalPages
                ? "text-stone-300 bg-stone-100 cursor-not-allowed"
                : "text-[#3b2010] bg-[#f5ebd9] border border-[#c4a685] hover:bg-[#ebd3b2] active:scale-95 shadow-sm cursor-pointer"
            }`}
            aria-label="Next Page"
          >
            <span>Next</span>
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchResult;