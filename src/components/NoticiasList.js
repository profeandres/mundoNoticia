import React from "react";
import { useNoticia } from "../context/noticiasContext";
import { Loader, NoticiaCard, NoticiasNavbar } from "./comps";

export const NoticiasList = () => {
  const { noticias } = useNoticia();
  return (
    <>
    <NoticiasNavbar/>
    <main className="noticias-main">
      {noticias.length!==0 ? (
        noticias.map((el, index) => 
        <NoticiaCard key={index} data={el} />
        )
        ) : (
          <Loader />
          )}
    </main>
          </>
  );
};
