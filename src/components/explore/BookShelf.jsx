import { useQuery } from "@tanstack/react-query";
import { getBooksBySubject } from "../../api/exploreApi";
import { useInView } from "../../hooks/useInView";
import { useState } from "react";

const BookShelf = ({ title, subject }) => {
  const { ref, isVisible } = useInView();
const [page, setPage] = useState(1)
const limit = 20;

const offset = (page - 1) * limit;

  const {
    data,
    isPending,
    isError,
  } = useQuery({  
    queryKey: ["subject-books", subject, page],
    queryFn: () => getBooksBySubject(subject, limit, offset),

    // IMPORTANT
    enabled: isVisible,

    staleTime: 1000 * 60 * 10,
  });

  const books = data?.works || [];

  return (
    <section ref={ref} className="mb-10">

      <h2 className="text-xl font-bold">
        {title}
      </h2>

      {!isVisible && (
        <div className="h-64 flex items-center justify-center">
          Loading shelf...
        </div>
      )}

      {isVisible && isPending && (
        <div className="h-64 flex items-center justify-center">
          Loading books...
        </div>
      )}

      {isVisible && isError && (
        <p>
          Failed to load books.
        </p>
      )}

      {isVisible && !isPending && !isError && (
        <div className="flex gap-4 overflow-x-auto">
<button onClick={()=>{
  setPage(prev=>prev-1)
}}>-</button>
          {books.map((book) => (
            <div
              key={book.key}
              className="min-w-37.5"
            >
              {book.cover_id && (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                  alt={book.title}
                  className="w-full h-52 object-cover"
                />
              )}

              <p className="mt-2">
                {book.title}
              </p>
            </div>
          ))}
<button onClick={()=>{
  setPage(prev=> prev+1)
}}>+</button>
        </div>
      )}

    </section>
  );
};

export default BookShelf;