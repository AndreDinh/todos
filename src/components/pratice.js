// https://www.mariokandut.com/how-to-handle-errors-and-data-loading-state-with-react-hooks/
import React, { useState, useEffect } from "react";
import "./css/card.module.css";
export default function Pratice() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch(
        "https://hn.algolia.com/api/v1/search?query=react"
      );
      const json = await res.json();
      setData(json.hits);
      setIsLoading(false);
    };
    fetchData();
  }, [setData]);

  return (
    <React.Fragment>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <h2>My Todos</h2>
          <ul>
            {data.map((item) => (
              <li key={item.ObjectId}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </>
      )}
    </React.Fragment>
  );
}
