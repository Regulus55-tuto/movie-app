import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import {Container} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";


const Main = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Movie-app</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/movie">Movie List</Nav.Link>
                            <Nav.Link href="/tv">TV List</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Main;