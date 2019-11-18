import React, { useReducer } from 'react'
import { INCREMENT, DECREMENT } from '../actions'
import counter, { initialState} from '../reducers/counter'
import CounterChild from './CounterChild'
import CounterContext from '../contexts/counter'

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(counter, initialState);
  const value = { state, dispatch }

  return (
    <>
      <CounterContext.Provider value={value}>
        Parent Counter: {state.count}
        <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
        <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
        <CounterChild />
      </CounterContext.Provider>
    </>
  );
}

export default Counter