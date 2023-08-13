import { Col, Jumbotron, Row } from "react-bootstrap";
import Login from "../login/Login";
import CardExample from "../CardExample";

const Home = (props) => {
  return (
    <Jumbotron>
      <Row>
        <Col>   <Login />       </Col>
        <Col>   <CardExample /> </Col>
      </Row>
    </Jumbotron>
  );
}

export default Home;
