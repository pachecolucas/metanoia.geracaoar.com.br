import styled from "styled-components";

const H1 = styled.h1`
  font-size: 1em;
  small {
    display: block;
    font-weight: normal;
    margin: 0.7vh 0;
  }
`;

const state = {
  god: true,
  life: true,

  bottom: (
    <H1>
      TERRA <small>(Matéria)</small>
    </H1>
  ),
  left: (
    <H1>
      ÁGUA <small>(Amor)</small>
    </H1>
  ),
  top: (
    <H1>
      AR <small>(Inteligência)</small>
    </H1>
  ),
  right: (
    <H1>
      FOGO <small>(Espiritualidade)</small>
    </H1>
  ),

  a0: (
    <H1>
      VOCÊ <small>(Pais)</small>
    </H1>
  ),
  a1: (
    <H1>
      <small>Eu sou</small>CORPO
    </H1>
  ),
  a2: (
    <H1>
      <small>EGO</small>
      IN-
      <br />
      CONSCIENTE <small>(possessivo)</small>
    </H1>
  ),
  a3: (
    <H1>
      POSSE <small>(Ter)</small>
    </H1>
  ),
  a4: <H1>BRINCAR</H1>,

  b0: (
    <H1>
      ELE <small>(Ídolo)</small>
    </H1>
  ),
  b1: (
    <H1>
      <small>Eu sou</small>REPUTAÇÃO
    </H1>
  ),
  b2: (
    <H1>
      <small>EGO</small>
      EXTRA-
      <br />
      CONSCIENTE <small>(refletivo)</small>
    </H1>
  ),
  b3: (
    <H1>
      TEMPO <small>(Parecer)</small>
    </H1>
  ),
  b4: (
    <H1>
      APRENDER <small>(As 4 Dimensões)</small>
    </H1>
  ),

  c0: (
    <H1>
      EU <small>(Ego)</small>
    </H1>
  ),
  c1: (
    <H1>
      <small>Eu sou</small>MENTE
    </H1>
  ),
  c2: (
    <H1>
      <small>EGO</small>
      INTER-
      <br />
      CONSCIENTE <small>(separativo)</small>
    </H1>
  ),
  c3: (
    <H1>
      CICLOS <small>(Fazer)</small>
    </H1>
  ),
  c4: (
    <H1>
      GANHAR <small>(Os 4 Corpos)</small>
    </H1>
  ),

  d0: (
    <H1>
      NÓS <small>(Outros)</small>
    </H1>
  ),
  d1: (
    <H1>
      <small>Eu sou</small>CONSCIÊNCIA
    </H1>
  ),
  d2: (
    <H1>
      <small>EGO</small>
      INTRA-
      <br />
      CONSCIENTE <small>(reflexivo)</small>
    </H1>
  ),
  d3: (
    <H1>
      PROPÓSITO <small>(Ser)</small>
    </H1>
  ),
  d4: (
    <H1>
      DEVOLVER <small>(Os 4 Elementos)</small>
    </H1>
  ),

  e0: (
    <H1>
      TODO <small>(Deus)</small>
    </H1>
  ),
  e1: (
    <H1>
      <small>Eu</small>SOU
    </H1>
  ),
  e2: (
    <H1>
      <small>EGO</small>
      CONSCIENTE <small>(contemplativo)</small>
    </H1>
  ),
  e3: (
    <H1>
      PRESENTE <small>(Estar)</small>
    </H1>
  ),
  e4: <H1>VOLTAR</H1>,
};

export default state;
