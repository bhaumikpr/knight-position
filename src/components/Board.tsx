import React, { useMemo } from "react";
import { KnightPositionType } from "../types";
import Square from "./Square";

function isKnightPosition(j: number, i: number, x: string, y: string) {
  return x !== "" && Number(x) === j && y !== "" && Number(y) === i;
}

const isValidStep = (
  toX: number,
  toY: number,
  x: string,
  y: string
): boolean => {
  if (x !== "" && y !== "") {
    const dx = Math.abs(toX - Number(x)); // if dx is 1, dy needs to be 2
    const dy = Math.abs(toY - Number(y)); // if dx is 2, dy needs to be 1
    return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
  }
  return false;
};

function Board({
  knightPosition: { x, y },
}: {
  knightPosition: KnightPositionType;
}) {
  const chess = useMemo(() => {
    let arr = [];

    for (let i = 0; i < 8; i++) {
      let row = [];
      for (let j = 0; j < 8; j++) {
        const validStep = isValidStep(j, i, x, y);
        const knightPos = isKnightPosition(j, i, x, y);
        row.push(
          <div key={`square-${i}-${j}`} className="square-wrapper">
            <Square
              knightPos={knightPos}
              validStep={validStep}
              isBlack={(i + j) % 2 ? true : false}
            >
              {(knightPos || validStep) && "♘"}
            </Square>
          </div>
        );
      }
      arr.push(row);
    }
    return arr;
  }, [x, y]);

  return <div className="d-flex flex-wrap board">{chess}</div>;
}

export default Board;
