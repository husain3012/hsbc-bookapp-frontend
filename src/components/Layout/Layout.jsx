import React from "react";
import { Link } from "react-router-dom";
const Layout = ({ children }) => {
  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Books",
      url: "/books",
    },
    {
      name: "Add Book",
      url: "/add",
    },
   
   
    
  ];
  return (
    <div className="flex flex-col w-screen min-h-screen bg-black text-white " >
      <header className="bg-gray-900 text-gray-100 shadow-md">
       
        <nav className="flex items-center justify-between p-4">
        <div className="container w-fit p-4 flex justify-center">
          <Link to={"/"} className="text-xl font-bold">Book Store</Link>
        </div>

          <ul className="flex justify-center">
            {links.map((link, index) => (
              <li key={index} className="mx-4">
                <a href={link.url} className="text-white hover:text-gray-300">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="container mx-auto p-4">{children}</div>
    </div>
  );
};

export default Layout;
