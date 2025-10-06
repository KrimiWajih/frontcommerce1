import Modal from "./Modal";
import React, { useState } from "react";
import { Link, useLoaderData, useRevalidator } from "react-router-dom";

function AdminProdList({ cartc, setcart }) {
  const limitpage = 5;
  const [pagecount, setpagecount] = useState(1);
  const productsL = useLoaderData();
  console.log(productsL);
  const { revalidate } = useRevalidator(); //refresh the useloaderdata

  const pagenumbers = productsL
    ? Math.floor(productsL.length / limitpage) +
      (productsL.length % limitpage !== 0 ? 1 : 0)
    : 0;
  const next = pagecount * limitpage;
  const prodtab = productsL ? productsL.slice(next - limitpage, next) : [];

  // const handleDelete = (id) => {
  //   const updatedproduct = productsL.filter((prod) => prod._id.$oid !== id);
  //   //setProductsl(updatedproduct);
  //   const updatedcart = cartc.filter((item) => item._id.$oid !== id);
  //   setcart(updatedcart);

  //   const newPageNumbers = updatedproduct
  //     ? Math.floor(updatedproduct.length / limitpage) + (updatedproduct.length % limitpage !== 0 ? 1 : 0)
  //     : 0;
  //   if (pagecount > newPageNumbers && newPageNumbers > 0) setpagecount(newPageNumbers);
  // };

  return (
    <div>
      <>
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />

        <div className="flex justify-center min-h-screen w-full  ">
          <div className="w-full">
            <div className="overflow-auto lg:overflow-visible w-full h-[60%]  ">
              <Link to={"/dashboard/addproduct"}>
                <button>Add product</button>
              </Link>
              <table className="table text-gray-400 border-separate space-y-6 text-sm w-[90%] mx-auto ">
                <thead className="bg-gray-800 text-gray-500">
                  <tr>
                    <th className="w-[20%]">Reference</th>
                    <th className="w-[35%]">Name</th>
                    <th className="p-3 w-[10%]">Price</th>
                    <th className="p-3 w-[15%]">Stock</th>
                    <th className="p-3 w-[15%]">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {prodtab.map((prod, index) => (
                    <tr className="bg-gray-800" key={index}>
                      <td className="p-3 text-center">
                        <Link
                          to={`/products/${prod._id}`}
                          className="text-gray-500"
                        >
                          {prod._id}
                        </Link>
                      </td>
                      <td className="p-3 w-[35%] text-center">
                        <Link
                          to={`/products/${prod._id}`}
                          className="text-gray-500"
                        >
                          {prod.name}
                        </Link>
                      </td>
                      <td className="p-3 font-bold w-[10%] text-center">
                        ${prod.price}
                      </td>
                      <td className="p-3 w-[15%] text-center">
                        <span
                          className={`${
                            prod.stock === 0 ? "bg-red-400" : "bg-green-400"
                          } text-gray-50 rounded-md px-2`}
                        >
                          {prod.stock === 0 ? "Out of Stock" : "In Stock"}
                        </span>
                      </td>
                      <td className="p-3 w-[15%] text-center">
                        <div className="flex items-center justify-center">
                          <a
                            href="#"
                            className="text-gray-400 hover:text-gray-100 mr-2"
                          >
                            <i className="material-icons-outlined text-base">
                              visibility
                            </i>
                          </a>
                          <a
                            href="#"
                            className="text-gray-400 hover:text-gray-100 mx-2"
                          >
                            <i className="material-icons-outlined text-base">
                              edit
                            </i>
                          </a>
                          <div className="text-gray-400 hover:text-gray-100 ml-2">
                            <Modal revalidate={revalidate} id={prod._id} />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center w-[90%] mx-auto mt-24 gap-5">
              <button
                disabled={pagecount === 1}
                onClick={() => {
                  if (pagecount >= 2) setpagecount(pagecount - 1);
                }}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              >
                -
              </button>
              <h1 className="text-lg font-bold">{pagecount}</h1>
              <button
                disabled={pagecount === pagenumbers}
                onClick={() => {
                  if (pagecount < pagenumbers) setpagecount(pagecount + 1);
                }}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
              .table {
                border-spacing: 0 15px;
              }
              i {
                font-size: 1rem !important;
              }
              .table tr {
                border-radius: 20px;
              }
              tr td:nth-child(n+5),
              tr th:nth-child(n+5) {
                border-radius: 0 .625rem .625rem 0;
              }
              tr td:nth-child(1),
              tr th:nth-child(1) {
                border-radius: .625rem 0 0 .625rem;
              }
            `,
          }}
        />
      </>
    </div>
  );
}

export default AdminProdList;
