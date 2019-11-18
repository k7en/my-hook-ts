import React from 'react'
import { INCREMENT, DECREMENT } from '../actions'
import CounterContext from '../contexts/counter'

const CounterChild: React.FC = () => {
  const cnt = React.useContext(CounterContext)
  return (
    <>
      Child Counter:{cnt.state.count}
      <button onClick={() => cnt.dispatch({ type: DECREMENT })}> -</button>
      <button onClick={() => cnt.dispatch({ type: INCREMENT })}> +</button>
    </>
  );
}

export default CounterChild