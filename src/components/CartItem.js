import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdAdd, IoMdRemove } from "react-icons/io";
import { useCartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const{deletefromcart,decreaseamount,increaseamount}=useCartContext()

  return (
    <div>
      <div className=" shadow-md rounded-md border-gray-300 w-full minh-[150px] flex items-center gap-x-4 mb-3 ">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px] " src={image} />
        </Link>
        {/* text and close */}
        <div className=" w-full flex flex-col  ">
          <div className="flex justify-between mb-2">
            <Link
              className="text-sm uppercase max-w-[240px] text-primary font-medium hover:underline"
              to={`/product/${id}`}
            >
              {title}
            </Link>

            <div className="text-xl cursor-pointer">
              <IoMdClose  onClick={()=>deletefromcart(id)} className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>

          <div className=" flex items-center text-sm gap-x-2 h-[36px] ">
            <div className="bg-white h-full font-medium flex flex-1 max-w-[100px] items-center border-[1px] border-black">
              <div>
                <IoMdAdd onClick={()=>increaseamount(id)} className="flex flex-1 justify-center items-center cursor-pointer" />
              </div>
              <div className="flex flex-1 justify-center items-center cursor-pointer ">
                {amount}
              </div>
              <div>
                <IoMdRemove onClick={()=>decreaseamount(id)} className="flex flex-1 justify-center items-center cursor-pointer" />
              </div>
            </div>

            <div className="flex flex-1 justify-end items-center font-medium">
              $ {price}
            </div>

            <div className="flex flex-1 justify-end items-center font-medium ">{`$ ${parseFloat(price * amount).toFixed(
              2
            )}`}</div>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default CartItem;
