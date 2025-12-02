import { useEffect, useState } from "react";

import { getBookDetails, getBooks } from "@/utils/request";
import { useQuery } from "@tanstack/react-query";

export default function useBooks() {
  const {
    data: fetchedBooks,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["books"],
    queryFn: () => getBooks(),
  });

  const [books, setBooks] = useState([]);
  useEffect(() => {
    if (fetchedBooks) {
      setBooks(fetchedBooks);
    }
  }, [fetchedBooks]);

  return { isLoading, error, books };
}
