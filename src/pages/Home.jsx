import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="flex-grow container mx-auto p-6 text-center">
    <h2 className="text-4xl font-bold mb-4">Welcome to BookStore</h2>
    <div className="mb-8 flex justify-center">
      <img
        src="https://images.unsplash.com/photo-1516295904088-1ff1398c9596?q=80&w=720"
        alt="Bookstore"
        className="rounded-lg shadow-lg w-4/8"
      />
      </div>
    <p className="text-gray-400 mb-8">
      Discover a wide selection of books from various genres. Whether you're
      looking for the latest bestseller or a classic, we have it all.
    </p>
    <Link
      to="/books"
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md"
    >
      Browse Books
    </Link>
  </main>

  )
}

export default Home