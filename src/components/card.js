import { useState, useEffect } from "react";
import CardUI from "./cardUI";

export default function Card() {
  const [todos, addTodos] = useState([{}]);
  const [isloading, setIsloading] = useState(false);
  useEffect(() => {
    const grabTodos = async () => {
      
      setIsloading(true);
      console.log(`first call is ${isloading}`);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      
      const data = await response.json();
        
      const newData = data.map((data) => {
        return {
          id: data.id,
          title: data.title,
          description: data.body,
        };
      });
      console.log(newData);
      addTodos(data);
      setIsloading(false);
      console.log(`my todo ${todos}`);
      console.log(`second call ${isloading}`);
      
    }
    grabTodos();
  }, []);

  if(isloading){
    return <h2>loading</h2>
  }

  return (
    <CardUI>
      <ul>
        {todos.map((data) => {
          <li>
            {data.title}
            <p>{data.description}</p>
          </li>;
        })}

</ul>
    </CardUI>
  );
}
