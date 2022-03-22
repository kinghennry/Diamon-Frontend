import { Redirect } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const account = JSON.parse(localStorage.getItem("profile"));

  if (!account) {
    return <Redirect to="/" />;
  }
  return children;
};

export default ProtectedRoute;
