import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import Routes from './Routes.jsx';

import Base from './components/Base.jsx';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';

const app = express();
app.set('title', 'Demo');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/public', express.static(__dirname + '/public'));

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

app.use((req, res) => {
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

http
  .createServer(app)
  .listen(8000, () => {
    console.log('Server started on 8000');
  });
