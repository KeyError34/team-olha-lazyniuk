// export const mongoConfig = {
//   uri: process.env.MONGO_URI || 'mongodb://localhost:27017',
//   dbName: process.env.MONGO_DB_NAME || 'cities',
// };

import config from './index';

export const mongoConfig = {
  uri: config.mongoURI,
  dbName: config.dbName,
  env: config.env,
};
