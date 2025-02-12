import { useState } from "react";

const MultipleInputs = () => {

  const [user, setUser] = useState({
    name : "",
    email : "",
    password : ""
  })

  const handleUser = (e) => {
    setUser({...user, [e.target.name] : e.target.value})
  }

  const handleForm = (e) => {
    e.preventDefault()
    console.log(user)
  }

  return (
    <div>
      <form className='form' onSubmit={handleForm}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' onChange={handleUser} value={user.name} name="name" />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' onChange={handleUser} value={user.email} name="email" />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' className='form-input' id='password' onChange={handleUser} value={user.password} name="password" />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
