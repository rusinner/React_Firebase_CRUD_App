import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddBook from "./components/AddBook";
import BooksList from "./components/BookList";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddBook />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BooksList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
