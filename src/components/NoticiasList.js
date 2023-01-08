import React from "react";
import { useNoticia } from "../context/noticiasContext";
import { Loader, NoticiaCard } from "./comps";

export const NoticiasList = () => {
  const { noticias } = useNoticia();
  console.log(noticias)
  return (
    <main className="noticias-main">
      {noticias ? (
        noticias.map((el, index) => 
          <NoticiaCard data={el} />
        )
      ) : (
        <Loader />
      )}
    </main>
  );
};
