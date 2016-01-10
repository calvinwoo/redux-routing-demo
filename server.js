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

const port = process.env.PORT || 8000;

http
  .createServer(app)
  .listen(port, () => {
    console.log(`Server started on ${port}`);
  });
