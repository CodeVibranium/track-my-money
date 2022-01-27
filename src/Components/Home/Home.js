import { Row, Col } from "antd";
import Signup from "./Signup";

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
          <Col span={12}>
            <Signup />
          </Col>
        </div>
      </Col>
    </Row>
  );
};

export default Home;
