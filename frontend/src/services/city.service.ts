import http from "../axios-http";
import CityData from "../types/city.type";

type SearchCitiesProps = {
  totalPages: number;
  currentPage: number;
  cities: CityData[]
};

class CityDataService {

  searchCities(query: string, page: number) {
    return http.get<SearchCitiesProps>(`/cities?search=${query}&page=${page}&limit=5`);
  }

  readCity(id: string) {
    return http.get<CityData>(`/cities/${id}`);
  }

  createCity(data: object) {
    return http.post<CityData>("/cities", data);
  }

  updateCity(data: object, id: string) {
    return http.put<CityData>(`/cities/${id}`, data);
  }

  deleteCity(id: string) {
    return http.delete<CityData>(`/cities/${id}`);
  }

  deleteAll() {
    return http.delete<CityData[]>(`/cities`);
  }
}

export default new CityDataService();
