import React, { useMemo } from "react";
import { KnightPositionType } from "../types";
import Square from "./Square";

function isKnightPosition(i: number, j: number, x: string, y: string) {
  return x !== "" && Number(x) === j && y !== "" && Number(y) === i;
}

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
        row.push(
          <div key={`square-${i}-${j}`} className="square-wrapper">
            <Square isBlack={(i + j) % 2 ? true : false}>
              {isKnightPosition(i, j, x, y) && "♘"}
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
