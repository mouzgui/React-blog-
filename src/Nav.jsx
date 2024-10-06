import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const Nav = () => {
  const { search, setSearch } = useContext(DataContext);
  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex space-x-6">
        <Link to="/" className="cursor-pointer hover:text-blue-400">
          Home
        </Link>
        <Link to="/about" className="cursor-pointer hover:text-blue-400">
          About
        </Link>
        <Link to="/newpost" className="cursor-pointer hover:text-blue-400">
          Post
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
