import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button } from "react-native";
import styled from "styled-components/native";
import { GameSetting } from "./src/screens/GameSetting";
import { GiveRole } from "./src/screens/GiveRole";

const Wrapper = styled.View`
    flex: 1;
    background-color: "#fff";
    align-self: "center";
    justify-content: "center";
`

export default function App() {
  const [gameStep, setGameStep] = useState(0);

  const toNextStep = () => {
    setGameStep((prev) => prev + 1);
  };

  return (
    <Wrapper>
      <Button onPress={toNextStep}
      title = {"click me"}></Button>
      {gameStep === 1 && <GameSetting/>}
      {gameStep === 2 && <GiveRole/>}
      <StatusBar style="auto" />
    </Wrapper>
  );
}

