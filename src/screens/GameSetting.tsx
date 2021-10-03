import styled from "styled-components/native";
import React, { useState } from "react";
import { Subject } from "../components/Organisms/Subject/Subject";
import { Counter } from "../components/Molecules/Counter";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Text = styled.Text``;


type props = {
    playerCnt:number,
    setPlayerCnt:Function,
    selectModal:boolean,
    setSelectModal:Function,
    subjectText:string,
    setSubjectText:Function
}


export const GameSetting: React.FC<props> = ({
    playerCnt,
    setPlayerCnt,
    selectModal,
    setSelectModal,
    subjectText,
    setSubjectText}) => {

  return (
    <Wrapper>
      <Subject
        subjectText={subjectText}
        setSubjectText={setSubjectText}
        selectModal={selectModal}
        setSelectModal={setSelectModal}
      />
      <Counter count={playerCnt} setCount={setPlayerCnt} display={!selectModal} />
    </Wrapper>
  );
};
