import express from 'express';
import initRouter from './routes';

export default function initApi() {
  const app = express();

  app.use(initRouter());

  return app;
}
