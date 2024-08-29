import React, { useEffect, useState } from "react";

import BooksTable from "../components/BooksTable";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loadingData, setLoadingData] = useState(false);


  const fetchBooks = async () => {
    try {
      setLoadingData(true);
      const response = await axios.get("/books");
      console.log(response.data);
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingData(false);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`/book/${id}`);
      setBooks(books.filter((book) => book.bookId !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const updateBook = async ({ bookId, bookName, bookAuthor, bookPrice }) => {
    try {
      const response = await axios.put("/book", {
        bookId,
        bookName,
        bookAuthor,
        bookPrice
      });
      setBooks(
        books.map((book) => (book.bookId === bookId ? response.data : book))
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="flex flex-col">
      
      {/* add spinning loader */}
      {loadingData ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl text-gray-200 mb-4">Loading...</h2>
          </div>
        </div>
      ) : (
        <>
     
        <div className="flex justify-end px-4">
          <Link
            to="/add"
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
          >
            Add Book
          </Link>
        </div>

        <BooksTable
          books={books}
          deleteBook={deleteBook}
          updateBook={updateBook}
        />
        </>

      )}
    </div>
  );
};

export default Books;
