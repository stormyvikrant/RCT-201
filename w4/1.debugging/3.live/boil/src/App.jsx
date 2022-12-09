import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Child from "./components/Child";
import { decrementValue, incrementValue } from "./utils/math.utils";

function App() {
  let random = 0;
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    let a=incrementValue(count)
    console.log(a)
    setCount(a)
  };
  const handleDecrement = () => {
    for (let i = 0; i < 500000000; i++) {
      random += 1;
    }
    let b=decrementValue(count);
    console.log(b)
    setCount(b)
  };
  return (
    <div className="App">
      <h1>Count - {count}</h1>
      <div>
        <button onClick={handleDecrement}> DECREMENT </button>
        <button onClick={handleIncrement}> INCREMENT </button>
      </div>
      <Child />
    </div>
  );
}

export default App;
