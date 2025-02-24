import mongoose from 'mongoose';
import config from '../src/core/config/test'; // Import test environment config

describe('Configuration', () => {
  it('should connect to the in-memory MongoDB server', async () => {
    // Wait for the connection to be established
    await mongoose.connection.asPromise();
    expect(mongoose.connection.readyState).toBe(1); // 1 means connected
  });

  it('should use the correct test environment configuration', () => {
    expect(config.env).toBe('test');
    expect(config.port).toBe(4000);
    expect(config.dbName).toBe('myapp_test');
  });
});

