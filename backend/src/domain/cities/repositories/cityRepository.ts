import { City, ICity } from '../models/city';

export class CityRepository {
  async findAll(condition: any = {}, limit: number = 10, skip: number = 0): Promise<ICity[]> {
    return City.find(condition).limit(limit).skip(skip);
  }

  async count(condition: any = {}): Promise<number> {
    return City.countDocuments(condition);
  }

  async create(cityData: Partial<ICity>): Promise<ICity> {
    return new City(cityData).save();
  }

  async findById(id: string): Promise<ICity | null> {
    return City.findById(id);
  }

  async update(id: string, updateData: Partial<ICity>): Promise<ICity | null> {
    return City.findByIdAndUpdate(id, updateData, { new: true });
  }

  async delete(id: string): Promise<ICity | null> {
    return City.findByIdAndDelete(id);
  }
}
