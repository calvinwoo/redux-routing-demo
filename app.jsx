import React from 'react';
import {render} from 'react-dom';
import {Router, Route, useRouterHistory} from 'react-router';
import createHistory from 'history/lib/createHashHistory';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {syncReduxAndRouter} from 'redux-simple-router';
import {connect} from 'react-redux';

import reducer from './reducers';
import counterActionCreators from './actions/counter';

import App from './components/App.jsx';
import Foo from './components/Foo.jsx';
import Bar from './components/Bar.jsx';
import Box from './components/Box.jsx';

const store = createStore(reducer);
const history = useRouterHistory(createHistory)();

syncReduxAndRouter(history, store);

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path='/' component={App}>
          <Route
            path='foo'
            component={connect(
              state => ({number: state.counter.number}),
              counterActionCreators
            )(Foo)}
          >
            <Route path='box' component={Box} />
          </Route>

          <Route path='bar' component={Bar} />
        </Route>
      </Router>
    </div>
  </Provider>,

  document.getElementById('react-content')
);
