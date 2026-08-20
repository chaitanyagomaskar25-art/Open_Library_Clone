import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, NavLink, useParams } from "react-router";
import {
  getbookDetails,
  getBookEditions,
  getBookShelves,
} from "../../api/bookApi";
import { getAuthorDetails } from "../../api/authorsApi";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  Triangle,
  BookOpen,
  Bookmark,
  Clock,
  CheckCircle,
  Tag,
  Share2,
  ChevronRight,
  Globe,
  Calendar,
  Layers,
} from "lucide-react";

const BookDetails = () => {
  const { bookId } = useParams();

  const {
    data: bookDetails,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["book", bookId],
    queryFn: () => getbookDetails(bookId),
  });

  const authorId = bookDetails?.authors?.[0]?.author?.key?.split("/").pop();

  const { data: shelves } = useQuery({
    queryKey: ["bookshelves", bookId],
    queryFn: () => getBookShelves(bookId),
  });

  const { data: authorDetails } = useQuery({
    queryKey: ["author", authorId],
    queryFn: () => getAuthorDetails(authorId),
    enabled: !!authorId,
  });
  const coverId = bookDetails?.covers?.[0];

  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
    : "/no-cover.png";

  const { data: editions } = useQuery({
    queryKey: ["editions", bookId],
    queryFn: () => getBookEditions(bookId),
  });
  
  if (isPending) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-gray-200">
          <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
          <span className="text-sm font-medium text-gray-600">Loading Book...</span>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white border border-red-100 rounded-2xl p-6 max-w-sm text-center shadow-sm">
          <h2 className="text-base font-semibold text-gray-900 mb-1">Error Loading Title</h2>
          <p className="text-xs text-gray-500">Something went wrong while fetching this book.</p>
        </div>
      </div>
    );
  }

  const latestEdition = editions?.entries?.[editions?.entries?.length - 1];

  return (
    <div className="min-h-screen bg-gray-50/50 text-gray-900 font-sans pb-24">
      {/* Top Breadcrumb Header Bar */}
      <div className="bg-white border-b border-gray-200/80 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between text-xs font-medium">
          <button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </button>

          <nav className="flex items-center gap-1 sm:gap-4 overflow-x-auto no-scrollbar py-1">
            <NavLink className="px-3 py-1.5 bg-gray-900 text-white font-semibold rounded-lg whitespace-nowrap">
              Overview
            </NavLink>
            <NavLink className="px-3 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap">
              View {editions?.entries?.length || 0} Editions
            </NavLink>
            <NavLink className="px-3 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap">
              Details
            </NavLink>
            <NavLink className="px-3 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap">
              Reviwe
            </NavLink>
            <NavLink className="px-3 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap">
              Lists
            </NavLink>
            <NavLink className="px-3 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors whitespace-nowrap">
              Related Books
            </NavLink>
          </nav>

          <button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 pt-8 space-y-8">
        
        {/* Main Hero Showcase */}
        <div className="bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Cover & Primary Action Group */}
            <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center md:items-start space-y-5">
              <div className="w-48 h-72 rounded-xl overflow-hidden bg-gray-100 shadow-md border border-gray-200 flex-shrink-0">
                <img
                  src={coverUrl}
                  alt={bookDetails?.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Action Buttons */}
              <div className="w-full space-y-2">
                <Link className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-xs transition-colors">
                  <Eye className="w-4 h-4" /> Preview
                </Link>
                <Link className="flex items-center justify-between w-full py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium text-sm rounded-xl transition-colors">
                  <span>Add to List</span>
                  <Triangle className="w-3 h-3 rotate-180 fill-gray-800" />
                </Link>
              </div>

              {/* Shelf Activity Box */}
              <div className="w-full bg-gray-50/80 rounded-xl border border-gray-200/60 p-4 text-xs space-y-2.5">
                <div className="flex items-center justify-between text-gray-600">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Bookmark className="w-3.5 h-3.5 text-amber-500" /> Want to Read
                  </span>
                  <span className="font-bold text-gray-900">{shelves?.counts?.want_to_read ?? 0}</span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-blue-500" /> Currently Reading
                  </span>
                  <span className="font-bold text-gray-900">{shelves?.counts?.currently_reading ?? 0}</span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Already Read
                  </span>
                  <span className="font-bold text-gray-900">{shelves?.counts?.already_read ?? 0}</span>
                </div>

                <div className="pt-2 border-t border-gray-200/80 flex justify-around text-blue-600 font-semibold text-xs">
                  <Link className="hover:underline">Review</Link>
                  <span className="text-gray-300">•</span>
                  <Link className="hover:underline">Notes</Link>
                </div>
              </div>
            </div>

            {/* Right Column: Key Details & Description */}
            <div className="md:col-span-8 lg:col-span-9 space-y-6">
              
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                  An edition of {bookDetails?.title}: {bookDetails?.created?.value}
                </p>
                <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                  {bookDetails?.title}
                </h1>
                <p className="text-base text-gray-600 mt-1">
                  by{" "}
                  <Link to={`/authors/${authorId}`} className="text-blue-600 font-semibold hover:underline">
                    {authorDetails?.name || "Loading author..."}
                  </Link>
                </p>
              </div>

              {/* Description Block */}
              <div className="space-y-2 border-t border-b border-gray-100 py-4">
                <p className="text-xs text-gray-400">
                  Last Modified: {bookDetails?.last_modified?.value} |{" "}
                  <Link className="text-blue-600 hover:underline">History</Link>
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {bookDetails?.description?.value
                    ? bookDetails?.description?.value
                    : "There is no Description"}
                </p>
              </div>

              {/* Highlight Edition Card */}
              {editions?.entries?.length > 0 && (
                <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-800">
                    <BookOpen className="w-3.5 h-3.5" /> Featured Edition Overview
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                    {latestEdition?.title}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-600 pt-1">
                    <p>
                      <strong className="text-gray-800">Published:</strong>{" "}
                      {latestEdition?.publish_date || "N/A"}
                    </p>
                    <p className="truncate">
                      <strong className="text-gray-800">Publisher:</strong>{" "}
                      {latestEdition?.publishers?.join(", ") || "N/A"}
                    </p>
                    <p>
                      <strong className="text-gray-800">Pages:</strong>{" "}
                      {latestEdition?.number_of_pages || "N/A"}
                    </p>
                  </div>
                </div>
              )}

              {/* Subjects / Tags List */}
              {bookDetails?.subjects?.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
                    Subjects
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {bookDetails.subjects.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Editions Grid Section */}
        <div className="bg-white rounded-2xl border border-gray-200/80 p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-gray-100 pb-3">
            <h2 className="text-base font-bold text-gray-900">
              Editions Catalog ({editions?.entries?.length || 0})
            </h2>
            <p className="text-xs text-gray-500">
              Showing 2 featured editions. View all {editions?.entries?.length} editions?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {editions?.entries?.map((edition) => (
              <div
                key={edition.key}
                className="flex gap-3 p-3 rounded-xl border border-gray-200/70 hover:border-gray-300 hover:bg-gray-50/50 transition-all"
              >
                <img
                  src={
                    edition.covers?.length
                      ? `https://covers.openlibrary.org/b/id/${edition.covers[0]}-M.jpg`
                      : "/no-cover.png"
                  }
                  alt={edition.title}
                  className="w-14 h-20 object-cover rounded-lg bg-gray-100 flex-shrink-0"
                />

                <div className="space-y-1 text-xs text-gray-600 overflow-hidden">
                  <h3 className="font-bold text-sm text-gray-900 truncate">
                    {edition.title}
                  </h3>
                  <p>
                    <span className="text-gray-400">Published:</span>{" "}
                    {edition.publish_date || "Unknown"}
                  </p>
                  <p className="truncate">
                    <span className="text-gray-400">Language:</span>{" "}
                    {edition.languages
                      ?.map((lang) => lang.key.split("/").pop())
                      .join(", ") || "Unknown"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Metadata Section */}
        <div className="bg-white rounded-2xl border border-gray-200/80 p-6 space-y-1 text-xs">
          <h2 className="text-sm font-bold text-gray-900">Book Details</h2>
          <h3 className="font-semibold text-gray-700">Edition Notes</h3>
          <p className="text-gray-600">Source title: {bookDetails?.title}</p>
        </div>

      </main>
    </div>
  );
};

export default BookDetails;