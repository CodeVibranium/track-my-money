import { Button, message } from "antd";
import { auth } from "../../Firebase/firebase.config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
const Homepage = () => {
  const navigate = useNavigate();
  const Auth = useAuth();
  const handleLogout = async () => {
    await signOut(auth);
    Auth.logout();
    navigate("/");
  };
  // const userName = Auth.userState.user.email;
  // console.log(userName.substring(0, userName.lastIndexOf("@")));
  return (
    <div className="text-bold text-center text-3xl">
      Welcome
      <Button onClick={handleLogout}>Log out</Button>
    </div>
  );
};

export default Homepage;
