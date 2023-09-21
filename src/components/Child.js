import React from "react";

function Child({ count }) {
  console.log("The child component is rerendered");
  return (
    <div>
      <h1>Child Count is: {count}</h1>
    </div>
  );
}

export default React.memo(Child);
