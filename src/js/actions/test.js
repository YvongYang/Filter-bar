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

export function serverDataFetched(data) {
  return {
    type: 'SERVER_DATA_FETCHED',
    data
  };
}