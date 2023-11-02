import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./componentes/Menu";
import HomePage from "./paginas/HomePage";
import Cadastro from "./paginas/Cadastro";
import NaoEncontrada from "./paginas/NaoEncontrada";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
