import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

const Introduction = () => {
  const information = [
    {
      id: 1,
      img: "https://openlibrary.org/static/images/onboarding/read.png",
      title: "Read Free Library Books Online",
      description: "Millions of books available through Controlled Digital Lending",
    },
    {
      id: 2,
      img: "https://openlibrary.org/static/images/onboarding/reading_goal.svg",
      title: "Set a Yearly Reading Goal",
      description: "Learn how to set a yearly reading goal and track what you read",
    },
    {
      id: 3,
      img: "https://openlibrary.org/static/images/onboarding/track.png",
      title: "Keep track of your Favorite Books",
      description: "Organize your Books using Lists & the Reading Log",
    },
    {
      id: 4,
      img: "https://openlibrary.org/static/images/onboarding/library_explorer.png",
      title: "Try the virtual Library Explorer",
      description: "Digital shelves organized like a physical library",
    },
    {
      id: 5,
      img: "https://openlibrary.org/static/images/onboarding/fulltext.png",
      title: "Try Fulltext Search",
      description: "Find matching results within the text of millions of books",
    },
    {
      id: 6,
      img: "https://openlibrary.org/static/images/onboarding/librarian.png",
      title: "Be an Open Librarian",
      description: "Dozens of ways you can help improve the library",
    },
    {
      id: 7,
      img: "https://openlibrary.org/static/images/onboarding/volunteer.png",
      title: "Volunteer at Open Library",
      description: "Discover opportunities to improve the library",
    },
    {
      id: 8,
      img: "https://openlibrary.org/static/images/onboarding/feedback.png",
      title: "Send us feedback",
      description: "Your feedback will help us improve these cards",
    },
  ];

  // State to track which card is currently the first one visible
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 3 cards at a time
  const visibleCards = information.slice(currentIndex, currentIndex + 2);

  const nextSlide = () => {
    if (currentIndex < information.length - 2) {
      setCurrentIndex((prev) => prev + 2);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 2);
    }
  };

  return (
    <div className="mb-6 font-sans">
      <h2 className="text-[#02598b] font-serif text-xl sm:text-2xl font-bold mb-4">
        Welcome to Open Library
      </h2>
      
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left Navigation Arrow */}
        <button 
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`p-2 rounded-full transition-colors shrink-0 ${
            currentIndex === 0 
              ? 'text-gray-300 cursor-not-allowed' 
              : 'text-gray-600 hover:bg-[#e1dcc6] cursor-pointer'
          }`}
          aria-label="Previous cards"
        >
          <ChevronLeft size={24} />
        </button>

        {/* 3-Card Grid Container */}
        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {visibleCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-row items-center gap-3 border border-[#d2ceb8] bg-[#fbf9f4] p-4 rounded-md shadow-xs h-full text-left hover:shadow-md transition-shadow"
            >
              {/* Left Side: Image */}
              <div className="shrink-0 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20">
                <img 
                  className="max-h-full max-w-full object-contain" 
                  src={card.img} 
                  alt={card.title} 
                />
              </div>

              {/* Right Side: Text */}
              <div className="flex flex-col flex-1 justify-center">
                <h3 className="text-xs sm:text-sm font-serif font-bold text-[#333333] mb-1 line-clamp-2">
                  {card.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-600 leading-normal line-clamp-3">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Navigation Arrow */}
        <button 
          onClick={nextSlide}
          disabled={currentIndex >= information.length - 3}
          className={`p-2 rounded-full transition-colors shrink-0 ${
            currentIndex >= information.length - 3
              ? 'text-gray-300 cursor-not-allowed' 
              : 'text-gray-600 hover:bg-[#e1dcc6] cursor-pointer'
          }`}
          aria-label="Next cards"
        >
          <ChevronRight size={24} />
        </button>

      </div>
    </div>
  );
};

export default Introduction;