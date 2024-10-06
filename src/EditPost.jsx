import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useContext, useState } from "react";
import DataContext from "./context/DataContext";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { updatePost } from "./api/axios";

const EditPost = () => {
  const navigate = useNavigate();
  const date = new Date();
  const [editBody, setEditBody] = useState("");
  const [editTitle, setEditTitle] = useState("");

  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

  const handleEdit = async (id) => {
    const updatedPost = {
      id,
      dateTime: format(date, "MM,dd,yyyy HH:mm:ss"),
      title: editTitle,
      body: editBody,
    };
    try {
      const response = await updatePost(id, updatedPost);
      if (response) {
        setPosts(posts.map((post) => (post.id === id ? updatedPost : post)));
        navigate("/");
      }
    } catch (error) {
      console.error("Error edeting post: ", error);
    }
  };

  useEffect(() => {
    if (post) {
      setEditBody(post.body);
      setEditTitle(post.title);
    }
  }, [setEditBody, setEditTitle, post]);

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit Post</h2>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label
            htmlFor="editTitle"
            className="block text-sm font-medium text-gray-700"
          >
            Post Title
          </label>
          <input
            type="text"
            id="editTitle"
            placeholder="Enter the post title"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            required
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="editBody"
            className="block text-sm font-medium text-gray-700"
          >
            Post Body
          </label>
          <textarea
            id="editBody"
            placeholder="Write your post here"
            cols="30"
            rows="10"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            required
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="inline-flex items-center px-6 py-2 bg-indigo-600 text-white font-semibold text-sm rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => handleEdit(post.id)}
          >
            Submit Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
