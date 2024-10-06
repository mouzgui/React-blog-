import React from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context/DataContext";
import { deletePost } from "./api/axios";
import { useNavigate } from "react-router-dom";

const PostPage = () => {
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      const deletedPost = await deletePost(id);
      console.log(`post id: ${id}`);
      if (deletedPost) {
        const newPost = posts.filter((post) => post.id !== id);
        setPosts(newPost);
        navigate("/");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <>
      {post && (
        <article
          key={post.id}
          className="bg-white border border-gray-200 rounded-lg shadow-md p-6 transition-shadow duration-200 ease-in-out hover:shadow-xl"
        >
          <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
          <h3 className="text-gray-500 text-sm mb-4">{post.dateTime}</h3>
          <p className="text-gray-700 leading-relaxed">{post.body}</p>
          <button
            className="bg-red-500 rounded shadow-md text-white px-2 py-1 mt-2 hover:bg-red-600"
            onClick={() => handleDelete(post.id)}
          >
            Delete Post
          </button>
          <Link to={`/edit/${post.id}`}>
            <button className="bg-blue-500 rounded shadow-md text-white px-2 py-1 mt-2 hover:bg-blue-600 ml-2">
              Edit Post
            </button>
          </Link>
        </article>
      )}
      {!post && (
        <div className="flex flex-col justify-center items-center gap-2 mt-24">
          <h1 className="text-4xl font-semibold text-slate-700">
            Post Not Found
          </h1>
          <Link
            to={"/newpost"}
            className="text-xl underline font-semibold text-green-800"
          >
            Click To Craete New Post
          </Link>
        </div>
      )}
    </>
  );
};

export default PostPage;
