function SkeletonLoader() {
  const skeletonItems = Array.from({ length: 9 }, (_, index) => index);

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 px-6 max-w-2xl mx-auto">
      {skeletonItems.map((item) => (
        <div key={item} className="mb-4 break-inside-avoid">
          <div className="rounded-lg overflow-hidden border-2 border-gray-200 shadow-md bg-white">
            <div className="w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse bg-[length:200%_100%]">
              <div className="aspect-[3/4] w-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkeletonLoader;