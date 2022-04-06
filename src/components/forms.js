import React from "react";
import { useState } from "react";

export default function Forms() {
  const [newTitle, enterTitle] = useState("");
  const [newDescription, enterDescription] = useState("");
  function sumbitHandler() {
    let newTodo = {
      title: newTitle,
      description: newDescription,
    };
    console.log(`new todo entered ${newTodo.title} ${newTodo.description}`);
  }
  return (
    <React.Fragment>
      <div>
        <h2>Title</h2>
        <input type="text" onChange={(e) => enterTitle(e.target.value)} />
        <h2>Descritpion</h2>
        <input type="text" onChange={(e) => enterDescription(e.target.value)} />
        <button onClick={sumbitHandler}>Sumbit</button>
      </div>
    </React.Fragment>
  );
}
