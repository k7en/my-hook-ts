import React from 'react'
import { INCREMENT, DECREMENT } from '../actions'
import { AdminStore } from './Counter'

const CounterChild: React.FC = () => {
  const cnt = React.useContext(AdminStore)
  return (
    <>
      CounterChild:{cnt.state.count}
      <button onClick={() => cnt.dispatch({ type: DECREMENT })}>child -</button>
      <button onClick={() => cnt.dispatch({ type: INCREMENT })}>child +</button>
    </>
  );
}

export default CounterChild