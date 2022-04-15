import React, { Component } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import logo from './logo192.png';


export default class header extends Component {
    render() {
        return (
            <>
                <Navbar  fixed="top" expand="md" bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0">
                            <Nav.Link href="/">Главная</Nav.Link>
                            <Nav.Link href="/about">О нас</Nav.Link>
                            <Nav.Link href="/contacts">Контакты</Nav.Link>
                            <Nav.Link href="/blog">Блог</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="text"
                                placeholder="Поиск"
                                className="me-sm-2"
                            />
                            <Button variant="outline-info">Поиск</Button>
                        </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}
