import { Col, Jumbotron, Row } from "react-bootstrap";
import Header from "../Header";
import Login from "../login/Login";
import Footer from "../Footer";
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
