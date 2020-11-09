import React from "react";
import Child from "./Child";
import "./Parent.css";

export default function Parent() {
  return (
    <div className="parent">
      <h1>Parent</h1>
      <p>
        Hack to manipulate Parent via function in Child learned from
        https://www.youtube.com/watch?v=UrpNtB61qyo
      </p>
      <Child />
    </div>
  );
}
