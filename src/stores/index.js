import { createStore } from 'redux';

const store = (state = { result: null }, action) => {
  const { type, payload } = action
  switch (type) {
  case 'VOTE':
    return { ...state, result: payload }
  default:
    return state
  }
}

export default createStore(store);
