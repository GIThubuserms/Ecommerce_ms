import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const Cartcontext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setcart] = useState([]);
  const [itemamount,setitemamount]=useState(0);
  const [totalamount,settotalamount]=useState(0);

  useEffect(()=>{
   const total=cart.reduce((acc,cur)=>acc=acc+cur.amount,0)
   setitemamount(total)
  },[cart])

   useEffect(()=>{
   let total=cart.reduce((acc,item)=>acc=acc+(item.amount*item.price),0)
   total=Math.floor(total).toFixed(2)
   settotalamount(total)
  },[cart])

  const addtoCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItems = cart.find((item) => item.id === id);

    if (cartItems) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItems.amount + 1 };
        } else {
          return item;
        }
      });
      setcart(newCart);
    } else {
      setcart([...cart, newItem]);
    }
  };

  const deletefromcart = (id) => {
    const newcart = cart.filter((item) => item.id !== id);
    setcart(newcart);
  };

  const emptyCart = () => {
    setcart([]);
  };

  const increaseamount = (id) => {
    const cartitem = cart.find((item) => item.id === id);
    addtoCart(cartitem, id);
  };

  const decreaseamount = (id) => {
    let cartitem = cart.find(item => item.id === id);
    if(cartitem.amount>1)
    {
      if(cartitem)
      {  
     const newCart=cart.map((item)=>{
      if(item.id===id)
      {
      return {...item,amount:cartitem.amount-1}
      }
      else
      {
        return item;
      }
     })
     setcart(newCart)

      }
    } else{
     deletefromcart(id)     
    }
  }


  return (
    <Cartcontext.Provider
      value={{
        cart,
        addtoCart,
        deletefromcart,
        emptyCart,
        increaseamount,
        decreaseamount,
        itemamount,
        totalamount
      }}
    >
      {children}
    </Cartcontext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(Cartcontext);
};
