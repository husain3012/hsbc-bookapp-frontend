import React, { useState } from "react";
import UpdateBookModal from "./UpdateBookForm";
import { Link } from "react-router-dom";

const BooksTable = ({ books, deleteBook, updateBook }) => {
    const [loadingDelete, setLoadingDelete] = useState(false);
    const [bookToUpdate, setBookToUpdate] = useState(null);

    const handleDelete = async (id) => {
        try {
            setLoadingDelete(true);
            await deleteBook(id);
        } catch (error) {
            console.error(error);
        } finally {
            setLoadingDelete(false);
        }
    }

    const handleUpdate = (book) => {
        setBookToUpdate(book);
   
        
    }

  return (
    <>

    <table className="table table-striped w-full ">
      <div className="container  p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 text-white rounded-lg">
            <thead>
              <tr className="bg-gray-900 text-gray-300 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Book ID</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Author</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-200 text-sm font-light">
              {books.map((book) => (
                <tr
                  key={book.bookId}
                  className="border-b border-gray-700 hover:bg-gray-700"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {book.bookId}
                  </td>
                  <td className="py-3 px-6 text-left">
                    <Link className="text-blue-400" to={`/book/${book.bookId}`}>{book.bookName}</Link>
                  </td>
                  <td className="py-3 px-6 text-left">{book.bookPrice}</td>
                  <td className="py-3 px-6 text-left">{book.bookAuthor}</td>
                  <td className="py-3 px-6 text-center">
                    <button onClick={()=>handleUpdate(book)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2">
                      Update
                    </button>
                    <button onClick={()=>handleDelete(book.bookId)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </table>

    <UpdateBookModal book={bookToUpdate} onClose={()=>{
        setBookToUpdate(null);
    }} updateBook={updateBook} />
    </>

  );
};

export default BooksTable;
