import "./App.css";
import { useState } from "react";

function App() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="counter">
      <button
        className="btnm"
        onClick={() => setStep((ste) => Math.max(1, ste - 1))}
      >
        -
      </button>
      <p>Step: {step}</p>
      <button className="btnp" onClick={() => setStep((ste) => ste + 1)}>
        +
      </button>
      <br />
      <br />
      <button
        className="btnm"
        onClick={() => setCount((co) => Math.max(0, co - step))}
      >
        -
      </button>
      <p>
        Count: <span>{count}</span>
      </p>
      <button className="btnp" onClick={() => setCount((co) => co + step)}>
        +
      </button>
      <br /> <br />
      <p>Date: {count > 0 ? date.toDateString() : "Today"}</p>
    </div>
  );
}

export default App;
