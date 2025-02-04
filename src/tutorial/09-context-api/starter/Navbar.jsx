import { createContext, useContext, useState } from "react"
import NavbarLinks from "./NavbarLinks"




export const  NavbarContext = createContext()
console.log(NavbarContext)

export const useCustomContext = () => useContext(NavbarContext)

const Navbar = () => {

    const [user, setUser] = useState({name : "vignesh"})

    const logout = () => {
        setUser(null)
    }

  return (
    <NavbarContext.Provider value={{user, logout}}>
    <div>
      <NavbarLinks/>
    </div>
    </NavbarContext.Provider>
    
  )
}

export default Navbar
