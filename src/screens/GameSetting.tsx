import styled from "styled-components/native";
import React, { useState } from "react";
import { Subject } from "../components/Organisms/Subject/Subject";
import { Counter } from "../components/Molecules/Counter";
import { Button } from "react-native";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  height: 80%;
`;
const Text = styled.Text``;


type props = {
    playerCnt:number,
    setPlayerCnt:Function,
    selectModal:boolean,
    setSelectModal:Function,
    subjectText:string,
    setSubjectText:Function,
    toNextStep:Function
}


export const GameSetting: React.FC<props> = ({
    playerCnt,
    setPlayerCnt,
    selectModal,
    setSelectModal,
    subjectText,
    setSubjectText,
    toNextStep,
  }) => {

  return (
    <>
      <Wrapper>
        <Subject
          subjectText={subjectText}
          setSubjectText={setSubjectText}
          selectModal={selectModal}
          setSelectModal={setSelectModal}
          />
        <Counter count={playerCnt} setCount={setPlayerCnt} display={!selectModal} />
      </Wrapper>
      {!selectModal && <Button title={"다음단계로"} onPress={()=>toNextStep()}/>}
    </>
  );
};
