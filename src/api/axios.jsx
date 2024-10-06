import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const getPosts = async () => {
  try {
    const response = await api.get("/posts");
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
export const addPost = async (newPost) => {
  try {
    const response = await api.post("/posts", newPost);
    return response.data;
  } catch (error) {
    console.log("Error adding post:", error);
    return null;
  }
};
export const deletePost = async (id) => {
  try {
    const response = await api.delete(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      "Error deleting post:",
      error.response ? error.response.data : error.message
    );
    return null;
  }
};
export const updatePost = async (id, updatedPost) => {
  try {
    const response = await api.put(`posts/${id}`, updatedPost);
    return response.data;
  } catch (error) {
    console.error(
      "Error deleting post:",
      error.response ? error.response.data : error.message
    );
    return null;
  }
};

export default api;
