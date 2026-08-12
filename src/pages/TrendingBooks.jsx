import { useQuery } from "@tanstack/react-query";
import { getTrendingBooks } from "../api/bookApi";
import { Link } from "react-router";
import { useState } from "react";

const Trending = () => {
  const [period, setPeriod] = useState("daily");
  const [page, setPage] = useState(1);

  const { data, isPending, isError } = useQuery({
    queryKey: ["trending", period, page],
    queryFn: () => getTrendingBooks(period, page, 20),
  });
  if (isPending) return <h2>Loading...</h2>;

  if (isError) return <h2>Something went wrong</h2>;

  const books = data?.works || [];
  console.log(data);
  const changePeriod = (newPeriod) => {
    setPeriod(newPeriod);
    setPage(1);
  };
  return (
    <div>
      <h1>Trending Books</h1>
      <div>
        <button onClick={() => changePeriod("daily")}>Today</button>

        <button onClick={() => changePeriod("weekly")}>This Week</button>

        <button onClick={() => changePeriod("monthly")}>This Month</button>

        <button onClick={() => changePeriod("yearly")}>This Year</button>
      </div>
      <div>
        {books.map((book) => (
          <Link to={`/book/${book.key.split("/").pop()}`} key={book.key}>
            <h2>{book.title}</h2>
            <p>{book.author_name?.join(", ")}</p>
            {book.cover_i && (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
              />
            )}
          </Link>
        ))}
      </div>
      <div>
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </button>

        <span>Page {page}</span>

        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Trending;
