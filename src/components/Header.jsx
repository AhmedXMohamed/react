import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";

const Header = (props) => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/home">My Site</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact Me</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
    );
}

export default Header;
