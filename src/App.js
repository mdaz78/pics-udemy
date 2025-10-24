import { SearchBar } from '@components/SearchBar';
import { useState } from 'react';
import { searchImages } from './api';
import ImageList from './components/ImageList';

const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const response = await searchImages(term);
    setImages(response);
  };

  return (
    <div className="text-2xl">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
