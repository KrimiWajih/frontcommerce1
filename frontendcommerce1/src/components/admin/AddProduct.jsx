import axios from "axios";
import React, { useRef } from "react";
import { toast } from "react-toastify";

const AddProduct = () => {

  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);
  const priceRef = useRef(null);
  const stockRef = useRef(null);
  const brandRef = useRef(null);
  const imagesRef = useRef(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (
      !nameRef.current.value ||
      !descriptionRef.current.value ||
      !categoryRef.current.value ||
      !priceRef.current.value ||
      !stockRef.current.value ||
      !brandRef.current.value ||
      imagesRef.current.files.length === 0
    ) {
      toast.error("Please fill out all required fields");
      return;
    }

   
    const newProd = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
      price: parseFloat(priceRef.current.value) || 0,
      stock: parseInt(stockRef.current.value) || 0,
      brand: brandRef.current.value,
      images: imagesRef.current.files, 
    };

    try {
      const imageLinks = [];
      for (let i = 0; i < newProd.images.length; i++) {
        const formData = new FormData();
        formData.append("upload_preset", "krimiwa"); 
        formData.append("file", newProd.images[i]);
        const res = await axios.post(
             "https://api.cloudinary.com/v1_1/dliy8blry/upload",
          formData
        );
        imageLinks.push(res.data.secure_url);
      }
console.log(imageLinks)
     
      const productToAdd = {
        ...newProd,
        images: imageLinks,
      };

     
      const response = await axios.post("http://localhost:5000/addproduct", productToAdd);
      console.log("Add product response:", response);

      if (response.status === 200 || response.status === 201) {
    
       
        toast.success("Product was added successfully");

    
        nameRef.current.value = "";
        descriptionRef.current.value = "";
        categoryRef.current.value = "";
        priceRef.current.value = "";
        stockRef.current.value = "";
        brandRef.current.value = "";
        imagesRef.current.value = "";
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Error while adding product");
    }
  };



  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
    
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
  
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Add Product
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
       
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
     
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                />
              </div>
      
              <div>
                <label
                  htmlFor="brand"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Brand
                </label>
                <input
                  ref={brandRef}
                  type="text"
                  name="brand"
                  id="brand"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Product brand"
                />
              </div>
        
              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  ref={priceRef}
                  type="number"
                  name="price"
                  id="price"
                  min="0"
                  step="0.01"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                />
              </div>
      
              <div>
                <label
                  htmlFor="stock"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Stock Quantity
                </label>
                <input
                  ref={stockRef}
                  type="number"
                  name="stock"
                  id="stock"
                  min="0"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter stock quantity"
                />
              </div>
     <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  ref={categoryRef}
                  id="category"
                  name="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option disabled value="">
                    Select a category
                  </option>
                  <option value="PC Components">PC Components</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>
     
              <div>
                <label
                  htmlFor="images"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Images
                </label>
                <input
                  ref={imagesRef}
                  type="file"
                  accept="image/*"
                  multiple
                  name="images"
                  id="images"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>
     
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  ref={descriptionRef}
                  id="description"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write product description here"
                  defaultValue=""
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-blue-700 inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <svg
                className="mr-1 -ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Add new product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;