import { INCREMENT, DECREMENT } from '../actions'

export const initialState = {
  count: 0,
  name: "initial"
}

export interface IState {
  count: number,
  name: string
}

const counter = (state: IState, action: any): IState => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1, name: "increment" };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1, name: "decrement"
      };
    default:
      throw new Error();
  }
}

export default counter