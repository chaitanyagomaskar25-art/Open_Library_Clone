import { useQuery } from "@tanstack/react-query";
import { Search, X, Loader2 } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { getSearchBooks } from "../../api/bookApi";
import { Link, useNavigate } from "react-router";
import { useLanguage } from "../../context/LanguageContext";
import { useDebounce } from "../../hooks/useDebounce";

const SearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const language = useLanguage();
  const debouncedSearch = useDebounce(search)

  const { data, isPending, isError } = useQuery({
    queryKey: ["search", debouncedSearch, language],
    queryFn: () => getSearchBooks(debouncedSearch, 1, language),
enabled: debouncedSearch.trim() !== "",  });

  const books = data?.docs || [];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [showBooks, setShowbooks] = useState(0);

  const handleClear = () => {
    setSearch("");
  };
  const [recent, setRecent] = useState([]);
  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      {/* Search Bar Input Container */}
      <div
        className={`flex items-center bg-white border border-gray-300 rounded-full transition-all duration-300 shadow-sm ${
          isSearchOpen
            ? "w-full px-3.5 py-2 ring-2 ring-sky-500/20 border-sky-500"
            : "w-10 h-10 justify-center"
        }`}
      >
        <button
          onClick={() => setIsSearchOpen((prev) => !prev)}
          className="text-gray-500 hover:text-sky-600 transition-colors shrink-0"
          title="Search Open Library"
          aria-label="Toggle Search"
        >
          <Search size={18} />
        </button>

        {isSearchOpen && (
          <div className="flex items-center flex-1 ml-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, author, or ISBN..."
              autoFocus
              className="w-full text-sm text-gray-800 bg-transparent outline-none placeholder:text-gray-400"
            />
            {search && (
              <button
                onClick={handleClear}
                className="text-gray-400 hover:text-gray-600 p-1 shrink-0 ml-1"
              >
                <X size={14} />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Floating Results Dropdown */}
      {isSearchOpen && search.trim() !== "" && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 max-h-96 overflow-y-auto z-50 divide-y divide-gray-100">
          {/* Loading State */}

          {/* Recent Searches */}
          {recent.length > 0 && (
            <div className="p-3 border-b">
              <h3 className="text-sm font-semibold mb-2">Recent Searches</h3>

              {recent.map((r, index) => (
                <h4 key={index} className="text-sm text-gray-600">
                  {r}
                </h4>
              ))}
            </div>
          )}

          {isPending && (
            <div className="flex items-center justify-center p-6 text-gray-500 text-sm gap-2">
              <Loader2 className="animate-spin text-sky-600" size={18} />
              <span>Searching Open Library...</span>
            </div>
          )}

          {/* Error State */}
          {isError && (
            <div className="p-4 text-center text-sm text-red-500">
              Failed to fetch search results. Please try again.
            </div>
          )}

          {/* Empty Results */}
          {!isPending && !isError && books.length === 0 && (
            <div className="p-6 text-center text-sm text-gray-500">
              No books found for &quot;{search}&quot;
            </div>
          )}

          {/* Search Results List */}
          {!isPending &&
            !isError &&
            books.slice(showBooks, showBooks + 4).map((book) => (
              <Link
                key={book.key}
                to={`/book${book.key}`}
                onClick={() => setIsSearchOpen(false)}
                className="flex items-center gap-3 p-3 hover:bg-sky-50/60 transition-colors group"
              >
                {/* Book Thumbnail */}
                <div className="w-11 h-15 bg-gray-100 rounded shrink-0 overflow-hidden border border-gray-200">
                  {book.cover_i ? (
                    <img
                      src={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`}
                      alt={book.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-400 text-center px-1">
                      No Cover
                    </div>
                  )}
                </div>

                {/* Book Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-800 truncate group-hover:text-sky-600 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-xs text-gray-500 truncate mt-0.5">
                    {book.author_name
                      ? book.author_name.join(", ")
                      : "Unknown Author"}
                  </p>
                  {book.first_publish_year && (
                    <span className="inline-block mt-1 text-[11px] font-medium text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                      {book.first_publish_year}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          <button
            onClick={() => {
              if (!search.trim()) return;

              setRecent((prev) => {
                  if (prev.includes(search)) return prev;

                return [...prev, search]});

              navigate("/search", {
                state: {
                  books: data.docs,
                },
              });
            }}
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
