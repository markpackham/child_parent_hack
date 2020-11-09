import React, { useState } from "react";
import Child from "./Child";
import "./Parent.css";

export default function Parent() {
  // we need to use React Hooks and a function since you can't pass Props from Child to Parent
  const [word, setWord] = useState("Parent");

  return (
    <div className="parent">
      <h1>{word}</h1>
      <p>
        Hack to manipulate Parent via function in Child learned from
        https://www.youtube.com/watch?v=UrpNtB61qyo
      </p>
      <Child changeWord={(word) => setWord(word)} />
    </div>
  );
}
