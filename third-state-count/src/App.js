import React, { useState } from "react";
import ReactDom from "react-dom";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div class="App">
      <header>
        <h1>This is the counter Application</h1>
      </header>
      <h2>Current Value of the Counter is {counter}</h2>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button onClick={() => counter >= 10 ? null : setCounter(counter + 1)}>Increment</button>
      <button onClick={() => counter <= 0 ? null : setCounter(counter - 1)}>Decrement</button>
    </div>
  )
}

export default App;