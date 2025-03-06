// export const mongoConfig = {
//   uri: process.env.MONGO_URI || 'mongodb://localhost:27017',
//   dbName: process.env.MONGO_DB_NAME || 'cities',
// };

import config from './index';
console.log(config.dbUser);
console.log(config.dbPass);
console.log(config.mongoURI);
console.log(config.dbName);
export const mongoConfig = {
  uri:
    `mongodb+srv://${config.dbUser}:${config.dbPass}@${config.mongoURI}/${config.dbName}?retryWrites=true&w=majority` ,
  dbName: config.dbName,
  env: config.env,
};