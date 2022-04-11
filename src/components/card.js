import { useState, useEffect } from "react";
import CardUI from "./cardUI";

export default function Card() {
  const [todos, addTodos] = useState([]);
  const [isloading, setIsloading] = useState(false);

  async function deleteHandler(id) {
    const response = await fetch(
      `https://mytodos-eed82-default-rtdb.firebaseio.com/post/${id}.json`,
      {
        method: "DELETE",
        body: JSON.stringify(id),
        header: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    fetchData();
  }

  const fetchData = async () => {
    setIsloading(true);
    const res = await fetch(
      "https://mytodos-eed82-default-rtdb.firebaseio.com/post.json"
    );
    const json = await res.json();
    //convert array of objects
    const newTodos = [];
    for (const key in json) {
      const todo = {
        id: key,
        ...json[key],
      };
      newTodos.push(todo);
    }
    addTodos(newTodos);
    console.log(json);
    setIsloading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <CardUI className="form">
      {isloading ? (
        <p>Loadding</p>
      ) : (
        <ul>
          {todos.length === 0 ? <p>no todos</p> : todos.map((item, i) => (
            <li onClick={() => deleteHandler(item.id)} key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </CardUI>
  );
}
