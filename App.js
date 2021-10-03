import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import styled from "styled-components/native";
import { PressStart } from "./src/screens/PressStart";
import { GameSetting } from "./src/screens/GameSetting";
import { GiveRole } from "./src/screens/GiveRole";
import { subjectDatas } from "./src/Utils/Data/subjectLists";
import { getRandomWord } from "./src/Utils/Logic/subjectFunc";
import { setPlayerRole } from "./src/Utils/Logic/setPlayer";

const Wrapper = styled.View`
  flex: 1;
  background-color: "#fff";
  align-self: "center";
  justify-content: "center";
`;

export default function App() {
  const [gameStep, setGameStep] = useState(0);
  const [playerCnt, setPlayerCnt] = useState(3);
  const [selectModal, setSelectModal] = useState(false);
  const [subjectText, setSubjectText] = useState(Object.keys(subjectDatas)[0]);
  const [playWord, setPlayWord] = useState() 
  const [liarNumber, setLiarNumber] = useState();

  useEffect(()=>{
    if(gameStep === 2){
      setLiarNumber(setPlayerRole(playerCnt))
      setPlayWord(getRandomWord(subjectDatas[subjectText]))
    }
  },[gameStep])

  const toNextStep = () => {
    setGameStep((prev) => prev + 1);
  };

  return (
    <Wrapper>
      <Button onPress={toNextStep} title={"click me"}></Button>
      {gameStep === 0 && <PressStart />}
      {gameStep === 1 && (
        <GameSetting
          playerCnt={playerCnt}
          setPlayerCnt={setPlayerCnt}
          selectModal={selectModal}
          setSelectModal={setSelectModal}
          subjectText={subjectText}
          setSubjectText={setSubjectText}
        />
      )}
      {gameStep === 2 && <GiveRole subjectText={subjectText} playerCnt={playerCnt} liarNumber={liarNumber} playWord={playWord}/>}
      <StatusBar style="auto" />
    </Wrapper>
  );
}
