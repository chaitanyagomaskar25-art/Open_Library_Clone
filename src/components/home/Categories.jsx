import { useQuery } from "@tanstack/react-query";
import { getCategoryBooks } from "../../api/bookApi";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Categories({ category }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [page, setPage] = useState(1);

  const { data, isPending, isError } = useQuery({
    queryKey: ["books", category, page],
    queryFn: ({ queryKey }) => getCategoryBooks(queryKey[1], queryKey[2]),
        placeholderData:(previous)=>previous

  });
  const books = data?.docs || [];

  const visibleBooks = books.slice(currentIndex, currentIndex + 4);
  if (isPending) return <p>Loading...</p>;

  if (isError) return <p>Something went wrong.</p>;

  return (
    <section>
      <h2>{category}</h2>

      <div className="flex gap-5 flex-wrap">
        <button
          disabled={currentIndex === 0}
          onClick={() => {
            if (currentIndex >= 4) {
              setCurrentIndex((prev) => prev - 4);
            } else if (page > 1) {
              setPage((prev) => prev - 1);

              setCurrentIndex(96);
            }
          }}
        >
          <ChevronLeft />
        </button>
        <div className="flex gap-5 flex-wrap">
          {visibleBooks.map((book) => (
            <div className="border p-5">
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
                className="w-40"
              />

              <h2>{book.title}</h2>

              <p>{book.author_name?.join(", ")}</p>

              <p>{book.first_publish_year}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => {
          if (currentIndex + 4 < books.length) {
            setCurrentIndex((prev) => prev + 4);
          } else {
            setPage((prev) => prev + 1);

            setCurrentIndex(0);
          }
        }}
      >
        <ChevronRight />
      </button>
    </section>
  );
}

export default Categories;
