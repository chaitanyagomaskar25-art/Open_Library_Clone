import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import { getAuthorDetails } from "../api/authorsApi";

const AuthorDetails = () => {
  const { authorId } = useParams();

  const {
    data: author,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["author", authorId],
    queryFn: () => getAuthorDetails(authorId),
  });
console.log(author)
  if (isPending) {
    return <h2>Loading author...</h2>;
  }

  if (isError) {
    return <h2>Something went wrong...</h2>;
  }

  return (
    <div>
      {/* Author Name */}
      <h1>{author.name}</h1>

      {/* Author Image */}
      {author.photos?.[0] && (
        <img
          src={`https://covers.openlibrary.org/a/id/${author.photos[0]}-L.jpg`}
          alt={author.name}
          width="200"
        />
      )}

      {/* Personal Name */}
      {author.personal_name && (
        <p>
          <strong>Personal Name:</strong> {author.personal_name}
        </p>
      )}

      {/* Birth Date */}
      {author.birth_date && (
        <p>
          <strong>Born:</strong> {author.birth_date}
        </p>
      )}

      {/* Death Date */}
      {author.death_date && (
        <p>
          <strong>Died:</strong> {author.death_date}
        </p>
      )}

      {/* Alternate Names */}
      {author.alternate_names?.length > 0 && (
        <div>
          <h2>Also Known As</h2>

          <ul>
            {author.alternate_names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Author ID */}
      <p>
        <strong>Author ID:</strong> {authorId}
      </p>
    </div>
  );
};

export default AuthorDetails;