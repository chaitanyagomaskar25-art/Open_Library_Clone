import React from "react";
import Hero from "../components/home/Hero";
import { ChevronLeft, ChevronRight, Heart, Triangle } from "lucide-react";
import { Link } from "react-router";
import TrendingBooks from "../components/home/TrendingBooks";
import { useQuery } from "@tanstack/react-query";
import { getCategoryBooks } from "../api/bookApi";
import {useState} from "react"
import Categories from "../components/home/Categories"
const Home = () => {
  const information = [
    {
      id: 1,
      img: "https://openlibrary.org/static/images/onboarding/read.png",
      title: "Read Free Library Books Online",
      description:
        "Millions of books available through Controller Digital Lending",
    },
    // {
    //   id: 2,
    //   img: "https://openlibrary.org/static/images/onboarding/reading_goal.svg",
    //   title: "Set a Yearly Reading Goal",
    //   description:
    //     "Learn how to set a yearly reading goal and track what you read",
    // },
    // {
    //   id: 3,
    //   img: "https://openlibrary.org/static/images/onboarding/track.png",
    //   title: "Keep track of your Favorite Books",
    //   description: "Organize your Books using Lists & the Reading Log",
    // },
    // {
    //   id: 4,
    //   img: "https://openlibrary.org/static/images/onboarding/library_explorer.png",
    //   title: "Try the virtual Library Explorer",
    //   description: "Digital shelves organized like a physical library",
    // },
    // {
    //   id: 5,
    //   img: "https://openlibrary.org/static/images/onboarding/fulltext.png",
    //   title: "Try Fulltext Search",
    //   description: "Find matching results within the tet of millions of books",
    // },
    // {
    //   id: 6,
    //   img: "https://openlibrary.org/static/images/onboarding/librarian.png",
    //   title: "Be an Open Librarian",
    //   description: "Dezens of ways you can help improve the library",
    // },
    // {
    //   id: 7,
    //   img: "https://openlibrary.org/static/images/onboarding/volunteer.png",
    //   title: "Volunteer at Open Library",
    //   description: "Discover opportunities to improve the library",
    // },
    // {
    //   id: 8,
    //   img: "https://openlibrary.org/static/images/onboarding/feedback.png",
    //   title: "Send us feedback",
    //   description: "Your feedback will help us improve these cards",
    // },
  ];
const categories = [
  "children",
  "romance",
  "thriller",
  "classics",
  "science_fiction",
  "programming",
];
  const [page, setPage] = useState(1)
//   const { data } = useQuery({
//     queryKey: ["books", category, page],
//     queryFn: ({ queryKey }) => getCategoryBooks(queryKey[1], queryKey[2]),
//   });
// const books = data?.docs || [] 
 
  return (
    <div className="bg-[#e7e3b89b]">
      <div className="bg-zinc-800 py-3 text-white text-balance">
        <div className="w-250 flex m-auto">
          <Link className="flex-1">
            <img
              width={180}
              className="ml-2"
              src="https://openlibrary.org/static/images/ia-logo.svg"
              alt=""
            />
          </Link>
          <div className="flex gap-10">
            <Link className="mx-2 px-4 flex gap-1.5">
              Donate
              <Heart size={15} className="mt-1 text-red-500 fill-red-500" />
            </Link>
            <Link className="mx-6 flex gap-1.5">
              English(en)
              <img
                width={25}
                src="https://openlibrary.org/static/images/language-icon.svg"
                alt=""
              />
              <Triangle size={8} className="mt-4 rotate-180 fill-current" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-250 m-auto">
        <Hero />
        <div>
          <div className="bg-white border border-[#a09e839b] p-10">
            <h2 className="text-cyan-900 ">Welcome to Open Library</h2>
            <div className="flex ">
              <div>
                <ChevronLeft />
              </div>
              <div>
                {information.map((card) => (
                  <div
                    key={card.id}
                    className="flex gap-3 border p-5 wrap-break-word w-100"
                  >
                    <div>
                      <img className="w-35" src={card.img} alt={card.title} />
                    </div>
                    <div>
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <ChevronRight />
              </div>
            </div>
           {/* <div className="flex flex-wrap gap-7">
             <ChevronLeft disabled={page === 1} */}
  {/* onClick={() => setPage((prev) => prev - 1)}/> */}
          {categories.map((category) => (
        <Categories
          key={category}
          category={category}
        />
      ))}
{/* <ChevronRight onClick={() => setPage((prev) => prev + 1)}/>
           </div> */}
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
