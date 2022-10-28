import React, { useState } from "react";

export default function updateCounter() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      Counter: {counter}
      <button onClick={() => setCounter(counter++)}>+</button>
      <button onClick={() => setCounter(counter--)}>-</button>
    </div>
  );
}
