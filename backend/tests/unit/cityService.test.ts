import { CityService } from '../../src/domain/cities/services/cityService';
import { CityRepository } from '../../src/domain/cities/repositories/cityRepository';

// Mock the CityRepository class
jest.mock('../../src/domain/cities/repositories/cityRepository');

describe('CityService', () => {
  let cityService: CityService;
  let mockRepository: jest.Mocked<CityRepository>;

  beforeEach(() => {
    // Create a mock instance of CityRepository
    mockRepository = new CityRepository() as jest.Mocked<CityRepository>;
    // Pass the mock repository to CityService
    cityService = new CityService(mockRepository);
  });

  it('should create a city', async () => {
    // Mock the create method
    const mockCity = { cityName: 'Berlin', count: 500000 };
    mockRepository.create.mockResolvedValue(mockCity as any);

    // Call the method under test
    const result = await cityService.createCity(mockCity);

    // Assertions
    expect(mockRepository.create).toHaveBeenCalledWith(mockCity);
    expect(result.cityName).toBe('Berlin');
  });

  it('should find all cities', async () => {
    // Mock the findAll method
    const mockCities = [
      { cityName: 'Berlin', count: 500000 },
      { cityName: 'Munich', count: 300000 },
    ];
    mockRepository.findAll.mockResolvedValue(mockCities as any);

    // Call the method under test
    const result = await cityService.getCities('', 1, 10);

    // Assertions
    expect(mockRepository.findAll).toHaveBeenCalled();
    expect(result.cities).toHaveLength(2);
  });
});
