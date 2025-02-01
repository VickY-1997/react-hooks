import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {

const [isLoading, setLoading] = useState(true)

useEffect(() => {

  setTimeout(() => {
    setLoading(false)
  }, 3000);

},[])

if(isLoading){
  return <div>Loading...</div>
}

  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
