import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { auth } from "../../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const handleLogIn = async (values) => {
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.Password,
        values.userName
      );
      setLoading(false);
      message.success(`${values.userName} Logged In`);
    } catch (error) {
      console.log(error.message);
      message.error(error.message);
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
    </Form>
  );
};

export default Signup;
