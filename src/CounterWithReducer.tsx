import React,{ useReducer } from "react";

type ActionType = {
  type: 'increment' | 'decrement' | 'reset'
};
type StateType = {
  count: number;
}

const initialState: StateType = {count: 0};

function reducer(state: StateType, action: ActionType): StateType | never {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return {count: initialState.count};
    default:
      throw new Error();
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'reset'})}>reset</button>
    </div>
  );
}

export default CounterWithReducer;
