import React from 'react';
import {render} from 'react-dom';
import Routes from './Routes.jsx';

import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {syncReduxAndRouter} from 'redux-simple-router';

import reducer from './reducers';

const store = createStore(reducer);

syncReduxAndRouter(browserHistory, store);

console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {Routes}
    </Router>
  </Provider>,
  document.getElementById('react-content')
);
