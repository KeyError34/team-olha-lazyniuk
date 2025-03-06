import request from 'supertest';
import app from '../../app';
import { City } from '../../domain/cities/models/city';

describe('Cities API', () => {
  it('GET /cities - should return all cities', async () => {
    // Seed test data
    await City.create([
      { cityName: 'Berlin', count: 500000 },
      { cityName: 'Munich', count: 300000 },
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
