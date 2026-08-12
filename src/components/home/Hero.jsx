import { ChevronDown, ChevronLeft, ChevronRight, Heart, Menu, Search, Triangle } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";
import SearchBar from "../search/SearchBar";

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#e1dcc6] border border-[#c8c3ad] border-b-0 rounded-t-md px-4 py-3 shadow-sm text-[#333333] font-sans">
      <div className="flex items-center justify-between gap-2 md:gap-6">
        
        {/* Logo Section */}
        <div className="flex-1 shrink-0">
          <Link to="/" className="inline-block transition-opacity hover:opacity-90">
            <img
              width={200}
              src="https://openlibrary.org/static/images/openlibrary-logo-tighter.svg"
              alt="Open Library Logo"
              className="mt-0 h-8 md:h-9 object-contain"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-1 items-center gap-6 font-medium text-sm">
          <Link 
            to="#" 
            className="text-[#333333] hover:text-[#0288d1] transition-colors py-1"
          >
            My Books
          </Link>
          
          <div className="relative group">
            <Link 
              to="#" 
              className="flex items-center gap-1 text-[#333333] hover:text-[#0288d1] transition-colors py-1"
            >
              Browse 
              <ChevronDown size={14} className="mt-0.5 group-hover:rotate-180 transition-transform duration-200" />
            </Link>
            
            {/* Interactive Dropdown Menu */}
            <div className="absolute left-0 top-full hidden group-hover:block bg-white border border-[#d2ceb8] rounded shadow-lg py-2 w-40 z-50">
              <Link to="/subjects" className="block px-4 py-1.5 text-xs text-gray-700 hover:bg-[#f4f1ea] hover:text-[#0288d1]">Subjects</Link>
              <Link to="/trending" className="block px-4 py-1.5 text-xs text-gray-700 hover:bg-[#f4f1ea] hover:text-[#0288d1]">Trending</Link>
              <Link to="/explore" className="block px-4 py-1.5 text-xs text-gray-700 hover:bg-[#f4f1ea] hover:text-[#0288d1]">Explore</Link>
              <Link to="#" className="block px-4 py-1.5 text-xs text-gray-700 hover:bg-[#f4f1ea] hover:text-[#0288d1]">Random Book</Link>
            </div>
          </div>
        </div>

        {/* Search & Actions Section */}
<div className="flex-2 flex items-center justify-end gap-3 sm:gap-4 md:gap-6">
          
          {/* Interactive Expanding Search Bar */}
       <SearchBar />
          <Link 
            to="/login" 
            className="text-xs sm:text-sm font-semibold text-[#333333] hover:text-[#0288d1] transition-colors whitespace-nowrap"
          >
            Log In
          </Link>
          
          <Link 
            to="/signup" 
            className="bg-[#0288d1] hover:bg-[#0277bd] text-white px-3 py-1.5 rounded text-xs font-semibold transition-colors whitespace-nowrap shadow-xs"
          >
            Sign Up
          </Link>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-black p-1 rounded transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Toggled by Menu Icon) */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-[#c8c3ad] flex flex-col gap-2 text-sm">
          <Link to="#" className="py-1 px-2 hover:bg-[#d5cfb5] rounded font-medium">My Books</Link>
          <Link to="#" className="py-1 px-2 hover:bg-[#d5cfb5] rounded font-medium flex items-center justify-between">
            Browse Subjects <ChevronDown size={14} />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Hero;