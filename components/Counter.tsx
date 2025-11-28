"use client";

import React from "react";

export function Counter() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      {(count > 5) && <p style={{color: 'red'}}>Ban bam nhieu qua roi day</p>}
    </div>
  );
}
