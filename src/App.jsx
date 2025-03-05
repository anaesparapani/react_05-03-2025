import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Eventos from "./pages/Eventos";
import CriarEvento from "./pages/Eventos";
import Organizadores from "./pages/Organizadores";
import Ingressos from "./pages/Ingressos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organizadores" element={<Organizadores />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/criarEvento" element={<CriarEvento />} />
        <Route path="/ingressos" element={<Ingressos />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;