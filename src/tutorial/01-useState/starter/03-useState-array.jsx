import { useState } from 'react'
import {data} from '../../../data.js'

const UseStateArray = () => {

const [people, setPeople] = useState(data)

const clear = (id) => { 
        const newPerson = people.filter((person) => person.id !== id)
        setPeople(newPerson)
}

  return (
    <div>
        {people.map((person) => {
          const {id, name} = person
          return (
            <div key={id}>
                <h3>{name}</h3>
                <button className='btn' onClick={() => clear(id)}>clear</button>
            </div>
          )
        })}
        <button style={{marginTop: "2rem"}} className='btn' onClick={() => setPeople([])}>clearAll</button>
    </div>
  )
}

export default UseStateArray
