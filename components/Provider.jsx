import React from 'react';
import {useRouterHistory} from 'react-router';
import {Provider} from 'react-redux';
import createHistory from 'history/lib/createHashHistory';
import {createStore} from 'redux';
import {syncReduxAndRouter} from 'redux-simple-router';
import reducer from '../reducers';

const store = createStore(reducer);
const history = useRouterHistory(createHistory)();

syncReduxAndRouter(history, store);

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

export default ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
