const config = {
  hash: {
    secret: process.env.HASH_SECRET || '',
  },
  mongo: {
    url: process.env.MONGO_URL || '',
    databaseName: process.env.MONGO_DATABASE_NAME || '',
  },
  jwt: {
    secret: process.env.JWT_SECRET || '',
  },
};

export default config;
