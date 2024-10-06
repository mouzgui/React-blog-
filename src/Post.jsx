import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <>
      <Link to={`posts/${post.id}`}>
        <article className="bg-white border border-gray-200 rounded-lg shadow-md p-6 transition-shadow duration-200 ease-in-out hover:shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
          <h3 className="text-gray-500 text-sm mb-4">{post.dateTime}</h3>
          <p className="text-gray-700 leading-relaxed">
            {post.body.length <= 25
              ? post.body
              : post.body.slice(0, 25) + "..."}
          </p>
        </article>
      </Link>
    </>
  );
};

export default Post;
