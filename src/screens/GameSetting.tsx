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

export const GameSetting: React.FC = () => {
  const [playerCnt, setPlayerCnt] = useState(3);
  const [selectModal, setSelectModal] = useState(false);
  const [subjectText, setSubjectText] = useState("제시어를 선택해주세요!");

  return (
    <Wrapper>
      <Subject
        subjectText={subjectText}
        setSubjectText={setSubjectText}
        selectModal={selectModal}
        setSelectModal={setSelectModal}
      />
      <Counter count={playerCnt} setCount={setPlayerCnt} display={!selectModal} />
      <Text>제시어</Text>
      <Text>모드선택</Text>
      <Text>게임시작</Text>
    </Wrapper>
  );
};
