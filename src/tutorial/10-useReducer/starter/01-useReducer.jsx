import  {  act, useReducer } from 'react';
import { data } from '../../../data';


const defaultState = {
  people : data,
  isLoading : false
}


const CLEAR_LIST = "CLEAR_LIST"
const RESET_LIST = "RESET_LIST"
const REMOVE_LIST = "REMOVE_LIST"

 
const reducer = (state, action) => {
  if(action.type === CLEAR_LIST ){
    return {...state , people : [] }
  }
  if(action.type === RESET_LIST ){
    return {...state , people : data }
  }
  if(action.type === REMOVE_LIST){
    let newPeople = state.people.filter((person) => person.id !== action.payload.id)
    return {...state , people : newPeople }
  }
}





const ReducerBasics = () => {

  const [state, dispatch ] = useReducer(reducer, defaultState)

  const removeItem = (id) => {
    dispatch({type : REMOVE_LIST, payload : {id} })

  };

  const clearAll = () => {
    dispatch({type : CLEAR_LIST})
  }

  const restList = () => {
    dispatch({type : RESET_LIST})
  }
console.log(state)

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
       {state.people.length <1 ?
       (
        <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={restList}
      >
        rest item
      </button>
       ) : 
       (
        <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={clearAll}
      >
        clear items
      </button>
       ) 
       }
    </div>
  );
};

export default ReducerBasics;
