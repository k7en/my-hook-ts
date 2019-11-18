import React from 'react'
import { INCREMENT, DECREMENT } from '../actions'
import Counter, { AdminStore } from './Counter'

const initialState = { count: 0 };
const CounterChild: React.FC = () => {
  const cnt = React.useContext(AdminStore)

  return (
    <>
      {console.log("CounterChild" + JSON.stringify(cnt.state.count))}
      CounterChild:{cnt.state.count}
      <button onClick={() => cnt.dispatch({ type: DECREMENT })}>child -</button>
      <button onClick={() => cnt.dispatch({ type: INCREMENT })}>child +</button>
    </>
  );
}

export default CounterChild