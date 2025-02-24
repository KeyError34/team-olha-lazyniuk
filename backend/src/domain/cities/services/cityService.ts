import { CityRepository } from '../repositories/cityRepository';
import { ICity } from '../models/city';

export class CityService {
  private cityRepository: CityRepository;

  // Accept CityRepository as a constructor parameter
  constructor(cityRepository?: CityRepository) {
    // Use the provided repository or create a new one if none is provided
    this.cityRepository = cityRepository || new CityRepository();
  }

  async getCities(search: string = '', page: number = 1, limit: number = 5) {
    const skip = (page - 1) * limit;
    const condition = search ? { cityName: { $regex: new RegExp(search, 'i') } } : {};

    const cities = await this.cityRepository.findAll(condition, limit, skip);
    const totalCities = await this.cityRepository.count(condition);

    return { cities, totalPages: Math.ceil(totalCities / limit), currentPage: page };
  }

  async createCity(cityData: Partial<ICity>) {
    if (!cityData.cityName) {
      throw new Error('City name is required.');
    }
    return this.cityRepository.create(cityData);
  }

  async getCityById(cityId: string) {
    const city = await this.cityRepository.findById(cityId);
    if (!city) {
      throw new Error('City not found.');
    }
    return city;
  }

  async updateCity(cityId: string, updateData: Partial<ICity>) {
    const updatedCity = await this.cityRepository.update(cityId, updateData);
    if (!updatedCity) {
      throw new Error('City not found or update failed.');
    }
    return updatedCity;
  }

  async deleteCity(cityId: string) {
    const deletedCity = await this.cityRepository.delete(cityId);
    if (!deletedCity) {
      throw new Error('City not found or delete failed.');
    }
    return { message: 'City deleted successfully.' };
  }
}
// import { CityRepository } from '../repositories/cityRepository';
// import { ICity } from '../models/city';

// export class CityService {
//   private cityRepository: CityRepository;

//   constructor() {
//     this.cityRepository = new CityRepository();
//   }

//   async getCities(search: string = '', page: number = 1, limit: number = 5) {
//     const skip = (page - 1) * limit;
//     const condition = search ? { cityName: { $regex: new RegExp(search, 'i') } } : {};

//     const cities = await this.cityRepository.findAll(condition, limit, skip);
//     const totalCities = await this.cityRepository.count(condition);

//     return {
//       cities,
//       totalPages: Math.ceil(totalCities / limit),
//       currentPage: page,
//     };
//   }

//   async createCity(cityData: Partial<ICity>) {
//     if (!cityData.cityName) {
//       throw new Error('City name is required.');
//     }
//     return this.cityRepository.create(cityData);
//   }

//   async getCityById(cityId: string) {
//     const city = await this.cityRepository.findById(cityId);
//     if (!city) {
//       throw new Error('City not found.');
//     }
//     return city;
//   }

//   async updateCity(cityId: string, updateData: Partial<ICity>) {
//     const updatedCity = await this.cityRepository.update(cityId, updateData);
//     if (!updatedCity) {
//       throw new Error('City not found or update failed.');
//     }
//     return updatedCity;
//   }

//   async deleteCity(cityId: string) {
//     const deletedCity = await this.cityRepository.delete(cityId);
//     if (!deletedCity) {
//       throw new Error('City not found or delete failed.');
//     }
//     return { message: 'City deleted successfully.' };
//   }
// }
