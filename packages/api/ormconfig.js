module.exports = {
  type: 'mongodb',
  url: process.env.DATABASE_URL,
  authSource: 'admin',
  synchronize: true,
  logging: false,
  useUnifiedTopology: true,
  useCreateIndexes: true,
  entities: ['src/entities/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
  subscribers: ['src/subscribers/**/*.ts'],

  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
    subscribersDir: 'src/subscribers',
  },
};
