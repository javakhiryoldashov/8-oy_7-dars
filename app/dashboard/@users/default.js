import React from "react";
import api from "@/api/api";
import Link from "next/link";

const Users = async () => {
  const response = await api.get("/users");
  const users = await response.data;

  return (
    <div className="flex-1 p-4 bg-yellow-500 min-h-screen">
      <h1 className="text-center text-3xl font-bold mb-8 border-b-4 border-[#333] py-3 rounded-lg bg-red-500 text-black sticky top-1 z-10">
        Users
      </h1>

      <ul className="flex flex-col gap-4">
        {users.map((user) => (
          <li
            className="bg-white shadow-md rounded-lg py-3 px-5 text-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
            key={user.id}
          >
            <Link
              className="text-gray-800 hover:text-blue-600"
              href={`dashboard/${user.id}`}
            >
              {user.name.firstname.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
