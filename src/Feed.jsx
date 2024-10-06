import React from "react";
import Post from "./Post";
const Feed = ({ posts }) => {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Feed;
