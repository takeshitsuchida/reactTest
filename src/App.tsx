import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import CounterWithReducer from './CounterWithReducer'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

interface AppProps {
  message?: string;
  description?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div className="App">
      <div>React Typescript</div>
      <div>{ message }</div>
      <h3>Counter</h3>
      <div>
        <Counter />
      </div>
      <h3>CounterWithReducer</h3>
      <div>
        <CounterWithReducer />
      </div>
    </div>
    )
}

App.defaultProps = {
  message: 'Hello, defualtProps!',
  description: 'This is App component'
}

export default App;
