import { Button, Layout, Menu, Row, Col } from "antd";
import { auth } from "../../Firebase/firebase.config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Transactionform from "./TransactionForm";
const Homepage = () => {
  const navigate = useNavigate();
  const Auth = useAuth();
  const { Header, Content, Sider } = Layout;
  const handleLogout = async () => {
    await signOut(auth);
    Auth.logout();
    navigate("/");
  };
  const userName = Auth.userState?.user.email;
  console.log();
  return (
    <div>
      <Layout>
        <Header
          className="flex text-bold text-center text-3xl justify-between bg-gradient-to-r from-green-400 to-green-600 "
          style={{ background: "#16A34A" }}
        >
          <div>Track Finance.</div>
          <Menu
            mode="horizontal"
            className="flex items-center"
            style={{ background: "#16A34A" }}
          >
            <Menu.Item
              key="userName"
              style={{ background: "#16A34A", color: "white" }}
              className="text-white text-xl "
            >
              Welcome, {userName.substring(0, userName.lastIndexOf("@"))}
            </Menu.Item>
            <Menu.Item key="logout-btn" style={{ background: "#16A34A" }}>
              <Button type="primary" onClick={handleLogout}>
                Log out
              </Button>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
      <Row>
        <Col span={16}>Show transactions</Col>
        <Col span={8}>
          <Transactionform />
        </Col>
      </Row>
    </div>
  );
};

export default Homepage;
