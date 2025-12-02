import type { BookType } from "@/types/types";
import { useNavigate } from "react-router-dom";

interface BookCardProps {
  book: BookType;
}

const BookCard = ({ book }: BookCardProps) => {
  const coverUrl = book.formats["image/jpeg"];
  const navigate = useNavigate();
  return (
    <div
      className="border w-full overflow-hidden cursor-pointer  hover:scale-105 transition-all duration-700 hover:bg-black hover:text-white"
      onClick={() => navigate(`/book/${book.id}`)}
    >
      <img src={coverUrl} alt="" className="w-full h-72" />
      <p className="text-lg p-2 py-5 font-semibold  font-[Lora] tracking-widest  truncate">
        {book.title}
      </p>
    </div>
  );
};

export default BookCard;
