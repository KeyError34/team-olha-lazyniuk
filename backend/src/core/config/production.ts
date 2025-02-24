export default {
  env: 'production',
  port: process.env.PORT || 8080,
  mongoURI: process.env.MONGO_URI || 'mongodb://production-db:27017',
  dbName: process.env.MONGO_DB_NAME || 'myapp_prod',
};
