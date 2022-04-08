import Card from "./card";

import Forms from "./forms";
import { useState } from "react";
import Pratice from "./pratice";
import Compleated from "./compleated";

export default function Display() {
  const [showForm, formDisplay] = useState(false);
  const [compleated, isCompleated] = useState(true);
  return (
    <>
      <button onClick={() => formDisplay(true)}>Create a new toDo</button>
      {!showForm ? (
        <div>
          <p>Sort here</p>
          <select>
            <option>low to high date</option>
            <option>low to high priotoierty </option>
          </select>
          <Pratice />
        </div>
      ) : (
        <Forms />
      )}
      {compleated && <></>}
    </>
  );
}
