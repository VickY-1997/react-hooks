import { useState } from "react";

const ControlledInputs = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
      setName(e.target.value)
  }

  const handleForm = (e) => {
    e.preventDefault()
    console.log(`Name : ${name}
       Email : ${email} 
       Password : ${password}`)
  }

  return (
    <form  className="form" onSubmit={handleForm}>
      <h4>Controlled Inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label" >Name</label>
        <input type="text" id="name" className="form-input " value={name} onChange={handleName}/>
      </div>

      <div className="form-row">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" id="email" className="form-input" onChange={(event) => setEmail(event.target.value)} value={email} />
      </div>

      <div className="form-row">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" id="password" className="form-input " onChange={(event) => setPassword(event.target.value)} value={password} />
      </div>
      <button type="submit" className="btn btn-block">Submit</button>
    </form>
  )
};
export default ControlledInputs;
