import bodyParser from 'body-parser';
import express from 'express';
import initRouter from './routes';

export default function initApi() {
  const app = express();

  app.use(bodyParser.json());
  app.use(initRouter());

  return app;
}
