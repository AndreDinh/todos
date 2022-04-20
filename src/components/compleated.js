import React from "react";
import CardUI from "./cardUI";
export default function Compleated(props) {
  console.log(`props ${props.todo.title}`);
  return (
    <CardUI>
      <h2>Your new todo is </h2>
      <h3>{props.todo.title}</h3>
      <p>{props.todo.description}</p>
      <button>Close</button>
      </CardUI>
  );
}
