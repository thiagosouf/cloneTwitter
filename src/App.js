import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Info from './pages/Info';
import Main from './pages/Main';
import Menu from './pages/Menu';

function App() {
  return (
    <Conteudo>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Main />} />
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
