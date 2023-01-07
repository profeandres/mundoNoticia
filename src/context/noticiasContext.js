import React, { createContext, useContext, useEffect, useState } from 'react'
import { getNoticiasRequest } from '../api/noticiasApi';

const noticiasContext = createContext();

export const useNoticia = () =>{
    const context =  useContext(noticiasContext)
    if(!context) throw new Error("Noticias Provider is missing")
    return context
}

export const NoticiasProvider = ({children}) => {
 const [noticias, setNoticias] = useState([])
 useEffect(() => {
   (async ()=>{
    const res = await getNoticiasRequest();
    setNoticias(res.data)
   })()
 }, [])
 
    return (
    <noticiasContext.Provider
    value={{noticias}}
    >
        {children}
    </noticiasContext.Provider>
  )
}
