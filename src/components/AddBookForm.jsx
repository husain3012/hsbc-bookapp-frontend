import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateBook } from "../utils/validate.js";
const AddBookForm = () => {
  const [bookId, setBookId] = useState(null);
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const [errorQueue, setErrorQueue] = useState([]);

  //  remove error after 5 seconds

  useEffect(() => {
    if (errorQueue.length === 0) return;
    const timer = setTimeout(() => {
      setErrorQueue((prev) => prev.slice(1));
    }, 2000);
    return () => clearTimeout(timer);
  }, [errorQueue]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const book = {
        bookId,
        bookName,
        bookAuthor,
        bookPrice,
      };
      
      const errors = validateBook(book);
      if (errors.length > 0) {
        setErrorQueue((prev) => [...prev, ...errors]);
        return;
      }
      const response = await axios.post("/book", {
        bookId,
        bookName,
        bookAuthor,
        bookPrice: parseFloat(bookPrice),
      });
      setBookId(null);
      setBookName("");
      setBookAuthor("");
      setBookPrice("");
      if (response.status === 200) {
        navigate("/books");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container p-4 max-w-lg">
      <form
        className="bg-gray-800 p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-2xl text-gray-200 mb-6">Add Book</h1>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2">
            Book ID
          </label>
          <input
            required
            disabled={loading}
            type="number"
            className="w-full px-3 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2">
            Book Name
          </label>
          <input
            disabled={loading}
            type="text"
            className="w-full px-3 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2">
            Book Author
          </label>
          <input
            disabled={loading}
            type="text"
            className="w-full px-3 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={bookAuthor}
            onChange={(e) => setBookAuthor(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-bold mb-2">
            Book Price
          </label>
          <input
            disabled={loading}
            type="text"
            className="w-full px-3 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={bookPrice}
            onChange={(e) => setBookPrice(e.target.value)}
          />
        </div>
        <button
          disabled={loading}
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Book
        </button>
      </form>

      {/* errors */}
      {/*  */}
      <div className="mt-4 flex flex-col">
        {errorQueue.map((error, index) => (
          <div
            key={index}
            className="p-2 border-l-4 border-red-500 bg-red-100 text-red-900 border-2"
          >
            <p>{error.message}</p>
          </div>
        ))}
      </div>


    </div>
  );
};

export default AddBookForm;
