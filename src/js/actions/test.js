export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';

export function incrementAsync () {
  return {
    type: 'INCREMENT_ASYNC'
  };
}

export function increment () {
  return {
    type: 'INCREMENT'
  };
}

export function decrement () {
  return {
    type: 'DECREMENT'
  };
}

export function fetchServerData(data) {
  return {
    type: 'FETCH_SERVER_DATA',
    data
  };
}