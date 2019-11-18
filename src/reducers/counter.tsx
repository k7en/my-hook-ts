import { INCREMENT, DECREMENT } from '../actions'

export interface IState{
  count: any
}
function counter(state: any, action: any) {
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