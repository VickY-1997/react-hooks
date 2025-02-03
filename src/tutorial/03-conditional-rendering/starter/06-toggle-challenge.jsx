import { useState } from "react";




const ToggleChallenge = () => {

  const [toggle, setToggle] = useState(false);

  const toggleHandle = () => {
    if(toggle){
      setToggle(false)
      return;
    }
    setToggle(true)
  }

  return <div>
    <button className="btn" onClick={toggleHandle}>toggle</button>
    {toggle && <Alert/>}
  </div>
};

const Alert = () => {
  return(
    <div className="alert alert-danger">Hello </div>
  )
}

export default ToggleChallenge;
