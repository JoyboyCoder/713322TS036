import React, { useEffect, useState } from "react";
import apiService from "../api/apiService";

const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    apiService.getTrendingPosts().then(setTrendingPosts);
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Trending Posts</h2>
      {trendingPosts.map((post) => (
        <div key={post.id} className="p-4 border mt-2">
          <h3 className="font-semibold">{post.title}</h3>
          <p>{post.body}</p>
          <p className="text-sm text-gray-500">{post.commentsCount} comments</p>
        </div>
      ))}
    </div>
  );
};

export default TrendingPosts;