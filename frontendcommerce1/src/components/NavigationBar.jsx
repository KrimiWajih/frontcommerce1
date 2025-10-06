import React from "react";
import { Link, useLoaderData, useRevalidator } from "react-router-dom";
import { logout } from "../Api";
import axios from "axios";
import { toast } from "react-toastify";
const apiUrl = "https://ecommerce-v1hm.onrender.com";
function NavigationBar({cartc}) {

  const connectedUser = useLoaderData(); 
  const { revalidate } = useRevalidator(); 
console.log(connectedUser?.role)
 const panier = connectedUser?.cart


// function logout to log user out , we send a request to the backend with an empty body and withcredentials 
//once response is recieved from the backend with a 200 we get a message saying "loggd out" and revalidate to refresh the page
const logout = async ()=>{
  try {
    const response = await axios.post(`${apiUrl}/logout`,{},{ withCredentials: true })
   
    if(response.status === 200){
      toast.success("Logged Out")
      revalidate()
    }
  } catch (error) {
    console.log(error)
  }
  
  }
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>

              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link to="/">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block ">
              <div className="flex space-x-4">


               { connectedUser?.role === "admin" && (<Link
                  to="/dashboard"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Dashboard
                </Link>)}


                <Link
                  to="/products"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Products
                </Link>
                <Link
                  to="/contact"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Contact
                </Link>
                <Link
                  to="/about"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  About
                </Link>
              </div>
            </div>
          </div>

          <div className="ml-auto flex space-x-4">
            {connectedUser ? <Link
              to="/login"
              onClick={() => {
                logout()
               
              }}
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              
            >
              Log Out
            </Link> : <Link
              to="/login"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Login / Signup
            </Link>}
          </div>

          {/* Cart */}
          <div>
            <Link to={"/cart"}>
              <button
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <div className="absolute -inset-1.5 z-40 bg-red-600 mt-11 ml-11 rounded-[50%] h-[20px] w-[20px]" ><span style={{color:"white"}}>{panier?.length || 0}</span></div>

                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0 0 0)"
                >
                  <path
                    d="M10.68 2.13565C11.0194 2.37319 11.1019 2.84084 10.8644 3.18017L8.36533 6.75006H15.6347L13.1356 3.18017C12.8981 2.84084 12.9806 2.37319 13.32 2.13565C13.6593 1.89811 14.1269 1.98062 14.3645 2.31996L17.4657 6.75006H19.75C20.9926 6.75006 22 7.75742 22 9.00006V9.78517C22 10.4635 21.694 11.1057 21.1671 11.5329L20.0045 12.4755L19.2012 18.7843C19.0581 19.908 18.102 20.7501 16.9692 20.7501H7.03079C5.89803 20.7501 4.94189 19.908 4.79881 18.7843L3.99548 12.4755L2.83295 11.5329C2.30604 11.1056 2 10.4635 2 9.78517V9.00006C2 7.75742 3.00736 6.75006 4.25 6.75006H6.53432L9.63552 2.31996C9.87306 1.98062 10.3407 1.89811 10.68 2.13565ZM14.25 11.5001C13.8358 11.5001 13.5 11.8359 13.5 12.2501V16.2501C13.5 16.6643 13.8358 17.0001 14.25 17.0001C14.6642 17.0001 15 16.6643 15 16.2501V12.2501C15 11.8359 14.6642 11.5001 14.25 11.5001ZM9.75 11.5001C9.33579 11.5001 9 11.8359 9 12.2501V16.2501C9 16.6643 9.33579 17.0001 9.75 17.0001C10.1642 17.0001 10.5 16.6643 10.5 16.2501V12.2501C10.5 11.8359 10.1642 11.5001 9.75 11.5001Z"
                    fill="#ffffff"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;

{
  /*     profile picture with notification and ropdown      */
}
{
  /* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"> */
}

{
  /* notification button  */
}
{
  /* <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </button> */
}

{
  /* profile image */
}
{
  /* <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="size-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
    
              
            </div> */
}
{
  /* </div> */
}

{
  /*     */
}
