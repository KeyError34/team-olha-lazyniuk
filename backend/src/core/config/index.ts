// export * from './database';
// export * from './development';
// export * from './production';
// export * from './test';

import { config } from 'dotenv';
import path from 'path';

// Load environment-specific .env file
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
const envPath = path.join(__dirname, `../../../${envFile}`); // Adjusted path
// console.log(`Loading environment variables from: ${envPath}`); // Debugging
config({ path: envPath });

type Environment = 'development' | 'production' | 'test';
const env = (process.env.NODE_ENV || 'development') as Environment;

const configurations = {
  development: () => require('./development').default,
  production: () => require('./production').default,
  test: () => require('./test').default,
};

export default configurations[env]();
