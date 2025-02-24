export default {
  env: 'development',
  port: parseInt(process.env.PORT || '3000', 10),
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017',
  dbName: process.env.MONGO_DB_NAME || 'myapp_dev',
};
