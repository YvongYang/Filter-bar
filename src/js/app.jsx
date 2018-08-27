import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createHashHistory';

import FilterBar from './filter-bar/index.jsx';
import Test from './test';
import reducer from './reducers';
import saga from './sagas';

import '../sass/theme.less';
import '../sass/common.scss';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware()

let store =  createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(saga);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<div>
				<Switch>
					<Route path="/filter-bar" component={FilterBar}/>
					<Route path="/server-test" component={Test}/>
					<Redirect from="*" to="/filter-bar" />
				</Switch>
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);