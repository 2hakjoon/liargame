import styled from "styled-components/native";
import React from "react";
import { useState } from "react";
import { TextComp } from "../components/Atoms/Text/TextComp";
import { Board } from "../components/Molecules/Board";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  padding : 10%;
  width: 100%;
  height: 100%;
`;


const Text = styled.Text``;

type props = {
  subjectText: string;
  playerCnt: number;
  liarNumber: number | null;
  playWord: string | null;
  toNextStep: Function;
};

export const GiveRole: React.FC<props> = ({
  subjectText,
  playerCnt,
  liarNumber,
  playWord,
  toNextStep,
}) => {
  const [roleStep, setRoleStep] = useState(-1);
  const [showInfo, setShowInfo] = useState(false);
  const playerArray = Array.apply(null, Array(playerCnt)).map(
    (val, idx) => idx
  );

  const toNextRoleStep = () => {
    setRoleStep((prev) => prev + 1);
    setShowInfo(true);
  };

  const hideInfo = (idx: number) => {
    if (idx === playerCnt - 1) {
      toNextStep();
    } else {
      setShowInfo(false);
    }
  };

  return (
    <Wrapper>
      <TextComp t={`제시어 : ${subjectText}`} fs ={"30px"} m={"0 auto"}/>

      {showInfo ? (
        <>
          {playerArray.map((player, idx) => {
            if (idx === roleStep) {
              if (liarNumber === player) {
                return (
                  <Board
                    key={idx}
                    t={"당신은 라이어입니다."}
                    onPress={() => hideInfo(idx)}
                  />
                );
              } else {
                return (
                  <Board
                    key={idx}
                    t={`제시어는 ${playWord}입니다!`}
                    onPress={() => hideInfo(idx)}
                  />
                );
              }
            }
          })}
        </>
      ) : (
        <Board
          t={"아래 버튼을 눌러 역할을 확인해주세요!"}
          onPress={toNextRoleStep}
        />
      )}
    </Wrapper>
  );
};
