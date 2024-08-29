import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBookById = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(`/book/${id}`);
      console.log(response.data);
      setBook(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookById(id);
  }, [id]);

  return (
   
      loading || !book ? (
        <div className="text-2xl">Loading...</div>
      ) : (
        <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg overflow-hidden mx-auto">
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-2">{book.bookName}</h1>
            <h2 className="text-xl text-blue-400 mb-4">by {book.bookAuthor}</h2>
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-bold text-white">
                {book.bookPrice}
              </span>
             
            </div>
            <p className="text-gray-400">Book ID: {book.bookId}</p>
          </div>
        </div>
      )
 
  );
};

export default Book;
