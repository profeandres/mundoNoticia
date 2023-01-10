import React from "react";
import { useNavigate } from "react-router-dom";

export const NoticiasNavbar = () => {
  const navigate = useNavigate();

  const handleNew = () => {
    navigate("/noticias/new");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
