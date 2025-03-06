// tests/setup.ts
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import config from '../core/config/test';

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  console.log('Setting up database connection...');

  try {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    console.log('Connecting to MongoDB URI:', uri);

    await mongoose.connect(uri, { dbName: config.dbName });

    console.log('Database connection established.');
  } catch (error: any) {
    // Type the error as 'any' or a more specific type
    console.error('Error setting up database:', error);
    console.error('Full error object:', JSON.stringify(error, null, 2));
    console.error('Error Stack Trace:', error.stack);

    // More Specific Error Handling (Optional but Recommended):
    if (error.name === 'MongoServerError' && error.code === 8000) {
      console.error('Possible Authentication Error. Check your MongoDB URI.');
    }

    if (error instanceof Error) {
      // Check if it's a standard Error object
      console.error('Error message:', error.message); // Access error.message
    }
  }
});

afterAll(async () => {
  console.log('Tearing down database connection...'); // Confirmation log

  try {
    await mongoose.disconnect();
    await mongoServer.stop();
    console.log('Database connection closed.');
  } catch (error) {
    console.error('Error tearing down database:', error);
  }
});

afterEach(async () => {
  console.log('Clearing collections after each test...'); // Confirmation log
  try {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      await collections[key].deleteMany({});
    }
    console.log('Collections cleared.');
  } catch (error) {
    console.error('Error clearing collections:', error);
  }
});
