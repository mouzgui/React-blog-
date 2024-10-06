import { createContext, useEffect, useState } from "react";
import { getPosts } from "../api/axios";

//
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const postFromServer = await getPosts();
      setPosts(postFromServer);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const filtredPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filtredPosts.reverse());
  }, [posts, search]);

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResult,
        posts,
        setPosts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
