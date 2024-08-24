import React, { createContext, useContext, useEffect, useState } from 'react';

export const ProductContext=createContext();



export const ProductProvider=({children})=>
  {
    useEffect(()=>
      {
        const fetchdata=async()=>
          {
          const response=await fetch('https://fakestoreapi.com/products')
          const data=await response.json()
          setproducts(data)
          }
          fetchdata();
      }) 
    const[products,setproducts]=useState([]);
   return(
    <ProductContext.Provider value={{products}} > 
    {children}
    </ProductContext.Provider>
   )
  }

  export const useProductContext=()=>{
    return useContext(ProductContext);
  }

