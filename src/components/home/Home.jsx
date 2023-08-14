import { Col, Jumbotron, Row } from "react-bootstrap";
import Footer from "../Footer";
import Header from "../Header";
import Login from "../login/Login";
import CardExample from "../CardExample";

const Home = (props) => {
  return (
    <Jumbotron>
      <Header />
      <Row>
        <Col>   <Login />       </Col>
        <Col>   <CardExample /> </Col>
      </Row>
      <Footer />
    </Jumbotron>
  );
}

export default Home;
