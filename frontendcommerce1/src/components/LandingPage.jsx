import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaFire } from "react-icons/fa"; 

function LandingPage({ products }) {
  const listProducts=useLoaderData()
  const comingSoonProducts = [
    {
      _id: { $oid: "67c62a38f2d8b67179988061" },
      name: "Google Pixel 8",
      description : "The Pixel 8 has a variable refresh rate of 60–120 Hz, while the Pixel 8 Pro has variable refresh rate of 1–120 Hz. ",
      price: "700",
      images: ["https://cdn.idealo.com/folder/Product/203280/5/203280551/s4_produktbild_max/google-pixel-8.jpg"],
      brand: "Google",
    },
    {
      _id: { $oid: "67c62a38f2d8b67179988062" },
      name: "Sony Xperia 5 V",
      description : "Android smartphone. Announced Sep 2023. Features 6.1″ display, Snapdragon 8 Gen 2 chipset, 5000 mAh battery, 256 GB storage, 8 GB RAM",
      price: "734.88",
      images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiYkUUZQ4jRHr3Cqj6eVQ32EpNj8h4oRQGtA&s"],
      brand: "Sony",
    },
  ];


  const topThreeProducts = listProducts.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">

      <section className="py-20 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Welcome to TechTrend Innovations
            </h1>
            <p className="mt-4 text-lg font-light">
              Explore cutting-edge smartphones and gadgets—shop the latest tech today!
            </p>
            <Link
              to="/products"
              className="mt-6 inline-flex items-center px-6 py-3 text-lg font-semibold bg-white text-indigo-600 rounded-full hover:bg-gray-100 focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
            >
              Shop Now
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src={listProducts[0].images[0]}
              alt="Featured Product"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

   
      <section className="py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Top Selling Products
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topThreeProducts.map((product, index) => (
            <Link to={`/products/${product.keyitem}`} key={index}>
              <div className="relative max-w-sm bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:-translate-y-2 dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 w-[22rem] h-[38rem] flex flex-col overflow-hidden group">
              <div className="absolute top-4 left-4 bg-red-500 text-white p-2 rounded-full shadow-md">
                  <FaFire className="text-lg" />
                </div>
    
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

   
        <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
        <FaFire className="text-lg" />
        </div>
      </div>
            </Link>
          ))}
        </div>
      </section>

   
      <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Coming Soon
        </h2>
        <div className="max-w-6xl mx-auto flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] gap-8 max-w-full justify-items-center">
    {comingSoonProducts.map((product) => (
               <div className="relative max-w-sm bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:-translate-y-2 dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 w-[22rem] h-[38rem] flex flex-col overflow-hidden group">
               <div className="absolute top-4 left-4 bg-red-500 text-white p-2 rounded-full shadow-md">
                   <FaFire className="text-lg" />
                 </div>
     
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
 
    
         <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
        New
         </div>
       </div>
    ))}
  </div>
</div>
      </section>
    </div>
  );
}

export default LandingPage;