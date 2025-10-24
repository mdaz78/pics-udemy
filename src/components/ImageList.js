import ImageShow from './ImageShow';

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 px-6 max-w-2xl mx-auto">
      {renderedImages}
    </div>
  );
}

export default ImageList;
