import React from "react";

function Square({
  isBlack,
  children,
}: {
  isBlack: boolean;
  children?: React.ReactNode;
}) {
  const backgroundColor = isBlack ? "black" : "white";
  const color = isBlack ? "white" : "black";
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
