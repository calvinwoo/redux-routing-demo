import React from 'react';
import {Route} from 'react-router';

import {connect} from 'react-redux';
import counterActionCreators from '../actions/counter';

import App from '../components/App.jsx';
import Count from '../components/Count.jsx';
import About from '../components/About.jsx';
import Box from '../components/Box.jsx';

export default (
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
);
