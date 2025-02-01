import { useState } from "react";


const UseStateBasics = () => {

  const [count, setCount] = useState(0)


  return <div className="container">
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)} className="btn">Increase</button>

  </div>
};

export default UseStateBasics;
