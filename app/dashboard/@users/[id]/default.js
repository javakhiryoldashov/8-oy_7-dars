"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import api from "@/api/api";
import UserSkeleton from "./loading";

const User = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams(); // Use useParams to get the dynamic parameter
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`/users/${id}`); // Use id from useParams

        if (!response.ok) {
          throw new Error("Response is not ok");
        }

        const userData = response.data;
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]); // Add id to dependencies

  if (loading) {
    return <UserSkeleton />;
  }

  return user ? (
    <div className="flex-1 mx-auto p-4 md:p-8 lg:p-12 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-lg mx-auto">
        <h1 className="text-center text-3xl font-bold mb-8 border-b-4 border-black py-3 rounded-lg bg-[#333] text-white">
          User - {user.id}
        </h1>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">
            {user.name.firstname} {user.name.lastname}
          </h2>
          <p className="text-gray-600 mb-4">Username: {user.username}</p>
          <p className="text-gray-600 mb-4">Email: {user.email}</p>
          <p className="text-gray-600 mb-4">Phone: {user.phone}</p>
          <p className="text-gray-600 mb-4">Address:</p>
          <ul className="list-disc pl-6">
            <li>City: {user.address.city}</li>
            <li>Street: {user.address.street}</li>
            <li>Number: {user.address.number}</li>
            <li>Zipcode: {user.address.zipcode}</li>
            <li>
              Geolocation: Latitude {user.address.geolocation.lat}, Longitude{" "}
              {user.address.geolocation.long}
            </li>
          </ul>
        </div>

        <div className="p-6 text-center">
          <button
            onClick={() => router.back()}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex-1 items-center justify-center p-4 bg-gray-50 min-h-screen text-center pt-20">
      <p className="text-gray-700 text-3xl">User not found.</p>
    </div>
  );
};

export default User;
