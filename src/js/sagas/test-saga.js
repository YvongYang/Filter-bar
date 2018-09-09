import { delay } from 'redux-saga'
import { put, takeEvery, actionChannel , call} from 'redux-saga/effects'
import * as actions from '../actions/test';
import { load } from 'babel-register/lib/cache';
import { log } from 'util';
require('isomorphic-fetch');

export function fetchServerData(data) {
  return fetch('test/server', {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  .then(function(response) {
		if (response.status >= 400) {
			throw new Error("Bad response from server");
    }
    
    const contentType = response.headers.get('Content-Type');

    if(contentType.includes('application/json')) {
      return response.json();
    } else {
      return response;
    }

		// return response.json();
	})
	.then(function(stories) {
		console.log(stories);
	});
}

export function* incrementAsync() {
  yield delay(1000);
  yield put(actions.increment());
  try {
    const data = yield call(fetchServerData);  
    yield put(actions.serverDataFetched(data.context)); 
  } catch (error) {
    console.log(error);
  }
}

export function* watchIncrementAsync() {
  //actionChannel(pattern, [buffer])
  //创建一个 Effect，用来命令 middleware 通过一个事件 channel 对匹配 pattern的action 进行排序。 
  //作为可选项，你也可以提供一个 buffer 来控制如何缓存排序的 actions。
  const getFunctionAction = yield actionChannel(actions.INCREMENT_ASYNC);

 /**
  * take(pattern): 允许多个任务同时启动，如果前一个任务还未结束，可启动一个新任务，也就是说非阻塞。
  * 创建一个 Effect 描述信息，用来命令 middleware 在 Store 上等待指定的 action。 
  * 在发起与 pattern 匹配的 action 之前，Generator 将暂停。(阻塞式)
  */
  /**
   * take(channel)
   * 创建一个 Effect 描述信息，用来命令 middleware 从指定的 Channel 中等待一条特定消息。 
   * 如果 channel 已经被关闭，那么 Generator 将以与上面 take(pattern) 所描述一致的步骤马上终止。
   */
  /**
   * takeEvery(非阻塞)
   */
  yield takeEvery(getFunctionAction, incrementAsync);
}