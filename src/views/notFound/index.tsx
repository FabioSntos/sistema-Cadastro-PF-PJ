import React from "react";
import { Container } from "../Login/styles";

export const NotFound = () => {
  return (
    <Container>
      <h1 className="title">Erro: 404</h1>
      <p>Página não encontrada.</p>
    </Container>
  );
};