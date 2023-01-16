import React from "react";
import { KnightPositionType } from "../types";

function Board({ knightPosition }: { knightPosition: KnightPositionType }) {
  return <div>{knightPosition.x}</div>;
}

export default Board;
