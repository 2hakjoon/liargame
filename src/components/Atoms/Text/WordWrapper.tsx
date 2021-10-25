import {TextComp} from "./TextComp"
import styled from "styled-components/native"
import React from "react"



const TextWrapper = styled.TouchableOpacity`
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  text-align: center;
  padding : 16px;
  margin: 8px 16px 16px 16px;
  background-color: ${p=>p.theme["red"]};
`



export const WordWrapper = ({t, onPress}) =>{
  return(
    <TextWrapper onPress={()=>onPress(t)}>
      <TextComp t={t} m={"0 auto"} fc={"white"}/>
    </TextWrapper>
  )
}