import React from "react";

interface GrandChildProps {
  count: number;
}

export function GrandChild({ count }: GrandChildProps) {
  return (
    <div className="grandchild">
      <h3>GrandChild</h3>
      <p>Counter: {count}</p>
    </div>
  );
}
