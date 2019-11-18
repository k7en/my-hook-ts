import React,{useReducer} from 'react'
import { INCREMENT, DECREMENT } from '../actions'
import counter,{IState} from '../reducers/counter'
import CounterChild from './CounterChild'
const initialState = { count: 0 };

interface IContextProps {
  state: IState;
  dispatch: ({type}:{type:string}) => void;
}

export const AdminStore = React.createContext({} as IContextProps);


const Counter:React.FC = () => {
  const [state, dispatch] = useReducer(counter, initialState);
  const value= { state, dispatch}

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
      <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
      <AdminStore.Provider value={value}>
      <CounterChild />
      </AdminStore.Provider>
    </>
  );
}

export default Counter