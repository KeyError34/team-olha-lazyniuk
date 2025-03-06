// tests/integration/minimal.test.ts
import mongoose from 'mongoose';

describe('Minimal Database Test', () => {
  it('should connect to the database', async () => {
    expect(mongoose.connection.readyState).toBe(1); // 1 means connected
  });
});
