import styled from 'styled-components';
import Info from './pages/Info';
import Main from './pages/Main';
import Menu from './pages/Menu';

function App() {
  return (
    <Conteudo>
      <Menu />
      <Main />
      <Info />
    </Conteudo>
  );
}

export default App;

const Conteudo = styled("div")`
  text-align: center;
  display: flex;
  justify-content: center;

`
