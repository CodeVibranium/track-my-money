import { Row, Col, Tabs, Card } from "antd";
import Signup from "./Signup";
import Login from "./Login";
const { TabPane } = Tabs;
const Home = () => {
  return (
    <Row>
      <Col span={24}>
        <div className="flex items-center">
          <Col span={12} className="container text-9xl font-bold ">
            <div className="flex justify-center items-center h-screen  ">
              <h1 className="">
                Track <br /> Finances.
              </h1>
            </div>
          </Col>
          <Col span={10}>
            <Card>
              <Tabs defaultActiveKey="Login">
                <TabPane tab="Log In" key="Login">
                  <Login />
                </TabPane>
                <TabPane tab="Sign Up" key="Signup">
                  <Signup />
                </TabPane>
              </Tabs>
            </Card>
          </Col>
        </div>
      </Col>
    </Row>
  );
};

export default Home;
