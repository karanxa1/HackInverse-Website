import React from "react";
import ElevatorImage from "../../assets/Elevator.png";

export default function ElevatorAnimation() {
  console.log("ElevatorImage path:", ElevatorImage);

  return (
    <div
      style={{
        backgroundImage: `url(${ElevatorImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    />
  );
}
