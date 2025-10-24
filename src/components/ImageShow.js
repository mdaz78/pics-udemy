function ImageShow({ image }) {
  return (
    <div className="mb-4 break-inside-avoid">
      <div className="rounded-lg overflow-hidden border-2 border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer bg-white">
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
}

export default ImageShow;
