import { useState } from 'react';

export const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchTerm);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          className="w-full h-full border-2"
          id="search-input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </form>
    </div>
  );
};
