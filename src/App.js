import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import {
  Error,
  FeedbackDetail,
  YourUpvotes,
  Login,
  Register,
  Feedback,
} from "./pages";
import { NewFeedback, ProtectedRoute } from "./components";
import { setUser } from "./features/authSlice";
function App() {
  const dispatch = useDispatch();
  const account = JSON.parse(localStorage.getItem("profile"));

  React.useEffect(() => {
    dispatch(setUser(account));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/">
          <Feedback />
        </Route>
        <Route exact path="/feedback/search">
          <Feedback />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/create-feedback">
          {/* <ProtectedRoute> */}
          <NewFeedback />
          {/* </ProtectedRoute> */}
        </Route>
        <Route exact path="/edit-feedback/:id">
          <ProtectedRoute>
            <NewFeedback />
          </ProtectedRoute>
        </Route>
        <Route exact path="/feedback-detail/:id">
          <FeedbackDetail />
        </Route>
        <Route exact path="/your-upvotes">
          <ProtectedRoute>
            <YourUpvotes />
          </ProtectedRoute>
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
