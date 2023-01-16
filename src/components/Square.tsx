import React from "react";

function Square({
  knightPos,
  validStep,
  isBlack,
  children,
}: {
  knightPos: boolean;
  validStep: boolean;
  isBlack: boolean;
  children?: React.ReactNode;
}) {
  let backgroundColor = isBlack ? "black" : "white";
  const color = isBlack ? "white" : "black";
  backgroundColor = knightPos ? "red" : backgroundColor;
  backgroundColor = validStep ? "green" : backgroundColor;

  return (
    <div
      className="d-flex justify-content-center align-items-center square"
      style={{ backgroundColor, color }}
    >
      {children}
    </div>
  );
}

export default Square;
