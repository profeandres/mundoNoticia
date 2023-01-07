import "./styles/App.css";
import { MainLayOut } from "./layouts/layouts";
import { Route, Routes } from "react-router-dom";
import { NoticiasList, Noticia, NewNoticia } from "./components/comps";
import { Inicio, About, Error404 } from "./pages/pages";
import { NoticiasProvider } from "./context/noticiasContext";

function App() {
  return (
    <NoticiasProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayOut />}>
            <Route index element={<Inicio />} />
            <Route path="noticias">
              <Route index element={<NoticiasList />} />
              <Route path=":id" element={<Noticia />} />
              <Route path="new" element={<NewNoticia />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </div>
    </NoticiasProvider>
  );
}

export default App;