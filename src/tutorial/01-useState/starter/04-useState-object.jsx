import { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name : "vicky",
    age : 28,
    role : "developer"
  })
  const {name, age, role} = person

  const vignesh = () => {
    setPerson({name : "vignesh", age : 28, role : "web developer"})
    // setPerson({name : "vijay"})
  }

 

  return(
    <>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h3>Role : {role}</h3>
      <button className='btn' onClick={vignesh}>Show Vicky</button>
    </>
  )
};

export default UseStateObject;
