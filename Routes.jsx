import React from 'react';
import {Router, Route, useRouterHistory} from 'react-router';
import createHistory from 'history/lib/createHashHistory';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {syncReduxAndRouter} from 'redux-simple-router';
import {connect} from 'react-redux';

import reducer from './reducers';
import counterActionCreators from './actions/counter';

import App from './components/App.jsx';
import Count from './components/Count.jsx';
import About from './components/About.jsx';
import Box from './components/Box.jsx';

const store = createStore(reducer);
const history = useRouterHistory(createHistory)();

syncReduxAndRouter(history, store);

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

export default (
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path='/' component={App}>
          <Route
            path='count'
            component={connect(
              state => ({number: state.counter.number}),
              counterActionCreators
            )(Count)}
          >
            <Route
              path='box'
              component={connect(
                state => ({number: state.counter.number}),
                counterActionCreators
              )(Box)}
            />
          </Route>

          <Route path='about' component={About} />
        </Route>
      </Router>
    </div>
  </Provider>
);
