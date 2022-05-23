import React,{ useState, useRef, useEffect } from "react";

// const Counter :React.FunctionComponent<{}> = () => {
const Counter :React.FC<{}> = () => {
  const initialCount: number = 0;
  const [count, setCount] = useState<number>(initialCount);
  const renderTimes = useRef<number>(0);
  useEffect(() => {
    console.log('render was done.');
    renderTimes.current++;
  });

  const setInitial = () => {
    setCount(initialCount);
  }
  const increment = () => {
    // setCount(count + 1);
    setCount(prevCount => prevCount +1);
    // renderTimes.current++;
  }
  const decrement = () => {
    // setCount(count -1);
    setCount(prevCount => prevCount -1);
    // renderTimes.current++;
  };

  const ref = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    // const current = ref.current;
    // if(current != null) current.focus();
    ref.current?.focus();
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
      <div>This component was re-renderd {renderTimes.current} times!</div>
      <input ref={ref} type='text'></input>
      <button onClick={focusInput}>Click Me!</button>
    </div>
  )
}

export default Counter;
