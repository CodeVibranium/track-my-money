import { Navigate } from "react-router-dom";
import { auth } from "../Firebase/firebase.config";

const RequireAuthentication = ({ children }) => {
  if (!auth.currentUser) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RequireAuthentication;
