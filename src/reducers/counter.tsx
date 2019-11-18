import { INCREMENT, DECREMENT } from '../actions'

export interface IState{
  count: number
}
export type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' };

  // | { type: 'incrementAmount'; amount: number };

const counter = (state:IState, action:any) => {
  console.log(action.type)
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default counter