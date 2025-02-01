import { useEffect } from "react";
import { useState } from "react";



const url = 'https://api.github.com/users';

const FetchData = () => {

  const [user, setUser] = useState([])

  useEffect(() => {
  
    const fetchData = async () => {
      try {
        const res = await fetch(url)
      const data = await res.json()
      setUser(data)
      console.log(data)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
  }, [])

  return(
   <section>
    <h3>Github Users</h3>
    <ul className="users">
        {user.map((person) => {
          const {login, id, avatar_url, html_url } = person
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })}
    </ul>
   </section>
  )
};
export default FetchData;
