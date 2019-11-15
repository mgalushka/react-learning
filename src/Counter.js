import React, { useState } from "react";

function Counter() {
  const [count, setCounter] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCounter(count + 1)}>increase</button>
      <button onClick={() => setCounter(count - 1)}>decrease</button>
    </div>
  );
}

export default Counter;
