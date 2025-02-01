import { useState } from "react";




const ErrorExample = () => {

  let count = 0

  const [state, setState] = useState(0)

  const handleCount = () => {
     setState(count++)
  }

  return <div>
            <h1>{state}</h1>
            <button type="button" onClick={handleCount} className="btn">increase</button>
        </div>;
};

export default ErrorExample;
