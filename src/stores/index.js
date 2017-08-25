import { createStore } from 'redux';

const store = (state = { result: {} }, action) => {
  const { type, payload } = action
  switch (type) {
  case 'VOTE':
    const name = payload
    const { result } = state
    const count = result[name] | 0
    return {
      ...state, result: { ...result, [name]: count + 1 }
    }
  default:
    return state
  }
}

export default createStore(store);
