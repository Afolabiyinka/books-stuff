import { useParams, useNavigate } from "react-router-dom";
import { BookType } from "@/types/types";
import LoadingContainer from "@/components/loading/loadingContainer";
import useBookDetails from "@/hooks/useBookdetails";
import Chip from "@/components/ui/chip";
import { Button } from "@/components/ui/button";
import { Bookmark, ChevronLeft, Heart } from "lucide-react";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const bookId = id ? Number(id) : undefined;
  const { fetchedDetails, detailsLoading, noDetails } = useBookDetails(bookId);

  if (detailsLoading) {
    return <LoadingContainer />;
  }

  if (noDetails) {
    return (
      <div className="p-4 text-center text-red-500">
        Error: {noDetails.message}
      </div>
    );
  }

  if (!fetchedDetails) {
    return (
      <div className="p-4 text-center">Book not found or data is missing.</div>
    );
  }

  const book: BookType = fetchedDetails;
  const coverUrl = fetchedDetails.formats["image/jpeg"];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-4 md:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="w-fit"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
            <span className="text-sm text-gray-600">
              {book.download_count} Downloads
            </span>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Book Cover - Left Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <img
                  src={coverUrl}
                  alt={book.title}
                  className="w-full max-w-sm mx-auto lg:max-w-none rounded-lg shadow-md object-cover"
                />
                <div className="flex gap-3 mt-6">
                  <Button className="flex-1" size="lg">
                    Read Now
                  </Button>
                  <Button variant="outline" size="lg">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Bookmark className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Book Details - Right Column */}
            <div className="lg:col-span-2">
              {/* Author */}
              <p className="text-sm md:text-base text-gray-600 mb-2">
                {book.authors[0].name}
              </p>

              {/* Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  mb-4 md:mb-6">
                {book.title}
              </h1>

              {/* Categories */}
              <div className="mb-6 md:mb-8">
                <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-3">
                  Categories
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                  {book.bookshelves.map((fullCategoryText: string) => {
                    let cleanedText = fullCategoryText
                      .replace("Categories:", "")
                      .trim();

                    const lastColonIndex = cleanedText.lastIndexOf(":");
                    if (lastColonIndex !== -1) {
                      cleanedText = cleanedText
                        .substring(lastColonIndex + 1)
                        .trim();
                    }

                    return <Chip key={fullCategoryText} text={cleanedText} />;
                  })}
                </div>
              </div>

              {/* Summary */}
              <div>
                <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-3">
                  Summary of the story
                </h2>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {book.summaries}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
