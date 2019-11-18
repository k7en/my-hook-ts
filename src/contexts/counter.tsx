import { createContext } from 'react';
import {IState} from '../reducers/counter'

export interface IContextProps {
    state: IState
    dispatch:({type}:{type:string}) => void;
}

const CounterContext = createContext({} as IContextProps)

export default CounterContext