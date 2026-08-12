import { useQuery } from "@tanstack/react-query";
import { getTrendingBooks } from "../api/bookApi";
import { Link } from "react-router";

const Trending = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["trending-books"],
    queryFn: getTrendingBooks,
  });

  if (isPending) return <h2>Loading...</h2>;

  if (isError) return <h2>Something went wrong</h2>;

  const books = data?.works || [];
console.log(books[0].key.split("/").pop()); 

  return (
    <div>
      <h1>Trending Books</h1>

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
    </div>
  );
};

export default Trending;
