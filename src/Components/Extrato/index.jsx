import React from "react";

import { extratoLista } from "../../info";
import Itens from "../Itens";

import { Box, Botao } from "../UI/index";

export const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => {
        return (
          <Itens key={id} type={type} from={from} value={value} date={date} />
        );
      })}
      <Botao>Ver mais</Botao>
    </Box>
  );
};
