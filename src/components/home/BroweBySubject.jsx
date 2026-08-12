import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

const BroweBySubject = ({ onSelectCategory }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const rawData = [
    {
      id: "1",
      icon: "https://openlibrary.org/static/images/categories/art.svg", 
      title: "Art",
      count: "133,273"
    },
    {
      id: "2",
      icon: "https://openlibrary.org/static/images/categories/science_fiction.svg", 
      title: "Science Fiction",
      count: "21,140"
    },
    {
      id: "3",
      icon: "https://openlibrary.org/static/images/categories/fantasy.svg", 
      title: "Fantasy",
      count: "14,539"
    },
    {
      id: "4",
      icon: "https://openlibrary.org/static/images/categories/biographies.svg", 
      title: "Biography",
      count: "26,651"
    },
    {
      id: "5",
      icon: "https://openlibrary.org/static/images/categories/recipes.svg", 
      title: "Recipes",
      count: "9,696"
    },
    {
      id: "6",
      icon: "https://openlibrary.org/static/images/categories/romance.svg", 
      title: "Romance",
      count: "21,977"
    },
    {
      id: "7",
      icon: "https://openlibrary.org/static/images/categories/textbooks.svg", 
      title: "Textbooks",
      count: "39,877"
    },
    {
      id: "8",
      icon: "https://openlibrary.org/static/images/categories/children.svg", 
      title: "Children",
      count: "60,634"
    },
    {
      id: "9",
      icon: "https://openlibrary.org/static/images/categories/history.svg", 
      title: "History",
      count: "2,541,818"
    },
    {
      id: "10",
      icon: "https://openlibrary.org/static/images/categories/medicine.svg", 
      title: "Medicine",
      count: "62,296"
    },
    {
      id: "11",
      icon: "https://openlibrary.org/static/images/categories/religion.svg", 
      title: "Religion",
      count: "169,425"
    },
    {
      id: "12",
      icon: "https://openlibrary.org/static/images/categories/mystery_and_detective_stories.svg", 
      title: "Mystery & Detective",
      count: "16,035"
    },
    {
      id: "14",
      icon: "https://openlibrary.org/static/images/categories/plays.svg", 
      title: "Plays",
      count: "3,037"
    },
    {
      id: "15",
      icon: "https://openlibrary.org/static/images/categories/music.svg", 
      title: "Music",
      count: "90,733"
    },
    {
      id: "16",
      icon: "https://openlibrary.org/static/images/categories/science.svg", 
      title: "Science",
      count: "105,008"
    },
  ];

  // Clean empty items
  const data = rawData.filter(item => item.title && item.title.trim() !== "");

  const itemsPerPage = 4;
  const visibleSubjects = data.slice(currentIndex, currentIndex + itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage) + 1;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < data.length) {
      setCurrentIndex(prev => prev + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex >= itemsPerPage) {
      setCurrentIndex(prev => prev - itemsPerPage);
    }
  };

  return (
    <section className="mb-14 font-sans max-w-7xl mx-auto px-4">
      {/* Header Bar */}
      <div className="flex items-center justify-between mb-8 pb-3">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
          <h2 className="text-xl sm:text-2xl font-bold text-stone-800 tracking-tight">
            Browse by Subject
          </h2>
        </div>

        {/* Minimal Stepper Controls */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold tracking-wider text-stone-400">
            {currentPage} / {totalPages}
          </span>
          <div className="flex items-center gap-1 bg-stone-100/60 p-1 rounded-full">
            <button
              disabled={currentIndex === 0}
              onClick={handlePrev}
              className={`p-2 rounded-full transition-all ${
                currentIndex === 0
                  ? 'text-stone-300 cursor-not-allowed'
                  : 'text-stone-700 hover:bg-white hover:shadow-xs active:scale-90 cursor-pointer'
              }`}
              aria-label="Previous subjects"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              disabled={currentIndex + itemsPerPage >= data.length}
              onClick={handleNext}
              className={`p-2 rounded-full transition-all ${
                currentIndex + itemsPerPage >= data.length
                  ? 'text-stone-300 cursor-not-allowed'
                  : 'text-stone-700 hover:bg-white hover:shadow-xs active:scale-90 cursor-pointer'
              }`}
              aria-label="Next subjects"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Transparent Vertical Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {visibleSubjects.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectCategory && onSelectCategory(item.title)}
            className="group relative p-4 transition-all duration-300 cursor-pointer flex flex-col items-center text-center justify-between h-60 hover:-translate-y-1.5"
          >
            {/* 1. TOP: Image / Icon */}
            <div className="relative my-auto">
              <div className="w-20 h-20 flex items-center justify-center p-3 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain filter drop-shadow-xs"
                />
              </div>
            </div>

            {/* 2. MIDDLE: Title */}
            <div className="w-full mb-1">
              <h3 className="text-base font-bold text-stone-800 group-hover:text-amber-800 transition-colors line-clamp-1">
                {item.title}
              </h3>
            </div>

            {/* 3. BOTTOM: Count Badge */}
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 group-hover:text-stone-700 transition-colors">
                <BookOpen size={13} className="text-amber-600" />
                {item.count} Books
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BroweBySubject;