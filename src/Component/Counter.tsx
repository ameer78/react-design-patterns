import React from "react";
import useCounter from "../Hooks/useCounter";
import CounterDisplay from "./CounterDisplay";

const Counter: React.FC = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <CounterDisplay count={count} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
