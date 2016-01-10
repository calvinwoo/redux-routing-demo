import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
app.set('title', 'Demo');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/public', express.static(__dirname + '/public'));
app.use('/', routes);

http
  .createServer(app)
  .listen(8000, () => {
    console.log('Server started on 8000');
  });
