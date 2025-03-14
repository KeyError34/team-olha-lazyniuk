// export const mongoConfig = {
//   uri: process.env.MONGO_URI || 'mongodb://localhost:27017',
//   dbName: process.env.MONGO_DB_NAME || 'cities',
// };

import config from './index.js';
console.log('dbUser', config.dbUser);
console.log("dbPass",config.dbPass);
console.log('mongoURI', config.mongoURI);
console.log('dbName', config.dbName);
export const mongoConfig = {
  uri: `mongodb+srv://${config.dbUser}:${config.dbPass}@${config.mongoURI}/${config.dbName}?retryWrites=true&w=majority`,
  dbName: config.dbName,
  env: config.env,
};
