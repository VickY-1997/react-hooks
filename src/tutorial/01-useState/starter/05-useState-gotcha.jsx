import { useState } from "react";




const UseStateGotcha = () => {

  const [value, setValue] = useState(0)

  const add = () => {
    setValue((currentValue) => {
      const newValue = currentValue + 1
      return newValue
    })
  }
console.log(value)
  return (
    <div>
      <h3>{value}</h3>
      <button className="btn" onClick={add}>Increase</button>
    </div>
  )
};

export default UseStateGotcha;
