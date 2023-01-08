import React from 'react'
import { useNoticia } from '../context/noticiasContext'

export const NoticiasList = () => {
  const {noticias} = useNoticia();
  if(noticias.length>0) console.log(noticias);
  return (
    <main className="noticias-main">
      
    </main>
  )
}
