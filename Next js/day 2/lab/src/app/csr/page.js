"use client";
import { useState } from "react";



export default function Component() {
  

const [counter, setCounter] = useState(0);

const incrementCounter = () => {
    setCounter(counter + 1);
};

return (
    <div
        
    >
        <div className="d-flex justify-content-center align-items-center flex-column "
        style={{ height: "100vh" }}>
    <div className="p-5 border d-flex justify-content-center align-items-center flex-column gap-3">
    <h1>Counter = {counter}</h1>
    <button className="btn btn-dark" onClick={incrementCounter}>+</button>
    </div>
        </div>
    </div>
);
}
