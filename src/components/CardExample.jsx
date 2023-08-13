import ahmedPhoto from '../images/ahmeddini.jpeg';
import { Card, Button, /* Container */ } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Header } from './Header';
// import { Footer } from './Footer';

const CardExample = (props) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ahmedPhoto} />
                <Card.Body>
                    <Card.Title>Ahmed Dini</Card.Title>
                    <Card.Text>
                        Ahmed Dini is a senior software engineer with 20 years of commercial software development work experience. He is a Full Stack Developer who worked on all areas of development.
                    </Card.Text>
                    <Button variant="primary">View Profile</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default CardExample;
