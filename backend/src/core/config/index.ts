// export * from './database';
// export * from './development';
// export * from './production';
// export * from './test';

import path from 'path';
import { fileURLToPath } from 'url';

//  dotenv as ESM 
import * as dotenv from 'dotenv';

// Load environment-specific .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envName = process.env.NODE_ENV || 'development'; 
const envFile = `.env.${envName}`;
const envPath = path.resolve(__dirname, '../../../', envFile);// Adjusted path

console.log(`Loading environment variables from: ${envPath}`); // Debugging

// Load environment variables via asynchronous import
dotenv.config({ path: envPath });

console.log('Loaded environment variables:', process.env.PORT, process.env.NODE_ENV);

type Environment = 'development' | 'production' | 'test';
const env = (process.env.NODE_ENV || 'development') as Environment;
console.log(env);

const configurations = {
  development: async () => (await import('./development.js')).default,
  production: async () => (await import('./production.js')).default,
  test: async () => (await import('./test.js')).default,
};

export default await configurations[env]();