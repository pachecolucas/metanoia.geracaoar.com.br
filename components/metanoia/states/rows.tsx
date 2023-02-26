const state = {
  god: true,
  life: true,
  row0: (
    <Row
      number={0}
      element=""
      title="Deus / Poder"
      description="No que confio?"
    />
  ),
  row1: (
    <Row
      number={1}
      element="FOGO"
      title="Eu / Indivíduo"
      description="Quem sou eu?"
    />
  ),
  row2: (
    <Row
      number={2}
      element="ÁGUA"
      title="Ego / Relações"
      description="Quem são os outros?"
    />
  ),
  row3: (
    <Row
      number={3}
      element="AR"
      title="Mente / Inteligência"
      description="Qual o propósito disso tudo?"
    />
  ),
  row4: (
    <Row
      number={4}
      element="TERRA"
      title="Corpo / Ações"
      description="O que fazer com a minha vida?"
    />
  ),
};

export default state;

type Props = {
  number: number;
  element: string;
  title: string;
  description: string;
};

function Row({ number, element, title, description }: Props) {
  return (
    <div>
      <b>Nº {number}</b>
      <div>{element}</div>
      <div>{title}</div>
      <div>
        <small>{description}</small>
      </div>
    </div>
  );
}
