import React from "react";
import { GrandChild } from "./GrandChild";

interface Child2Props {
  count: number;
}

export function ChildB({ count }: Child2Props) {
  return (
    <div className="child2">
      <h2>Child 2</h2>
      <GrandChild count={count} />
    </div>
  );
}
