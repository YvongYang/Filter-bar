import { withRouter } from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';
import {incrementAsync, increment, decrement} from './actions/test';


const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
  <div>
    <button onClick={onIncrementAsync}>
      Increment after 1 second
    </button>
    {' '}
    <button onClick={onIncrement}>
      Increment
    </button>
    {' '}
    <button onClick={onDecrement}>
      Decrement
    </button>
    <hr />
    <div>
      Clicked: {value} times
    </div>
  </div>

const Test = (props) => {
  return (
   <div>
    <div>
      <label>Saga Test</label>
      <Counter
        value={props.test}
        onIncrement={() => props.increment()}
        onDecrement={() => props.decrement()}
        onIncrementAsync={() => props.incrementAsync()} />
    </div>
    <div>
      <label>This is Mock Server Data</label>
      <span>{props.serverData}</span>
    </div>
   </div>
  );
};

export default connect(({serverData, test}) => {
  return {
    test: test,
    serverData: serverData
  }
}, {
  increment,
  decrement,
  incrementAsync,
  // fetchSeverData
})(withRouter(Test));