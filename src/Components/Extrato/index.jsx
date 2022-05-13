import React from "react";

import { extratoLista } from "../../info";

import { Box, Botao } from "../UI/index";

export const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => {
        return (
          <div key={id}>
            <div>{type}</div>
            <div>{from}</div>
          </div>
        );
      })}
      <Botao>Ver mais</Botao>
    </Box>
  );
};
