import 'reflect-metadata';

import dotenv from 'dotenv';

import initApi from './interfaces/api';
import initContainer from './application/container';
import config from './config';
import { MongoClient } from 'mongodb';

dotenv.config();

async function start() {
  const client = new MongoClient(config.mongo.url);

  await client.connect();
  const db = client.db(config.mongo.databaseName);

  initContainer(db);

  const app = initApi();

  app.listen(3000, () => console.log('Listening on port 3000'));
}

start();
