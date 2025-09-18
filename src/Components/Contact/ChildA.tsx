import React from "react";

interface Child1Props {
  increment: () => void;
}

export function ChildA({ increment }: Child1Props) {
  return (
    <div className="child1">
      <h2>Child 1</h2>
      <button onClick={increment}>Increase Counter in GrandChild</button>
    </div>
  );
}
