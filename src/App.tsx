import React from "react";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import KnightPositionForm from "./components/KnightPositionForm";
import Board from "./components/Board";

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Row>
          <Col xs={12} md={4}>
            <KnightPositionForm />
          </Col>
          <Col xs={12} md={8}>
            <Board />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
