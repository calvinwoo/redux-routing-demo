import {Router} from 'express';
const router = Router();

import React from 'react';
import {renderToString} from 'react-dom/server';

import {match, RouterContext} from 'react-router';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '../reducers';

import Routes from '../components/Routes.jsx';
import Base from '../components/Base.jsx';

const renderComponentWithBase = (Component, componentProps, initialData) => {
  const store = createStore(reducer);

  const componentHtml = renderToString(
    <Provider store={store}>
      <Component {...componentProps} />
    </Provider>
  );

  const html = renderToString(<Base markup={componentHtml} initialData={initialData} />);

  return '<!DOCTYPE html>' + html;
};

router.use((req, res) => {
  match({routes: Routes, location: req.originalUrl}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      res
        .status(200)
        .send(renderComponentWithBase(RouterContext, renderProps));
    } else {
      res.status(404).send('Not found');
    }
  });
});

export default router;
