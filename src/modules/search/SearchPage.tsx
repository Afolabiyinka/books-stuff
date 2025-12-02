import React, { useEffect, useState } from "react";
import useSearch from "@/hooks/useSearch";
import LoadingContainer from "@/components/loading/loadingContainer";
import { BookType } from "@/types/types";
import BookCard from "@/components/books/BookCard";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>();
  const [debouncedQuery, setBouncedQuery] = useState<string>();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setBouncedQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQuery]);

  const { searchLoading, noResults, searchResults } = useSearch(debouncedQuery);

  if (noResults) {
    return <div>An error occurred: {noResults.message}</div>;
  }

  return (
    <div className="min-h-screen overflow-y-scroll w-full flex flex-col items-center pt-48">
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="search"
        className="border p-2.5 rounded-3xl w-[60%] fixed"
        placeholder="Search for your book here"
      />

      {/* Added top margin to the results container to prevent overlap with the fixed input */}
      <div className="mt-20 w-full">
        {searchLoading ? (
          <LoadingContainer />
        ) : (
          <div className="w-full">
            {searchResults?.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-4 w-full gap-10 p-6">
                {searchResults.map((book: BookType) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
