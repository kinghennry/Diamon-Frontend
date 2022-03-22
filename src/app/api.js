import axios from "axios";

const API = axios.create({ baseURL: "https://diamon-backend.herokuapp.com" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

//auth
export const signUp = (formData) => API.post("/user/register", formData);
export const signIn = (formData) => API.post("/user/login", formData);

//createFeedback
export const createFeedback = (feedbackData) =>
  API.post("/feedback", feedbackData);

//get feedbacks
export const getFeedbacks = (page) => API.get(`/feedback?page=${page}`);

//get single feedback
export const getFeedback = (id) => API.get(`/feedback/${id}`);

//delete feedback
export const deleteFeedback = (id) => API.delete(`/feedback/${id}`);

//edit feedback
export const updateFeedback = (updatedFeedbackData, id) =>
  API.patch(`/feedback/${id}`, updatedFeedbackData);

//like feedback
export const likeFeedback = (id) => API.patch(`/feedback/like/${id}`);

//user upvotes

export const getUserUpvotes = (userId) =>
  API.get(`/feedback/yourUpvotes/${userId}`);

//comment feedback
export const comment = (value, id) =>
  API.post(`/feedback/${id}/commentFeedback`, { value });

//search feedback
export const getFeedbackBySearch = (searchQuery) =>
  API.get(`/feedback/search?searchQuery=${searchQuery}`);
