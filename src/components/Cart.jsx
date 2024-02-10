import React from "react";

const Cart = () => {
  return (
    <>
      <div className="h-screen bg-gray-200 flex justify-center items-center">
        <div className="flex p-8">
          {/* Left Side: Product Details */}
          <div className="flex flex-col mr-8">
            <h2 className="text-2xl font-bold mb-2">iPhone 9</h2>
            <p className="text-gray-500 mb-2">smartphones</p>
            <img src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" alt="title" className="w-64 h-auto mb-4 rounded-md" />
          </div>

          {/* Right Side: Buy Now Button */}
          <div className="flex flex-col justify-between">
            <div className="text-green-500 font-bold text-2xl mb-4">
              Rs.44
            </div>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
