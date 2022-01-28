import { useState } from "react";
import { auth } from "../../Firebase/firebase.config";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { Row, Col, Form, Input, Button, Card, message } from "antd";
import { setItem } from "../../LocalStorage";
const Login = () => {
  //states
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const handleSubmit = async (values) => {
    setLoading(true);
    var user;
    try {
      setLoading(true);
      user = await signInWithEmailAndPassword(
        auth,
        values.Email,
        values.Password
      );
      setLoading(false);
      message.success("Sign In successful");
    } catch (error) {
      setLoading(false);
      message.error(error.message);
    }

    let userEmail = String(user.user.email);
    setItem("email", userEmail);
    setItem("userName", userEmail.substring(0, userEmail.lastIndexOf("@")));
  };
  return (
    <Row>
      <Col span={24}>
        <Form layout="vertical" onFinish={handleSubmit} autoComplete="off">
          <Form.Item label="Email Address" name="Email" className="font-bold">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="Password" className="font-bold">
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" loading={loading} htmlType="submit" block>
              Log In
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
