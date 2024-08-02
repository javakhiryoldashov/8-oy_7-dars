"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex-1 items-center justify-center p-4 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-md w-full">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-700 mb-6">
          We encountered an error while processing your request. Please try
          again.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Try Again
          </button>

          <button
            onClick={() => router.back()}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
