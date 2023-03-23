"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
};

export default Counter;
