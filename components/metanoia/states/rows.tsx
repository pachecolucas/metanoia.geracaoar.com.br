import styled from "styled-components";

const state = {
  god: true,
  life: false,
  row0: (
    <Row
      image="/dots/all.svg"
      number={0}
      element=""
      title="Deus / Poder / Salvação"
      description="No que confio?"
    />
  ),
  row1: (
    <Row
      image="/dots/fire.svg"
      number={1}
      element="FOGO"
      title="Eu / Indivíduo / Fogo"
      description="Quem sou eu?"
    />
  ),
  row2: (
    <Row
      image="/dots/water.svg"
      number={2}
      element="ÁGUA"
      title="Ego / Relações / Água"
      description="Quem são os outros?"
    />
  ),
  row3: (
    <Row
      image="/dots/air.svg"
      number={3}
      element="AR"
      title="Mente / Inteligência / Ar"
      description="Qual o propósito disso tudo?"
    />
  ),
  row4: (
    <Row
      image="/dots/earth.svg"
      number={4}
      element="TERRA"
      title="Corpo / Ações / Terra"
      description="O que fazer com a minha vida?"
    />
  ),
};

export default state;

type Props = {
  image: string;
  number: number;
  element: string;
  title: string;
  description: string;
};

function Row({ number, element, title, description, image }: Props) {
  return (
    <Table>
      <tr>
        <td>
          <img src={image} alt="" />
        </td>
        <td>
          <b>NÚMERO {number}</b>
          {/* <div>{element}</div> */}
          <div>{title}</div>
          <div>
            <small>{description}</small>
          </div>
        </td>
      </tr>
    </Table>
  );
}

const Table = styled.table`
  width: 100%;
  td {
    &:first-child {
      text-align: right;
      width: 43%;
    }
    &:last-child {
      text-align: left;
    }
  }
`;
