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
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
        Picsy Search
      </h1>
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col gap-2">
          <input
            className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:border-gray-400"
            id="search-input"
            value={searchTerm}
            onChange={handleSearchTermChange}
            placeholder="Search for images..."
          />
        </div>
      </form>
    </div>
  );
};
