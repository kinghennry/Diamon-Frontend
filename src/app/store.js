import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import navReducer from "../features/navSlice";
import feedbackReducer from "../features/feedbackSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    nav: navReducer,
    feedback: feedbackReducer,
  },
});
