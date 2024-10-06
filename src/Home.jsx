import React from "react";
import Feed from "./Feed";
import DataContext from "./context/DataContext";
import { useContext } from "react";

const Home = () => {
  const { searchResult } = useContext(DataContext);
  return (
    <div>
      {searchResult.length ? (
        <Feed posts={searchResult} />
      ) : (
        <p className="text-center text-2xl font-semibold text-slate-600 mt-24">
          No Posts
        </p>
      )}
    </div>
  );
};

export default Home;
