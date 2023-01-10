import React, { createContext, useContext, useEffect, useState } from 'react';
import { createNoticiaRequest, getNoticiasRequest } from '../api/noticiasApi';

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

 const createNoticia = async (noticia) =>{
  try {
    const res = await createNoticiaRequest(noticia);
    setNoticias([...noticias,res.data])
  } catch (error) {
    console.log(error)
  }
 }
    return (
    <noticiasContext.Provider
    value={{noticias, setNoticias, createNoticia}}
    >
        {children}
    </noticiasContext.Provider>
  )
}
