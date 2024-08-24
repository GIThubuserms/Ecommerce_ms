import React from 'react';
import { useSidebarContext } from '../contexts/SidebarContext';
import {IoMdArrowForward,IoMdTrash} from 'react-icons/io'
import { useCartContext } from '../contexts/CartContext';
import Product from './Product';
import CartItem from './CartItem';

const Sidebar = () => {

  const{Isopen,setIsopen,handleSubmit}=useSidebarContext()
  const{cart,emptyCart,totalamount}=useCartContext()
  
  return <div 
  className={`${Isopen ? 'right-0':'-right-full'} w-full bg-white fixed top-0 h-full 
     shadow-2xl md:w-[45vw] xl:max-w-[30vw] transition-all overflow-y-auto
     duration-300 z-20 px-4 lg:px-[35px]  `}>
    <div className='flex justify-between items-center py-6 border-b '>
      <div className='uppercase font-semibold text-sm' >Shopping Bag</div>
      
      <div 
      onClick={()=>setIsopen(!Isopen)}  className='w-8 h-8 text-center cursor-pointer flex justify-center items-center'>
        <IoMdArrowForward className='text-2xl'/>
      </div>
    </div>

     <div >  
      {cart.map((item)=><CartItem item={item} key={item.id}/> )}
     </div>

     <div className='flex flex-col gap-y-3 mt-4 font-medium'>
       
      <div className='flex w-full justify-between items-center uppercase text font-semibold'>
        <div className='flex '><span>Total :</span>{totalamount}</div>
        <div className=' cursor-pointer flex py-4 text-primary w-12 h-12 justify-center items-center text-xl' onClick={()=>emptyCart()}><IoMdTrash className='text-3xl' /></div>
      </div>
      <div className='w-full  h-[38px] bg-gray-300 text-black  flex justify-center items-center' >
       View cart
      </div>
      <div className='w-full  h-[38px] bg-black text-white  flex justify-center items-center'>
       Checkout
      </div>

     </div>

     </div>
};

export default Sidebar;
