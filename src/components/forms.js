import React, { useEffect } from "react";
import { useState } from "react";
import Compleated from "./compleated";
import classes from "./css/forms.module.css";



export default function Forms() {
  const [newTitle, enterTitle] = useState("");
  const [newDescription, enterDescription] = useState("");
  const newTodo = {
    title: newTitle,
    description: newDescription,
  };
  function sumbitHandler(e) {
    e.preventDefault();
    
    console.log(`new todo entered ${newTodo.title} ${newTodo.description}`);
    postingData(newTodo);
    <Compleated todo={newTodo} />;
  }

  async function postingData(newTodo) {
    const response = await fetch("https://mytodos-eed82-default-rtdb.firebaseio.com/post.json", {
      method: "POST",
      body: JSON.stringify(newTodo),
      header: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    enterTitle('');
    enterDescription('');
  }


  return (
    <React.Fragment>
      <div className={classes.form}>
        <h3>My Form</h3>
        <form action="" id="myForm">
          <div>
            <label for="">Title</label>
            <input type="text" value={newTitle} onChange={(e) => enterTitle(e.target.value)} />
          </div>
          <div>
            <label for="">Description</label>
            <textarea
              type="text"
              value={newDescription}
              onChange={(e) => enterDescription(e.target.value)}
            ></textarea>
          </div>
          <button onClick={sumbitHandler}>Sumbit</button>
        </form>
      </div>
    </React.Fragment>
  );
}
