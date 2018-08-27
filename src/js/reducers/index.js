export function test(state = 1, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 2;
    default:
      return state;
  }
}

export default function root(state, action) {
  return test(state, action);
}