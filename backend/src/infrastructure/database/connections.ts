// without test
import mongoose from 'mongoose';
import { mongoConfig } from '../../core/config/database';
export const connectToDatabase = async () => {
  // if (mongoose.connection.readyState === 1) {
  //   // If already connected, reuse the connection
  //   return;
  // }
  try {
    await mongoose.connect(
      `${mongoConfig.uri}`||
          `mongodb://localhost:27017/${mongoConfig.dbName}`,
      {} as mongoose.ConnectOptions,
    );
    const blue = '\x1b[34m';
    const reset = '\x1b[0m';
    console.log(
      `✅ Successfully connected to the ${blue}${mongoConfig.dbName}${reset} database (${blue}${mongoConfig.env} mode${reset})`,
    );
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};
