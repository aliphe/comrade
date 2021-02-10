import 'reflect-metadata';

import dotenv from 'dotenv';

import initApi from './interfaces/api';
import initContainer from './application/container';

dotenv.config();

function start() {
  initContainer();

  const app = initApi();

  app.listen(3000, () => console.log('Listening on port 3000'));
}

start();
