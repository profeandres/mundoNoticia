import React from "react";
import { useNavigate } from "react-router-dom";
import { useNoticia } from "../context/noticiasContext";

export const NoticiasNavbar = () => {
  const navigate = useNavigate();
  const { noticias, setNoticias } = useNoticia();
  const handleBorrar = () => {
    setNoticias([]);
  };

  const handleNew = () => {
    navigate("/noticias/new");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(noticias);
  };
  return (
    <div className="noticias-navbar">
      <button className="noticias-navbar-btn-new" onClick={handleNew}>Nueva noticia</button>
      <form onSubmit={handleSubmit}>
        <input type="search" name="search" id="" placeholder={"buscar noticias"} />
        <button type="submit">buscar noticias</button>
      </form>
    </div>
  );
};
