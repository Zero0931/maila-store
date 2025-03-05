"use client";

import React, { useState } from "react";
import { productNames, productDescriptions, productPrices } from './description';

const ProductPage: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handleAddToCart = () => {
    alert(`Added Image ${selectedImageIndex! + 1} to cart!`);
  };

  // Generate products data using descriptions and prices
  const productsData = [...Array(25)].map((_, index) => {
    const productIndex = (index + 1).toString(); // Convert index to string for keys
    return {
      name: productNames[productIndex],
      price: productPrices[productIndex] || "$0.00", // Use string key
      description: productDescriptions[productIndex] || "", // Use string key
      src: `/images/products/${productIndex}.jpg`, // Assuming images are named 1.jpg, 2.jpg, etc.
    };
  });

  // Array of images with direct paths from the public folder
  const productImages = productsData.map((product, index) => ({
    src: `/images/products/${index + 1}.jpg`,
    alt: `Image ${index + 1}`,
    name: product.name,
    price: product.price,
    description: product.description,
  }));

  return (
    <div className="w-full min-h-screen p-8 bg-cover bg-center relative" style={{ backgroundImage: "url('/images/background-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-45 z-10"></div>
      <h1 className="text-5xl mb-3 text-center z-20 relative">Product Gallery</h1>
      <h3 className="text-l mb-6 text-center z-20 relative">Explore one of our products</h3>
      <div className="grid grid-cols-4 gap-4 z-20 relative">
        {productImages.map((image, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            className="relative flex items-center justify-center bg-gray-200 h-80 border-2 border-gray-300 text-gray-600 text-lg overflow-hidden" // Added overflow-hidden
            aria-label={`View ${image.alt}`}
          >
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100"> {/* Dark overlay */}
              <p className="text-white text-lg font-bold">{image.name}</p>
              <p className="text-white">{image.price}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-30"
          onClick={handleCloseModal}
        >
          <div
            className="text-center bg-white p-6 rounded-lg max-w-lg w-full mx-4 max-h-screen overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={productImages[selectedImageIndex].src}
              alt={productImages[selectedImageIndex].alt}
              className="mb-4 w-full h-auto max-h-80 object-contain"
            />
            <p className="mb-4 text-black font-bold">{productImages[selectedImageIndex].name}</p>
            <p className="mb-4 text-black font-bold">{productImages[selectedImageIndex].price}</p>
            <p className="mb-4 text-black">{productImages[selectedImageIndex].description}</p>
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
