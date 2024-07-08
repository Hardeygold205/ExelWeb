const SkeletonCryptoRow = () => (
  <div className="flex justify-between items-center py-1 px-4 animate-pulse">
    <div className="flex items-center">
      <div className="w-6 h-6 bg-gray-300 rounded-full mt-1 p-1"></div>
      <div className="ml-2">
        <div className="h-4 bg-gray-300 rounded w-24 mb-1"></div>
        <div className="h-4 bg-gray-300 rounded w-16 opacity-50"></div>
      </div>
    </div>
    <div className="text-right">
      <div className="h-4 bg-gray-300 rounded w-16 mb-1"></div>
      <div className="h-4 bg-gray-300 rounded w-12"></div>
    </div>
  </div>
);

export default SkeletonCryptoRow;