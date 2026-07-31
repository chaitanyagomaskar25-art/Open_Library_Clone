import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path:'/about'
  },
  { 
    path: "/search"
   },
  { 
    path: "/books/:bookId"
   },
  { 
    path: "/authors/:authorId"
   },
  { 
    path: "/subjects/:subject"
   },
  { 
    path: "/trending"
   },
  { 
    path: "/new-releases"
   },
  { 
    path: "/categories"
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