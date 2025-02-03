import { useEffect, useState } from 'react';


const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {

  
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  const [user,setUser] = useState(null)
console.log(user)
  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(url)
          const user = await res.json()
          setUser(user)
        } catch (error) {
          setError(true)
          console.log(error)
        }
        setLoading(false)
      }
      fetchData()
      
  }, [])

if(isLoading){
  return <div>...Loading</div>
}

if(isError){
return <h3>There was an Error...</h3>
}



  return (
    
    <div> 
        <img style={{width:"150px", borderRadius:'25px'}} src={user.avatar_url} alt={user.name} />
        <h2>{user.name}</h2>
        <h4>work at {user.company}</h4>
        <p>{user.bio}</p>
    </div>
  )
};
export default MultipleReturnsFetchData;
