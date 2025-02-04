import {useCustomContext} from './Navbar'

const UserContainer = () => {

   const {user, logout} =  useCustomContext()
  return (
    <>
    <div className="user-container">
        {user?<>
            <p>Hi {user?.name}</p>
        <button className="btn" onClick={logout}>Logout</button>
        </> : <p>Please login</p>}
    </div>
    </>
  )
  
}

export default UserContainer
