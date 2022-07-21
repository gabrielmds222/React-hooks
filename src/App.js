import React, { useState } from 'react';

function App() {
  // const [count, setCount] = useState(0);
  const [state, setState] = useState({ count: 0, theme: "light" })

  // function Increment(){
  //   setCount((prevState) => prevState + 1);
  // } 

  function Increment(){
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
        theme: 'dark',
      }
    });
  } 
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={Increment}>Incremento</button>
    </div>
  );
}

export default App;
