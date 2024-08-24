import React from 'react';
 import {useProductContext} from '../contexts/ProductContext'
import Product from '../components/Product'

const Home = () => {
  
  const {products}=useProductContext();
   const filteredProducts=products.filter((product)=>
     product.category==="men's clothing" || product.category==="women's clothing")
   
  return <div>
    <section className="p-16">
      <div className="container mx-auto">
     <div className="grid gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 max-w-sm  mx-auto md:mx-0 md:max-w-none  ">
      {filteredProducts.map((product)=>{
       return (
        // <div className="w-full border h-[300px]  bg-blue-700 "> 
        <Product key={product.id} product={product} />
         
      )
      })}
     </div>
      </div>
    </section>

  </div>;
};

export default Home;
