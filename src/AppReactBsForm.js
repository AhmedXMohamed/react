
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Container, Form, Button} from 'react-bootstrap'
  
import React from 'react';
import './App.css';
  
export default function AppReactBs() {
  return (
      <Container>
     
        <Jumbotron className="Jumbotron">
            <h1>Welcome to Fasttrack Technology Academy</h1>
        </Jumbotron>

        <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
             </Form>

      </Container>


  );
}