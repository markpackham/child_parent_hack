import React from "react";
import "./Child.css";

export default function Child(props) {
  return (
    <div className="child">
      <h1>Child</h1>
      <button onClick={() => props.changeWord("Meow")}>
        Click to change the title
      </button>
    </div>
  );
}
