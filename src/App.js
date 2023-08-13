
import { Col, Jumbotron, Row } from 'react-bootstrap';
import './App.css';
import CardExample from './components/CardExample'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Login from './components/Login';

function App() {
  return (
    <Jumbotron>
      <Header />
      <Row>
        <Col>   <Login /> </Col>
        <Col><CardExample /></Col>
      </Row>
      <Footer />
    </Jumbotron>
  );
}

export default App;
