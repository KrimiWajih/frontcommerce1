import React, { useState } from "react";
import UsersList from "../../UsersList";

function AdminUsersList() {
  const pagelimit = 5;
  const [usersl, setusersl] = useState(UsersList);
  const [pagecount, setpagecount] = useState(1);
  let pagenumbers = Math.floor(UsersList.length / pagelimit);

  if (UsersList.length % pagelimit !== 0) {
    pagenumbers += 1;
  }
  const next = pagelimit * pagecount;

  const userstab = usersl.slice(next - pagelimit, next);
  const handleDelete = (index) => {
    const updatedusers = usersl.filter((el) => el._id.$oid !== index)
    setusersl(updatedusers);
    if (updatedusers.length % pagelimit === 0) setpagecount(pagecount-1)
    
  };
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
        rel="stylesheet"
      />

      <div className="flex justify-center min-h-screen w-[100%] ">
        <div className="w-[100%]">
          <div className="overflow-auto lg:overflow-visible w-[100%] h-[60%]">
            <table className="table text-gray-400 border-separate space-y-6 text-sm w-[90%]  ">
              <thead className="bg-gray-800 text-gray-500 ">
                <tr className="">
                  <th className="w-[20%]">User ID</th>
                  <th className="w-[35%]">Name</th>
                  <th className="p-3  w-[10%]">Email</th>
                  <th className="p-3  w-[15%]">Status</th>
                  <th className="p-3  w-[15%]">Remove</th>
                </tr>
              </thead>
              <tbody>
                {userstab.map((prod) => {
                  return (
                    <tr className="bg-gray-800 ">
                      <td className="p-3 text-center">
                        <div className="flex align-items-center justify-center">
                          <div className="ml-3">
                            <div className="text-gray-500 w-[20%] ">
                              {prod._id.$oid}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 w-[35%] text-center">{prod.name}</td>
                      <td className="p-3 font-bold  w-[10%] text-center ">
                        ${prod.email}
                      </td>
                      <td className="p-3 w-[15%] text-center">
                        <span
                          className={`${
                            prod.status === "unverified"
                              ? "bg-red-400"
                              : "bg-green-400"
                          }  text-gray-50 rounded-md px-2  `}
                        >
                          {prod.status}
                        </span>
                      </td>
                      <td className="p-3  w-[15%] text-center">
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
                          className="text-gray-400 hover:text-gray-100  mx-2"
                        >
                          <i className="material-icons-outlined text-base">
                            edit
                          </i>
                        </a>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-gray-100  ml-2 "
                          onClick={() => handleDelete(prod._id.$oid)}
                        >
                          <i className="material-icons-round text-base">
                            delete_outline
                          </i>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "center",
              marginTop: "100px",
              gap: "20px",
            }}
          >
            {" "}
            <button
              disabled={pagecount === 1 ? true : false}
              onClick={() => {
                if (pagecount >= 2) setpagecount(pagecount - 1);
              }}
            >
              -
            </button>{" "}
            <h1>{pagecount}</h1>{" "}
            <button
              disabled={pagecount === pagenumbers ? true : false}
              onClick={() => {
                if (pagecount < pagenumbers) {
                  setpagecount(pagecount + 1);
                }
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\t.table {\n\t\tborder-spacing: 0 15px;\n\t}\n\n\ti {\n\t\tfont-size: 1rem !important;\n\t}\n\n\t.table tr {\n\t\tborder-radius: 20px;\n\t}\n\n\ttr td:nth-child(n+5),\n\ttr th:nth-child(n+5) {\n\t\tborder-radius: 0 .625rem .625rem 0;\n\t}\n\n\ttr td:nth-child(1),\n\ttr th:nth-child(1) {\n\t\tborder-radius: .625rem 0 0 .625rem;\n\t}\n",
        }}
      />
    </div>
  );
}

export default AdminUsersList;
