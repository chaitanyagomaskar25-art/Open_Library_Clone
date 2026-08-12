import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import BookDetails from "./components/books/BookDetails";
import SearchResult from "./components/search/SearchResult";
import Subjects from "./pages/Subjects";
import SubjectDetails from "./pages/SubjectDetails";
import Trending from "./pages/TrendingBooks";
import ExploreHeader from "./components/explore/ExploreHeader";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  { 
    path: "/search",
    element: <SearchResult />
   },
  { 
    path: "/book/:bookId",
    element: <BookDetails />
   },
  { 
    path: "/authors/:authorId"
   },
   {path:"/subjects",
    element: <Subjects />
   },
  { 
    path: "/subjects/:subject",
    element: <SubjectDetails />
   },
  { 
    path: "/trending",
    element: <Trending />
   },
  { 
    path: "/new-releases"
   },
  { 
    path: "/categories"
   },
  { 
    path: "/explore",
    element: <ExploreHeader />
   },
  { 
    path: "/favorites"
   },
   {
    path: '/reading-list'
   },
   {
    path: '/recently-viewed'
   },
   {
    path: '/settings'
   },
   {
    path: '/contact'
   },
   {
    path: '*'
   },
])