import React from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import {GlobalStyle} from './Components/GlobalStyle'

import { temaClaro, temaEscuro } from "./Components/UI/temas";

import {ThemeProvider} from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={temaEscuro}>
      <GlobalStyle />
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
