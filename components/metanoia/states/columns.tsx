import styled from "styled-components";
import { Description } from "styled-icons/material";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  b {
    text-transform: uppercase;
  }
  span {
  }
  small {
  }
`;

const state = {
  god: true,
  life: false,
  colA: (
    <Column>
      <b>Criança</b>
      <span>
        Identificar
        <br />
        os pontos
      </span>
      <small>Você / You</small>
    </Column>
  ),
  colB: (
    <Column>
      <b>Jovem</b>
      <span>
        Conectar
        <br />
        os pontos
      </span>
      <small>Ele / He</small>
    </Column>
  ),
  colC: (
    <Column>
      <b>Adulto</b>
      <span>
        Trabalhar
        <br />
        os pontos
      </span>
      <small>Eu / I</small>
    </Column>
  ),
  colD: (
    <Column>
      <b>Ancião</b>
      <span>
        Verticalizar
        <br />
        os pontos
      </span>
      <small>Nós / We</small>
    </Column>
  ),
  colE: (
    <Column>
      <b>Iluminação</b>
      <span>
        Reunir
        <br />
        os pontos
      </span>
      <small>Todos / All</small>
    </Column>
  ),
};

export default state;
