import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Info from './pages/Info';
import Main from './pages/Main';
import Menu from './pages/Menu';
import NotFound from './pages/NotFound'
import Notificacoes from './pages/Notificacoes';
import Perfil from './pages/Perfil/Perfil'
import Mensagens from './pages/Mensagens/Mensagens';
import Favoritos from './pages/Favoritos/Favoritos'

function App() {
  return (
    <Conteudo>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Main />} />
          <Route path="/notificacoes" element={<Notificacoes />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/mensagens" element={<Mensagens />} />
          <Route path="/favoritos" element={<Favoritos />} />
          
        </Routes>
        <Info />
      </BrowserRouter>
    </Conteudo>
  );
}

export default App;

const Conteudo = styled("div")`
  text-align: center;
  display: flex;
  justify-content: center;

`
