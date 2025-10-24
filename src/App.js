import { SearchBar } from '@components/SearchBar';
import { useState } from 'react';
import { searchImages } from './api';
import ImageList from './components/ImageList';
import SkeletonLoader from './components/SkeletonLoader';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (term) => {
    setIsLoading(true);
    const response = await searchImages(term);
    setImages(response);
    setIsLoading(false);
  };

  return (
    <div className="text-2xl">
      <SearchBar onSubmit={handleSubmit} />
      {isLoading ? <SkeletonLoader /> : <ImageList images={images} />}
    </div>
  );
};

export default App;
