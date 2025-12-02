export async function getBooks() {
  const url = "https://gutendex.com/books/";

  const result = await fetch(url);
  const response = await result.json();
  return response.results;
}
export async function getBookDetails(id: number | undefined) {
  const url = `https://gutendex.com/books/${id}`;

  const result = await fetch(url);
  const response = await result.json();
  return response;
}

export async function searchBook(query: string) {
  const url = `https://gutendex.com/books/?search=${query}`;
  const result = await fetch(url);
  const response = await result.json();
  return response.results;
}
