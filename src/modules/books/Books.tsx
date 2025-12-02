import BookCard from "@/components/books/BookCard";
import type { BookType } from "@/types/types";
import useBooks from "@/hooks/useBooks";
import LoadingContainer from "@/components/loading/loadingContainer";

const Books = () => {
  const { books, error, isLoading } = useBooks();

  return (
    <div className="flex justify-center items-center">
      {isLoading ? (
        <LoadingContainer />
      ) : error ? (
        <div>No internet Connection</div>
      ) : (
        <div className="grid md:grid-col-3 lg:grid-cols-5 p-10 pt-28 gap-8 h-full w-screen overflow-y-scroll">
          {books.map((book: BookType) => (
            <BookCard book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Books;
