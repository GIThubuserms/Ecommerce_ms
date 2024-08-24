import React from 'react';

import {useParams} from 'react-router-dom'

import { useCartContext } from '../contexts/CartContext';

import { useProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {

  const{id}=useParams()
  const{addtoCart}=useCartContext()
  const{products}=useProductContext()

  const Products=products.find(item=>item.id===parseInt(id));
  console.log(Products);
  
  if(!Products)
  {
    return <div className='h-screen flex justify-center items-center text-xl font font-semibold '>Loading ...</div>
  }
  
  return <div className=' mt-4 flex m-auto w-[70%] h-auto mb-3 gap-x-8 space-y-5 justify-center items-center  flex-col md:flex-row '>
    <div className='w-full'><img className='h-[200px] w-auto' src={Products.image} /></div>
    <div className='flex  flex-col space-y-1 '>
    <div className='font-semibold  text-sm '>{Products.title}</div>  

    <div className='text-red-600'>$ {Products.price}</div>

    <div className='text-sm '>{Products.description}</div>
    
    <div className='bg-black mt-2   flex justify-center items-center text-white p-2 w-[120px] rounded'  onClick={()=>addtoCart(Products,id)}> Add To Cart </div>

    </div> 
     
      </div>
  // {
  //   if(Products)
  //   {
  //   <div>
  //     <div>
  //     <img className='w-full h-full ' src={Products.image} />
  //     <div>hello</div>
  //     <div>hello</div>
  //     <div>hello</div>
  //     <div>hello</div>
  //     <div>hello</div>
  //     <div>hello</div>
  //     <div>hello</div>
  //     <div>hello</div>
  //     <div>hello</div>
  //     </div>
  //   </div>
   // }
   // else if (!Products)
    //{
    //  <div className='h-screen text-xl text-black flex items-center justify-center'>Loading...</div>
   // }
  
  }
  
export default ProductDetails;
