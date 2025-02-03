import { useState } from "react";

const CleanupFunction = () => {

  const [toggle,setToggle] = useState(false)

  return(
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <NewComponent/>}
    </div>
  )
};

const NewComponent = () => {
  return(
    <h1>Hello newComp</h1>
  )
}
console.log("bew")
export default CleanupFunction;
