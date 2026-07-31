import { ChevronDown, ChevronLeft, ChevronRight, Heart, Menu, Search, Triangle } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Hero = () => {
    
  return (
     <header>
      <div className="flex">
        <div className="flex-1">
          <img
            width={200}
            src="https://openlibrary.org/static/images/openlibrary-logo-tighter.svg"
            alt=""
            className="mt-2.5"
          />
        </div>
        <div className="mt-3 flex-1 flex gap-5">
        <Link>My Books</Link>
        <Link className="flex">Browse <ChevronDown className="mt-1"/> </Link>
      </div>
        <div className="mt-3 flex-1 flex gap-10">
          <Search />
          <Link>Log In</Link>
          <Link>Sing Up</Link>
          <Menu />
        </div>
        
      </div>
      
    </header>
  
);
};

export default Hero;
