import {combineReducers} from 'redux'; 

export function test(state = 1, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 2;
    default:
      return state;
  }
}

export function serverData(state = null, action) {
  switch (action.type) {
    case 'FETCH_SERVER_DATA':
      return action.data;
    default:
      return state;
  }
}

const rootReducers = combineReducers({
  test,
  serverData
});

export default function root(state, action) {
  return rootReducers(state, action);
}