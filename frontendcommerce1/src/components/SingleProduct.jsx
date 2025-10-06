import React, { useState } from "react";
import { useLoaderData, useParams, useRevalidator } from "react-router-dom";

import { FaCartPlus } from "react-icons/fa";
import axios from "axios";
const apiUrl = "http://localhost:5000";




function SingleProduct({cartc,setcart}) {
  const{ productFound }=useLoaderData()
const revalidate = useRevalidator()
  const remise = 20;
  const [count,setcount] =useState(0)

  const addtocart =async () =>{
    try {
      const response = await axios.post(`${apiUrl}/addtocart` , {Product : productFound._id , quantity :count } , {withCredentials : true})
     console.log(response)
    revalidate.revalidate()
    } catch (error) {
      console.log(error)
    }
    }
  const [mainImage, setimage] = useState(productFound.images[0]);
 

  return (
    <div className=" h-[45rem] flex items-center justify-center p-6 ">
      <div className="h-[35rem] flex justify-between w-[70%]">
        <div className="w-[55%]   flex-col flex items-center">
          <div className="h-[72%] w-[100%] flex justify-center">
            <img
              src={mainImage}
              style={{
                borderRadius: "16px",
                border: "2px solid black",
                width: "70%",
              }}
              alt=""
            />
          </div>
          <div className="flex justify-center gap-4 w-[70%] h-[20%] mt-4  overflow-auto ">
            {productFound.images.map((product) => {
            
              return (
                <img
                  onClick={() => setimage(product)}
                  src={product}
                  alt=""
                  style={{
                    width: "30%",
                    borderColor: "red",
                    border: "2px solid gray ",
                    borderRadius: "12px",
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className="w-[45%]  p-6 pt-16">
          <h4 className="font-serif text-sm font-bold text-gray-500">
            {productFound.brand + " Company"}
          </h4>
          <div
            style={{ paddingTop: "8px", fontSize: "2rem", fontWeight: "bold" }}
          >
            {" "}
            {productFound.name}
          </div>
          <div className="mt-12 h-[20%]  overflow-auto">
            {productFound.description}
          </div>
          <div className="h-[10%]  mt-4 font-serif font-bold text-[1.6rem] gap-10 flex">
            <p>${(productFound.price * (100 - remise)) / 100} </p>
            <p className="text-[14px] mt-4  bg-black rounded-[6px] text-white w-[2.4rem]">{remise}%</p>
          </div>
          <div className="h-[6%]  font-serif font-bold text-[0.9rem] line-through">
            ${productFound.price}
          </div>
          <div className="flex h-[10%] mt-4 gap-2">
             <div className="bg-gray-200 border-2 rounded-[8px] flex justify-around  items-center w-[9rem] h-10   ">
              <button style={{color:"orange" , fontWeight:"bold" , fontSize:"1.4rem",marginTop:"-4px" }} onClick={()=> {if (count >= 1) setcount(count - 1)}}   >-</button>
              <h1 style={{fontSize:"1.1rem" , fontWeight:"bold"}}>{count}</h1>
              <button style={{color:"orange" , fontWeight:"bold" , fontSize:"1.4rem",marginTop:"-4px" }} onClick={()=>setcount(count + 1)}>+</button>
             </div>
            <div className="bg-gray-400 border-2 rounded-[8px] flex justify-around items-center w-[17rem] h-10">
              <button className="flex items-center gap-4" onClick={()=>{
              addtocart();
              }}><FaCartPlus /> Add to Cart </button> 
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default SingleProduct;
