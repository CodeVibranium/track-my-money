import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { auth } from "../../Firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase.config";
const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const Auth = useAuth();
  const navigate = useNavigate();

  const handleLogIn = async (values) => {
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.Password,
        values.userName
      );
      Auth.signup(user);
      setLoading(false);
      navigate("/home");

      const addUser = await setDoc(
        doc(db, "Users", String(user._tokenResponse.localId)),
        {
          Amout: 0,
          Description: "",
          Type: "",
        }
      );
      console.log(addUser, "user add");
      message.success(`${values.userName} Logged In`);
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  return (
    <Form layout="vertical" onFinish={handleLogIn}>
      <Form.Item label="User name" name="userName" className="font-bold">
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="email" className="font-bold">
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="Password" className="font-bold">
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading} block>
          Sign up
        </Button>
      </Form.Item>
      {errorMessage && <p>{errorMessage}</p>}
    </Form>
  );
};

export default Signup;
