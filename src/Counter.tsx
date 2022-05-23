import React,{ useState } from "react";

// const Counter :React.FunctionComponent<{}> = () => {
const Counter :React.FC<{}> = () => {
  const initialCount: number = 0;
  const [count, setCount] = useState<number>(initialCount);

  const setInitial = () => {
    setCount(initialCount);
  }
  const increment = () => {
    // setCount(count + 1);
    setCount(prevCount => prevCount +1);
  }
  const decrement = () => {
    // setCount(count -1);
    setCount(prevCount => prevCount -1);
  }
  return (
    <div>
      <div>value: {count}</div>
      {/* <button onClick={() => setCount(initialCount)}>Reset</button> */}
      <button onClick={setInitial}>Reset</button>
      {/* <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button> */}
      <button onClick={decrement}>-</button>
      {/* <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button> */}
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter;
