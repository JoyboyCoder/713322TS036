const API_URL = "https://your-api-url.com";

const apiService = {
  getTopUsers: async () => {
    const response = await fetch(`${API_URL}/top-users`);
    return response.json();
  },
  getTrendingPosts: async () => {
    const response = await fetch(`${API_URL}/trending-posts`);
    return response.json();
  },
  getLiveFeed: async () => {
    const response = await fetch(`${API_URL}/feed`);
    return response.json();
  },
};

export default apiService;