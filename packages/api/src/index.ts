import 'reflect-metadata';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';

dotenv.config();

createConnection()
  .then(async (connection) => {})
  .catch((error) => console.error(error));
