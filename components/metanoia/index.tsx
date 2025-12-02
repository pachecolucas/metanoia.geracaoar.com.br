import { useEffect, useState } from "react";
import S from "styles";
import STATES from "./states";
import styled from "styled-components";

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

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.ctrlKey || e.metaKey) {
      toggleBorder(e.currentTarget);
    } else {
      toggleColor(e.currentTarget);
    }
  }

  function toggleBorder(cell: HTMLDivElement) {
    const ACTIVE_VALUE = "10px solid white";
    if (cell.style.border != ACTIVE_VALUE) {
      cell.style.border = ACTIVE_VALUE;
      cell.style.transform = "scale(1.05)";
    } else {
      cell.style.border = "none";
      cell.style.transform = "";
    }
  }

  function toggleColor(cell: HTMLDivElement) {
    const ACTIVE_VALUE = "blue";
    if (cell.style.backgroundColor != ACTIVE_VALUE) {
      cell.style.backgroundColor = ACTIVE_VALUE;
    } else {
      cell.style.backgroundColor = "";
    }
  }

  return (
    <Wrapper>
      <S.Wrapper>
        {state.god && <S.God>{state.god}</S.God>}
        {state.life && <S.Life onClick={handleClick}>{state.life}</S.Life>}
        {state.bottom && <S.Bottom onClick={handleClick}>{state.bottom}</S.Bottom>}
        {state.left && <S.Left onClick={handleClick}>{state.left}</S.Left>}
        {state.top && <S.Top onClick={handleClick}>{state.top}</S.Top>}
        {state.right && <S.Right onClick={handleClick}>{state.right}</S.Right>}
        {state.row0 && <S._0 onClick={handleClick}>{state.row0}</S._0>}
        {state.row1 && <S._1 onClick={handleClick}>{state.row1}</S._1>}
        {state.row2 && <S._2 onClick={handleClick}>{state.row2}</S._2>}
        {state.row3 && <S._3 onClick={handleClick}>{state.row3}</S._3>}
        {state.row4 && <S._4 onClick={handleClick}>{state.row4}</S._4>}
        {state.colA && <S.A onClick={handleClick}>{state.colA}</S.A>}
        {state.colB && <S.B onClick={handleClick}>{state.colB}</S.B>}
        {state.colC && <S.C onClick={handleClick}>{state.colC}</S.C>}
        {state.colD && <S.D onClick={handleClick}>{state.colD}</S.D>}
        {state.colE && <S.E onClick={handleClick}>{state.colE}</S.E>}
        {state.a0 && <S.A0 onClick={handleClick}>{state.a0}</S.A0>}
        {state.a1 && <S.A1 onClick={handleClick}>{state.a1}</S.A1>}
        {state.a2 && <S.A2 onClick={handleClick}>{state.a2}</S.A2>}
        {state.a3 && <S.A3 onClick={handleClick}>{state.a3}</S.A3>}
        {state.a4 && <S.A4 onClick={handleClick}>{state.a4}</S.A4>}
        {state.b0 && <S.B0 onClick={handleClick}>{state.b0}</S.B0>}
        {state.b1 && <S.B1 onClick={handleClick}>{state.b1}</S.B1>}
        {state.b2 && <S.B2 onClick={handleClick}>{state.b2}</S.B2>}
        {state.b3 && <S.B3 onClick={handleClick}>{state.b3}</S.B3>}
        {state.b4 && <S.B4 onClick={handleClick}>{state.b4}</S.B4>}
        {state.c0 && <S.C0 onClick={handleClick}>{state.c0}</S.C0>}
        {state.c1 && <S.C1 onClick={handleClick}>{state.c1}</S.C1>}
        {state.c2 && <S.C2 onClick={handleClick}>{state.c2}</S.C2>}
        {state.c3 && <S.C3 onClick={handleClick}>{state.c3}</S.C3>}
        {state.c4 && <S.C4 onClick={handleClick}>{state.c4}</S.C4>}
        {state.d0 && <S.D0 onClick={handleClick}>{state.d0}</S.D0>}
        {state.d1 && <S.D1 onClick={handleClick}>{state.d1}</S.D1>}
        {state.d2 && <S.D2 onClick={handleClick}>{state.d2}</S.D2>}
        {state.d3 && <S.D3 onClick={handleClick}>{state.d3}</S.D3>}
        {state.d4 && <S.D4 onClick={handleClick}>{state.d4}</S.D4>}
        {state.e0 && <S.E0 onClick={handleClick}>{state.e0}</S.E0>}
        {state.e1 && <S.E1 onClick={handleClick}>{state.e1}</S.E1>}
        {state.e2 && <S.E2 onClick={handleClick}>{state.e2}</S.E2>}
        {state.e3 && <S.E3 onClick={handleClick}>{state.e3}</S.E3>}
        {state.e4 && <S.E4 onClick={handleClick}>{state.e4}</S.E4>}
      </S.Wrapper>
    </Wrapper>
  );
}

const normalizeIndex = function (index: number) {
  const resto = Math.abs(index % STATES.length);
  // console.log(`${index} / ${STATES.length} = ${resto}`);
  return resto;
};

const Wrapper = styled.div`
  // outline: 1px solid red;
  padding: min(0.2vh, 0.2vw) min(4.5vh, 4.5vw) min(4.2vh, 4.2vw) min(0.5vh, 0.5vw);
  border-radius: 100%;
  user-select: none;
  overflow: hidden;
`;
