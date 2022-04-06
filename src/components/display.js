import Card from "./card";

import Forms from "./forms";
import { useState } from "react";

export default function Display(){
    const [showForm, formDisplay] = useState(true);
    return(
        <> 
        <h1>Display everything</h1>
        <p>Sort here</p>
        <select> 
            <option>low to high date</option>
            <option>low to high priotoierty </option>
        </select>
        <div>
            <h2>Display list here</h2>
            <Card/>
        </div>
        <button onClick={() => formDisplay(false)}>Create a new toDo</button>
        {!showForm && <Forms/>}
        </>
    )
}