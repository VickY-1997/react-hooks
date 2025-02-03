import { useState } from "react"

const UserChallenge = () => {

  const [user, setUser] = useState(null)

  const login = () => {
    setUser({name : "vignesh"})
  }
  const logout = () => {
    setUser(null)
  }

  return (
    <div>
      {user ? (
        <div>
          <h3>Hi, {user.name}</h3>
          <button className="btn" onClick={logout}>Logout</button>
        </div>
      ) 
      :
      (
        <div>
          <h3>Please Login</h3>
          <button onClick={login} className="btn">Login</button>
        </div>
      )
      }
    </div>
  )
}

export default UserChallenge
