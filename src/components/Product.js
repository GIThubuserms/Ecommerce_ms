import React from "react";
import { useProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";
import { BsEyeFill, BsPlus } from "react-icons/bs";
import { useCartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { id, title, image, category, price } = product;
  const{addtoCart}=useCartContext()
  return (
    <div >
      <div className="w-full border border-[#e4e4e4]  h-[300px] mb-4 group transition-all relative overflow-hidden ">
        
        <div className="w-full flex justify-center items-center h-full">
          <div className="mx-auto flex w-[200px] justify-center items-center ">
            <img className="max-h-[160px] group-hover:scale-110 transition duration-300 " src={image} />
          </div>
        </div>

        <div className="top-6 -right-11 group-hover:right-1 group-hover:top-0  absolute  p-1   opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-y-2">
        <button onClick={()=>addtoCart(product,id)}>
            <div className="flex justify-center items-center bg-red-500 text-white w-12 h-12 ">
                <BsPlus className="text-3xl " />
            </div>
        </button>
        <Link to={`/product/${id}`}>
        <button>
        <div className="flex bg-white justify-center items-center w-12 h-12 text-primary drop-shadow-xl">
        <BsEyeFill className="text-3xl " />
        </div>
        </button>
        </Link>

        </div>
      </div>

      <div>
        <div className="text-gray-500">{category}</div>
         <Link to={`/product/${id}`}>
         <h2 className="font-semibold mb-1 ">{title}</h2>
         </Link>
        <h2>$ {price}</h2>
      </div>
    </div>
  );
};
export default Product;
