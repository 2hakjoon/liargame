import React from "react";
import styled from "styled-components/native";
import { theme } from "../../../Utils/Theme/theme";
import { TextComp } from "../Text/TextComp";

const ButtonContainer = styled.TouchableOpacity<containerProps>`
  padding: ${p=>p.p};
  border-radius: 10px;
  background-color:${p=>p.theme[p.bgColor]};
  width: ${p=>p.w};
  height: ${p=>p.h};
  margin : ${p=>p.m};
`;


type props={
    onPress : Function
    t : string
    bc?: string
    w? : string
    h? : string
    m? : string
    p? : string
}

type containerProps = {
  bgColor : string
  w : string
  h : string
  m : string
  p : string
}


export const BtnBasic = ({ onPress, bc, t, w, h, m, p} : props) => (
  <ButtonContainer onPress={()=>onPress()} bgColor={bc} w={w} h={h} m={m} p={p}>
    <TextComp t={t} m={"0 auto"}/>
  </ButtonContainer>
);

BtnBasic.defaultProps = {
  bc : "red",
  w : "auto",
  h : "auto",
  m : "0",
  p : "16px"
}