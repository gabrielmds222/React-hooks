import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function Increment(){
    setCount((prevState) => prevState + 1);
  } 
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>Incremento</button>
    </div>
  );
}

export default App;
