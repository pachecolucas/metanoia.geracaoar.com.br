import { useEffect, useState } from "react";
import S from "styles";
import STATES from "./states";

type Props = {
  index: number;
};

export default function Index({ index }: Props) {
  const [key, setKey] = useState(normalizeIndex(index));
  const [state, setState] = useState(STATES[0]);

  useEffect(() => {
    setKey(normalizeIndex(index));
  }, [index]);

  useEffect(() => {
    console.log("KEY: ", key);
    setState(STATES[key]);
  }, [key]);

  return (
    <S.Wrapper>
      {state.god && <S.God>{state.god}</S.God>}
      {state.life && <S.Life>{state.life}</S.Life>}
      {state.bottom && <S.Bottom>{state.bottom}</S.Bottom>}
      {state.left && <S.Left>{state.left}</S.Left>}
      {state.top && <S.Top>{state.top}</S.Top>}
      {state.right && <S.Right>{state.right}</S.Right>}
      {state.row0 && <S._0>{state.row0}</S._0>}
      {state.row1 && <S._1>{state.row1}</S._1>}
      {state.row2 && <S._2>{state.row2}</S._2>}
      {state.row3 && <S._3>{state.row3}</S._3>}
      {state.row4 && <S._4>{state.row4}</S._4>}
      {state.colA && <S.A>{state.colA}</S.A>}
      {state.colB && <S.B>{state.colB}</S.B>}
      {state.colC && <S.C>{state.colC}</S.C>}
      {state.colD && <S.D>{state.colD}</S.D>}
      {state.colE && <S.E>{state.colE}</S.E>}
      {state.a0 && <S.A0>{state.a0}</S.A0>}
      {state.a1 && <S.A1>{state.a1}</S.A1>}
      {state.a2 && <S.A2>{state.a2}</S.A2>}
      {state.a3 && <S.A3>{state.a3}</S.A3>}
      {state.a4 && <S.A4>{state.a4}</S.A4>}
      {state.b0 && <S.B0>{state.b0}</S.B0>}
      {state.b1 && <S.B1>{state.b1}</S.B1>}
      {state.b2 && <S.B2>{state.b2}</S.B2>}
      {state.b3 && <S.B3>{state.b3}</S.B3>}
      {state.b4 && <S.B4>{state.b4}</S.B4>}
      {state.c0 && <S.C0>{state.c0}</S.C0>}
      {state.c1 && <S.C1>{state.c1}</S.C1>}
      {state.c2 && <S.C2>{state.c2}</S.C2>}
      {state.c3 && <S.C3>{state.c3}</S.C3>}
      {state.c4 && <S.C4>{state.c4}</S.C4>}
      {state.d0 && <S.D0>{state.d0}</S.D0>}
      {state.d1 && <S.D1>{state.d1}</S.D1>}
      {state.d2 && <S.D2>{state.d2}</S.D2>}
      {state.d3 && <S.D3>{state.d3}</S.D3>}
      {state.d4 && <S.D4>{state.d4}</S.D4>}
      {state.e0 && <S.E0>{state.e0}</S.E0>}
      {state.e1 && <S.E1>{state.e1}</S.E1>}
      {state.e2 && <S.E2>{state.e2}</S.E2>}
      {state.e3 && <S.E3>{state.e3}</S.E3>}
      {state.e4 && <S.E4>{state.e4}</S.E4>}
    </S.Wrapper>
  );
}

const normalizeIndex = function (index: number) {
  const resto = Math.abs(index % STATES.length);
  // console.log(`${index} / ${STATES.length} = ${resto}`);
  return resto;
};
