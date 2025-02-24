import React, { useState } from 'react';
import CityDataService from "../services/city.service";

type SearchResultsProps = {
  onSearch: (query?: string) => void; 
};

const AddCity: React.FC<SearchResultsProps> = ({ onSearch }) => {
  const [cityName, setCityName] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  const handleAddCity = async (e: React.FormEvent) => {
    e.preventDefault();
    // await fetch('http://localhost:8000/api/cities', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ cityName, count }),
    // });
    const data: object = {
      cityName: cityName,
      count: count,
    };

    try {
      const response = await CityDataService.createCity(data);
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
    setCityName('');
    setCount(0);
    onSearch(cityName);
  };

  return (
    <form onSubmit={handleAddCity}>
      <input
        type="text"
        placeholder="City Name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Population Count"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <button type="submit">Add City</button>
    </form>
  );
};

export default AddCity;

