import React, { useState } from "react";
import "./App.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import KnightPositionForm from "./components/KnightPositionForm";
import Board from "./components/Board";
import { KnightPositionType } from "./types";

function App() {
  const [knightPosition, setKnightPosition] = useState<KnightPositionType>({
    x: "",
    y: "",
  });

  const onSubmit = ({ x, y }: KnightPositionType) => {
    setKnightPosition({ x, y });
  };

  return (
    <div>
      <Container>
        <Header />
        <Row>
          <Col xs={12} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Knight Position</Card.Title>
                <KnightPositionForm onSubmit={onSubmit} />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={8}>
            <Board knightPosition={knightPosition} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
