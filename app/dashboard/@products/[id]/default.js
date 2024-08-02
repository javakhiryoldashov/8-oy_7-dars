"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import api from "@/api/api";
import Image from "next/image";

const DefaultProduct = () => {
  const [product, setProduct] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${params.id}`);
        const product = response.data;
        setProduct(product);
        console.log(product);

        if (!response.ok) {
          throw new Error("Response is not ok");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [params.id]);

  return (
    <div className="flex-1 mx-auto items-center p-4 md:p-8 lg:p-12 bg-gray-50 min-h-screen">
      {product && (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-lg w-full">
          <Image
            src={product.image}
            width={400}
            height={500}
            alt={product.title}
            className="object-contain w-full h-72"
          />

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>

            <p className="text-gray-600 mb-4">{product.description}</p>

            <p className="text-lg font-semibold mb-2">
              Price: ${product.price.toFixed(2)}
            </p>

            <p className="text-sm text-gray-500 mb-2">
              Category: {product.category}
            </p>

            <p className="text-sm text-gray-500 mb-2">
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DefaultProduct;
