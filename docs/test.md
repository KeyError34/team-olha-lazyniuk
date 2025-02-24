npm install --save-dev jest ts-jest @types/jest supertest @types/supertest mongodb-memory-server

jest.config.js

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).ts'],
  setupFilesAfterEnv: ['./tests/setup.ts'],
};

tests/
├── unit/
│   └── cityService.test.ts
├── integration/
│   └── citiesController.test.ts
└── setup.ts

tests/setup.ts

import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});

tests/unit/cityService.test.ts

import { CityService } from '../../src/domain/cities/services/cityService';
import { CityRepository } from '../../src/domain/cities/repositories/cityRepository';

jest.mock('../../src/domain/cities/repositories/cityRepository');

describe('CityService', () => {
  let cityService: CityService;
  let mockRepository: jest.Mocked<CityRepository>;

  beforeEach(() => {
    mockRepository = new CityRepository() as jest.Mocked<CityRepository>;
    cityService = new CityService(mockRepository);
  });

  it('should create a city', async () => {
    const mockCity = { cityName: 'Berlin', count: 500000 };
    mockRepository.create.mockResolvedValue(mockCity as any);

    const result = await cityService.createCity(mockCity);
    expect(mockRepository.create).toHaveBeenCalledWith(mockCity);
    expect(result.cityName).toBe('Berlin');
  });
});

tests/integration/citiesController.test.ts

import request from 'supertest';
import app from '../../src/app';
import { City } from '../../src/domain/cities/models/city';

describe('Cities API', () => {
  it('GET /cities - should return all cities', async () => {
    // Seed test data
    await City.create([
      { cityName: 'Berlin', count: 500000 },
      { cityName: 'Munich', count: 300000 }
    ]);

    const response = await request(app).get('/cities');
    expect(response.status).toBe(200);
    expect(response.body.cities).toHaveLength(2);
    expect(response.body.totalPages).toBe(1);
  });

  it('POST /cities - should create a new city', async () => {
    const response = await request(app)
      .post('/cities')
      .send({ cityName: 'Hamburg', count: 400000 });
    
    expect(response.status).toBe(201);
    expect(response.body.city.cityName).toBe('Hamburg');
  });
});

"scripts": {
  "test": "NODE_ENV=test jest",
  "test:unit": "NODE_ENV=test jest --testPathPattern=unit",
  "test:integration": "NODE_ENV=test jest --testPathPattern=integration",
  "test:watch": "NODE_ENV=test jest --watch",
  "test:coverage": "NODE_ENV=test jest --coverage"
}

.env.test

MONGO_URI=mongodb://localhost:27017
MONGO_DB_NAME=test_db
PORT=4000

Step 9: Update Your Code for Testability
Make Services Injectable:

// cityService.ts
export class CityService {
  constructor(
    private cityRepository: CityRepository = new CityRepository()
  ) {}
}


Separate Server Creation:

// app.ts
export const createServer = () => {
  const app = express();
  // ... middleware and routes
  return app;
};


# Run all tests
npm test

# Run unit tests only
npm run test:unit

# Run integration tests only
npm run test:integration

# Generate coverage report
npm run test:coverage

