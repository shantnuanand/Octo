import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleProducts = () => {
  const params = useParams();

  //Mutations
  const mutation = useMutation({
    mutationFn: (newProduct) => {
      return axios.put(
        `https://dummyjson.com/products/${params.productId}`,
        newProduct
      );
    },
  });

  const fetchProduct = async () => {
    const response = await axios.get(
      `https://dummyjson.com/products/${params.productId}`
    );
    const data = response.data;
    return data;
  };

  const {
    isLoading,
    error,
    data: product,
  } = useQuery({
    queryKey: ["product", params.productId],
    queryFn: fetchProduct,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (mutation.isPending) {
    return <h1>Updating...</h1>;
  }

  if (mutation.isError) {
    return <h1>Error while updating: {mutation.error.message}</h1>;
  }

  if (!product) {
    return <p>Please select a product.</p>;
  }

  const { images, title, description, price, rating, category, thumbnail } =
    product;

  return (
    <>
      <div className="min-h-screen flex items-center justify-center max-w-5xl mx-auto px-8 bg-white shadow-md rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={thumbnail} alt={title} className="w-full h-auto rounded-md mb-4" />
          <p className="text-gray-600">{description}</p>
          <div className="flex items-center mt-4">
            <p className="text-gray-700 mr-4">
              <span className="font-bold">Price:</span> Rs.{price}
            </p>
            <p className="text-gray-700 mr-4">
              <span className="font-bold">Rating:</span> {rating}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Category:</span> {category}
            </p>
          </div>
          <div className="mt-6">
            <button className="bg-green-500 text-white py-2 px-4 rounded mr-4 hover:bg-green-700">
            Buy Now
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
             Add to Cart
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <h3 className="text-xl font-semibold mb-4">Product Images</h3>
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${title}-image-${index}`}
                className="w-full h-auto rounded-md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>

      {/* <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded"
        onClick={() => {
          mutation.mutate({ title: "Updated Product" });
        }}
      >
        Create Product
      </button> */}
    </>
  );
};

export default SingleProducts;
