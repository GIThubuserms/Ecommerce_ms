import React from 'react';
import { useState,useContext,createContext } from 'react';

const SidebarContext=createContext();

export const SidebarProvider=({children})=>{
const [Isopen,setIsopen]=useState(false)
const handleSubmit=()=>{
  setIsopen(false)
}

return(
<SidebarContext.Provider value={{Isopen,setIsopen,handleSubmit}}> 
{children}
</SidebarContext.Provider>
)
}
export const useSidebarContext=()=>{
return useContext(SidebarContext)

}






