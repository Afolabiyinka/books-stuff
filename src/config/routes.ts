import BookDetails from "@/modules/books/BookDetails";
import Books from "@/modules/books/Books";
import Layout from "@/modules/Layout";
import SearchPage from "@/modules/search/SearchPage";
import type { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "books",
        Component: Books,
      },
      {
        path: "search",
        Component: SearchPage,
      },
      {
        path: "book/:id",
        Component: BookDetails,
      },
    ],
  },
];
