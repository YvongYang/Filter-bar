import {all} from 'redux-saga/effects'
import {hello} from './hello-saga';
import {watchIncrementAsync} from './test-saga';

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    hello(),
    watchIncrementAsync()
  ])
}