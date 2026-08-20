import React from 'react'
import { Link } from 'react-router';

const Collection = () => {
     const collections = [
  {
    title: "The Book Awards Library",

    collections: [
      {
        name: "Bisexual Book Awards",
        slug: "bisexual-book-awards",
      },
      {
        name: "Canada Reads Awards",
        slug: "canada-reads-awards",
      },
      {
        name: "Euler Book Prize",
        slug: "euler-book-prize",
      },
      {
        name: "Hugo Awards",
        slug: "hugo-awards",
      },
      {
        name: "Newbery Medal",
        slug: "newbery-medal",
      },
    ],
  },

  {
    title: "Juvenile Literature Awards",

    collections: [
      {
        name: "Caldecott Medal",
        slug: "caldecott-medal",
      },
      {
        name: "Newbery Award",
        slug: "newbery-award",
      },
      {
        name: "Sibert Award",
        slug: "sibert-award",
      },
    ],
  },

  {
    title: "Banned & Challenged Books Library",

    collections: [
      {
        name: "Texas",
        slug: "texas",
      },
    ],
  },
];
  return (
    <div>
     {collections.map((category) => (
  <section key={category.title}>

    <h2>{category.title}</h2>

    {category.collections.map((collection) => (
      <Link
        key={collection.slug}
        to={`/collections/${collection.slug}`}
      >
        {collection.name}
      </Link>
    ))}

  </section>
))}
    </div>
  )
}

export default Collection
