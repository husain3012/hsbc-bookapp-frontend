import React, { useEffect, useState } from "react";

const UpdateBookModal = ({ onClose, book, updateBook }) => {
  const [bookId, setBookId] = useState();
  const [bookName, setBookName] = useState();
  const [bookAuthor, setBookAuthor] = useState();
  const [bookPrice, setBookPrice] = useState();

  useEffect(() => {
    if(book==null) return;
    setBookId(book.bookId || 0);
    setBookName(book.bookName || "");
    setBookAuthor(book.bookAuthor || "");
    setBookPrice(book.bookPrice || "");
  }, [book]);

  if (book==null) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBook({ bookId, bookName, bookAuthor, bookPrice:parseFloat(bookPrice) });
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl text-gray-200 mb-4">Update Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Book ID
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={bookId}
              onChange={(e) => setBookId(e.target.value)}
              readOnly
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Book Name
            </label>
            <input
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
              type="text"
              className="w-full px-3 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={bookPrice}
              onChange={(e) => setBookPrice(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Update Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBookModal;
