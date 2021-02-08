import 'reflect-metadata';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import initApi from './api';
import initContainer from './container';

dotenv.config();

createConnection()
  .then(async (connection) => {
    initContainer(connection);

    const app = initApi();

    app.listen(3000, () => console.log('Listening on port 3000'));
  })
  .catch((error) => console.error(error));
