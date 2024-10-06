import React from "react";
import { useContext, useState } from "react";
import { addPost } from "./api/axios";
import DataContext from "./context/DataContext";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const NewPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const { posts, setPosts, setSearch } = useContext(DataContext);
  const navigate = useNavigate();
  const date = new Date();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const newPost = {
      id,
      dateTime: format(date, "MM,dd,yyyy HH:mm:ss"),
      title: postTitle,
      body: postBody,
    };
    const createdPost = await addPost(newPost);
    if (createdPost) {
      setPosts([...posts, newPost]);
      setPostBody("");
      setPostTitle("");
      setSearch("");
      navigate("/");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Create a New Post
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="postTitle"
            className="block text-sm font-medium text-gray-700"
          >
            Post Title
          </label>
          <input
            type="text"
            id="postTitle"
            placeholder="Enter the post title"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="postBody"
            className="block text-sm font-medium text-gray-700"
          >
            Post Body
          </label>
          <textarea
            id="postBody"
            placeholder="Write your post here"
            cols="30"
            rows="10"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-2 bg-indigo-600 text-white font-semibold text-sm rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
