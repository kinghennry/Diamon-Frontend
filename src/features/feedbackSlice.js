import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../app/api";

//deletefeedback
export const deleteFeedback = createAsyncThunk(
  "feedback/deleteFeedback",
  async ({ id, toast, history }, { rejectWithValue }) => {
    try {
      const res = await api.deleteFeedback(id);
      toast.success("Feedback Successfully deleted");
      history.push("/");
      return res.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

//updateFeedback
export const updateFeedback = createAsyncThunk(
  "feedback/updateFeedback",
  async ({ id, updatedFeedbackData, history, toast }, { rejectWithValue }) => {
    try {
      const res = await api.updateFeedback(updatedFeedbackData, id);
      toast.success("Feedback Successfully Updated");
      history.push("/");
      return res.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const newFeedback = createAsyncThunk(
  "feedback/newFeedback",
  async ({ updatedFeedbackData, history, toast }, { rejectWithValue }) => {
    try {
      const res = await api.createFeedback(updatedFeedbackData);
      toast.success("Feedback Added Successfully");
      history.push("/");
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getFeedbacks = createAsyncThunk(
  "feedback/getFeedbacks",
  async (page, { rejectWithValue }) => {
    try {
      const res = await api.getFeedbacks(page);
      return res.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

//like feedback
export const likeFeedback = createAsyncThunk(
  "feedback/likeFeedback",
  async ({ _id }, { rejectWithValue }) => {
    try {
      const res = await api.likeFeedback(_id);
      return res.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

//get single feedback
export const getFeedback = createAsyncThunk(
  "feedback/getFeedback",
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.getFeedback(id);
      return res.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

// getUserUpvotes;
export const getUserUpvotes = createAsyncThunk(
  "feedback/getUserUpvotes",
  async (userId, { rejectWithValue }) => {
    try {
      const res = await api.getUserUpvotes(userId);
      return res.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

//search feedbacks.
export const searchFeedbacks = createAsyncThunk(
  "feedback/searchFeedbacks",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const res = await api.getFeedbackBySearch(searchQuery);
      return res.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

const feedbackSlice = createSlice({
  name: "feedback",
  initialState: {
    feedback: {},
    feedbacks: [],
    currentPage: 1,
    numberOfPages: null,
    totalFeedbacks: [],
    userUpVotes: [],
    error: "",
    loading: false,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [newFeedback.pending]: (state) => {
      state.loading = true;
    },
    [newFeedback.fulfilled]: (state, action) => {
      state.loading = false;
      state.feedbacks = [action.payload];
    },
    [newFeedback.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    //get tours
    [getFeedbacks.pending]: (state) => {
      state.loading = true;
    },
    [getFeedbacks.fulfilled]: (state, action) => {
      state.loading = false;
      state.feedbacks = action.payload.data;
      state.numberOfPages = action.payload.numberOfPages;
      state.currentPage = action.payload.currentPage;
      state.totalFeedbacks = action.payload.totalFeedbacks;
    },
    [getFeedbacks.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    //like feedback
    [likeFeedback.pending]: (state) => {},
    [likeFeedback.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { _id },
      } = action.meta;
      if (_id) {
        state.feedbacks = state.feedbacks.map((item) =>
          item._id === _id ? action.payload : item
        );
      }
    },
    [likeFeedback.rejected]: (state, action) => {
      state.error = action.payload.message;
    },
    //single feedback
    [getFeedback.pending]: (state) => {
      state.loading = true;
    },
    [getFeedback.fulfilled]: (state, action) => {
      state.loading = false;
      state.feedback = action.payload;
    },
    [getFeedback.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    //delete feedback
    [deleteFeedback.pending]: (state) => {
      state.loading = true;
    },
    [deleteFeedback.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.feedbacks = state.feedbacks.filter((item) => item._id !== id);
      }
    },
    [deleteFeedback.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    //update feedback
    [updateFeedback.pending]: (state) => {
      state.loading = true;
    },
    [updateFeedback.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.feedbacks = state.feedbacks.map((item) =>
          item._id === id ? action.payload : item
        );
      }
    },
    [updateFeedback.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    //getUserUpvotes

    //get tours by user
    [getUserUpvotes.pending]: (state) => {
      state.loading = true;
    },
    [getUserUpvotes.fulfilled]: (state, action) => {
      state.loading = false;
      state.userUpVotes = action.payload;
    },
    [getUserUpvotes.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    //search feedbacks
    [searchFeedbacks.pending]: (state) => {
      state.loading = true;
    },
    [searchFeedbacks.fulfilled]: (state, action) => {
      state.loading = false;
      state.feedbacks = action.payload;
    },
    [searchFeedbacks.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});
export const { setCurrentPage } = feedbackSlice.actions;
export default feedbackSlice.reducer;
