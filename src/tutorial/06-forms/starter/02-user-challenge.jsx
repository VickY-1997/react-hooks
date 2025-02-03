import { useState } from "react";
import {data} from '../../../data'


const UserChallenge = () => {

  const [name, setName] = useState("")
  const [user, setUser] = useState(data)

  const handleForm = (e) => {
      e.preventDefault()
      if(!name) return;
      const fakeId = Date.now()
      const newUser = {id : fakeId, name : name}
      const updatedUser = [...user, newUser]
      setUser(updatedUser)
  }

  const removeUser = (id) => {
    const updatedUser = user.filter((person) => person.id !== id)
    setUser(updatedUser)
  }

  return (
    <div>
      <form className='form' onSubmit={handleForm}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' onChange={(e) => setName(e.target.value)} value={name} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
      <h1>User List</h1>
      {user.map((person) => {
        const {id, name} = person
        return (
          <>
            <div key={id}>
              <h2>{name}</h2>
              <button className="btn" onClick={() => removeUser(id)}>Remove</button>
          </div>
          
          </>
        )
      })}
      
    </div>
  );
};
export default UserChallenge;
