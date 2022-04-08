import { useState, useEffect } from "react";
import CardUI from "./cardUI";

export default function Card() {
  const [todos, addTodos] = useState([]);
  const [isloading, setIsloading] = useState(false);
  useEffect(() => {
    const fetchData = async () =>{
      setIsloading(true);
      const res = await fetch(
        'https://hn.algolia.com/api/v1/search?query=react',
      );
      const json = await res.json();
        addTodos(json);
        setIsloading(false);
    };
    fetchData();
  }, [addTodos]);
  return (
    <CardUI>
      {isloading ? <p>Loadding</p> :  
      <ul>
            {todos.map(item => (
              <li key={item.id}>
               <h1>{item.title}</h1>
              <p>{item.body}</p>
              </li>
            ))}
          </ul>}
    </CardUI>
  );
}
