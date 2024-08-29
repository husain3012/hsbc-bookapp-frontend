import { useEffect, useState } from "react";
import logo from "./logo.svg";
import axios from "axios";
import BooksTable from "./components/BooksTable";
import AddBookForm from "./components/AddBookForm";
import Layout from "./components/Layout/Layout";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Book from "./pages/Book";
import NotFound from "./pages/NotFound";
import AddBook from "./pages/AddBook";

axios.defaults.baseURL = "http://localhost:8081/bookrest";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    
    </Layout>
  );
}

export default App;
