import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="flex-1 flex-col items-center p-4 md:p-8 lg:p-12 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-lg w-full animate-pulse">
        {/* Skeleton for Image */}
        <div className="bg-gray-200 h-64 w-full mb-4"></div>
        <div className="p-6">
          {/* Skeleton for Title */}
          <div className="bg-gray-200 h-8 w-3/4 mb-4 rounded"></div>
          {/* Skeleton for Description */}
          <div className="bg-gray-200 h-6 w-full mb-4 rounded"></div>
          <div className="bg-gray-200 h-6 w-1/2 mb-4 rounded"></div>
          {/* Skeleton for Category */}
          <div className="bg-gray-200 h-6 w-1/2 mb-4 rounded"></div>
          {/* Skeleton for Rating */}
          <div className="bg-gray-200 h-6 w-1/2 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
