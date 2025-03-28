import React, { useEffect, useState } from "react";
import apiService from "../api/apiService";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      apiService.getLiveFeed().then(setPosts);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Live Feed</h2>
      {posts.map((post) => (
        <div key={post.id} className="p-4 border mt-2">
          <h3 className="font-semibold">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
