import api from './api-config';

export const getAllPosts = async () => {
  try {
    const response = await api.get("/posts");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPost = async (id) => {
  try {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postPost = async (post) => {
  try {
    const response = await api.post("/posts", post);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const putPost = async (id, post) => {
  try {
    const response = await api.put(`/posts/${id}`, post);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    const response = await api.delete(`/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addPostToTopic = async (topicId, id) => {
  const resp = await api.put(`/topics/${topicId}/posts/${id}`);
  return resp.data;
};
