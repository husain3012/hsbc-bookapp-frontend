import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className=" text-gray-100  flex flex-col items-center justify-center p-6">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-400 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
