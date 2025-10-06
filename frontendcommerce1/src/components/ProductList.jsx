import React from "react";

import { Link, useLoaderData } from "react-router-dom";

function ProductList() {
  const listProducts=useLoaderData()

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "start",
      gap: "20px",
      flexWrap: "wrap",
      marginTop:"1.5rem",
      marginBottom:"1.5rem"
       }}>
{listProducts.map((product, index) => {
  return (
    <Link to={`/products/${product._id}`} key={index}>
      <div className="relative max-w-sm bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:-translate-y-2 dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 w-[22rem] h-[38rem] flex flex-col overflow-hidden group">
        
    
        <div className="relative h-[55%] w-full overflow-hidden">
          <img
            className="h-full w-full object-fill rounded-t-xl transition-transform duration-500 group-hover:scale-105"
            src={product.images[0]}
            alt={product.name}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
        </div>

        <div className="p-6 flex flex-col flex-grow justify-between">
   
          <h5 className="mb-3 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white line-clamp-2">
            {product.name}
          </h5>

   
          <p className="mb-4 font-light text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
            {product.description}
          </p>

      
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            <a
              href="/"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-indigo-800 transition-all duration-300 transform group-hover:scale-105"
            >
              Explore
              <svg
                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

   
        <div className="absolute top-4 left-4 bg-amber-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
          Hot
        </div>
      </div>
    </Link>
  );
})}
    </div>
  );
}

export default ProductList;
