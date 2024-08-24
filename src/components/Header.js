import React from "react";
import { useSidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { useCartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";

const Header = () => {
  const { Isopen, setIsopen, handleSubmit } = useSidebarContext();
  const { itemamount } = useCartContext();

  return (
    <>
      <div className=" flex justify-between items-center border-[2px] shadow-sm w-full  overflow-hidden  ">
        <Link to={"/"}>
          <img className="w-[40px]" src={Logo} />
        </Link>
        <div className="uppercase">
          ms clothing
        </div>
        <div
          onClick={() => setIsopen(!Isopen)}
          className="cursor-pointer shadow-xl flex relative "
        >
          <BsBag className="text-2xl mr-2 " />
          <div className="bg-red-500 rounded-full w-[16px] h-[16px] flex items-center justify-center text-[12px] font-semibold absolute -right-0 -bottom-1 ">
            {itemamount}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
