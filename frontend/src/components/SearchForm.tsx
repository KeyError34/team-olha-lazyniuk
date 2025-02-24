import React, { useState } from 'react';
import './SearchForm.css';

type SearchFormProps = {
  onSearch: (query: string) => void;
};

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter city name"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
