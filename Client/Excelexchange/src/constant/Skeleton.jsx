const SkeletonRow = () => (
  <tr className="animate-pulse">
    <td>
      <div className="h-4 bg-gray-800 rounded w-12"></div>
    </td>
    <td className="flex items-center mt-3">
      <div className="w-6 h-6 bg-gray-800 rounded-full mr-2"></div>
      <div className="h-4 bg-gray-800 rounded w-24"></div>
    </td>
    <td>
      <div className="h-4 bg-gray-800 rounded w-20"></div>
    </td>
    <td>
      <div className="h-4 bg-gray-800 rounded w-28"></div>
    </td>
    <td>
      <div className="h-4 bg-gray-800 rounded w-20"></div>
    </td>
    <td>
      <div className="h-4 bg-gray-800 rounded w-20"></div>
    </td>
    <td>
      <div className="h-8 bg-gray-800 rounded w-16"></div>
    </td>
  </tr>
);

export default SkeletonRow;