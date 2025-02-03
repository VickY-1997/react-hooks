
import {people} from '../../../data.js'
import Person from './Person.jsx'

const List = () => {


  return (
    <div className="container">
      <h1>List</h1>
      {people.map((list) => {
        return (
            <Person key={list.name} {...list}/>
        )
      })}
    </div>
  )
}

export default List
