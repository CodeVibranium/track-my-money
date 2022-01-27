import { useState } from "react";
import { auth } from "../../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Row, Col, Form, Input, Button, Card, message } from "antd";
const Signup = () => {
  const [clickedBtn, setClickedBtn] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const handleSubmit = async (values) => {
    setLoading(true);
    if (clickedBtn == "Login") {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          values.Email,
          values.Password
        );
        setLoading(false);
        message.success("Logged IN");
      } catch (err) {
        setLoading(false);
        message.error(err);
      }
    } else if (clickedBtn == "Logout") {
      try {
        await signOut(auth);
        setLoading(false);
        message.success("User Logged out !");
      } catch (err) {
        setLoading(false);
        message.error(err);
      }
    } else {
      try {
        setLoading(true);
        const user = await createUserWithEmailAndPassword(
          auth,
          values.Email,
          values.Password
        );
        setLoading(false);
        message.success("Sign In successful");
      } catch (error) {
        setLoading(false);
        message.error(error.message);
        console.log(error.error.message);
      }
    }
  };
  return (
    <Row>
      <Col span={20}>
        <Card title="Login / Signup" hoverable>
          <Form layout="vertical" onFinish={handleSubmit} autoComplete="off">
            <Form.Item label="Email Address" name="Email" className="font-bold">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="Password" className="font-bold">
              <Input.Password />
            </Form.Item>
            <div className="flex">
              <Col span={12}>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    onClick={() => {
                      user ? setClickedBtn("Logout") : setClickedBtn("Login");
                    }}
                    block
                  >
                    {user ? "Log out" : "Log in"}
                  </Button>
                </Form.Item>
              </Col>
              <Col span={11} offset={1}>
                <Form.Item>
                  <Button
                    type="primary"
                    loading={loading}
                    htmlType="submit"
                    onClick={() => {
                      setClickedBtn("Sign_Up");
                    }}
                    block
                  >
                    Sign up
                  </Button>
                </Form.Item>
              </Col>
            </div>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Signup;
