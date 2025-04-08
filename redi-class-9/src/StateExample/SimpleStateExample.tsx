import { useState } from "react";

export default function Parent() {
  const [count, setCount] = useState(0);

  return <Child count={count} onIncrement={() => setCount(count + 1)} />;
}

function Child({ count, onIncrement }: any) {
  return (
    <div>
      <p>Count from parent: {count}</p>
      <button onClick={onIncrement}>Add</button>
    </div>
  );
}

// import { useState } from "react";

// export default function Parent() {
//   const [count, setCount] = useState(0);

//   return <Child />;
// }

// const Child = () => {
//   const [count, setCount] = useState(0);

//   const onIncrement = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <p>Count from parent: {count}</p>
//       <button onClick={onIncrement}>Add</button>
//     </div>
//   );
// };
