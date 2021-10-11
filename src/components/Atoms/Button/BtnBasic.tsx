import React from "react";
import styled from "styled-components/native";
import { theme } from "../../../Utils/Theme/theme";

const ButtonContainer = styled.TouchableOpacity<containerProps>`
  padding: 16px;
  border-radius: 10px;
  background-color:${theme["red"]};
  width: ${p=>p.w};
`;

const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: white;
`;

type props={
    onPress : Function
    t : string
    bc?: string
    w? : string
}

type containerProps = {
  bgColor : string
  w : string
}


export const BtnBasic = ({ onPress, bc, t, w} : props) => (
  <ButtonContainer onPress={()=>onPress()} bgColor={bc} w={w}>
    <ButtonText>{t}</ButtonText>
  </ButtonContainer>
);

BtnBasic.defaultProps = {
  bgColor : theme.red,
  w : "auto"
}