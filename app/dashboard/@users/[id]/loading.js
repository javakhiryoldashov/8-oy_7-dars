"use client";
import React from "react";

const UserSkeleton = () => {
  return (
    <div className="flex-1 mx-auto p-4 md:p-8 lg:p-12 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-lg mx-auto animate-pulse">
        {/* Skeleton for header */}
        <div className="bg-gray-200 h-16 w-full rounded-t-lg"></div>

        <div className="p-6 space-y-4">
          {/* Skeleton for name */}
          <div className="bg-gray-200 h-8 w-3/4 rounded"></div>

          {/* Skeleton for username */}
          <div className="bg-gray-200 h-6 w-1/2 rounded"></div>

          {/* Skeleton for email */}
          <div className="bg-gray-200 h-6 w-2/3 rounded"></div>

          {/* Skeleton for phone */}
          <div className="bg-gray-200 h-6 w-1/2 rounded"></div>

          {/* Skeleton for address */}
          <div className="bg-gray-200 h-6 w-1/2 rounded"></div>

          {/* Skeleton for address details */}
          <div className="space-y-2">
            <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
            <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
            <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
            <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
            <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
          </div>
        </div>

        <div className="p-6 text-center">
          {/* Skeleton for button */}
          <div className="bg-gray-200 h-10 w-32 mx-auto rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default UserSkeleton;
