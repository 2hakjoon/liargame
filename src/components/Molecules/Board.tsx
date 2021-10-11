import styled from "styled-components/native"
import React from "react"
import { BtnBasic } from "../Atoms/Button/BtnBasic"
import { TextComp } from "../Atoms/Text/TextComp"
import { ColumnWrapper } from "../Atoms/Layout/ColumnWrapper"





type props = {
  t : string
  onPress : Function
}


export const Board = ({t, onPress} : props) => {
  return (
    <ColumnWrapper w={"100%"} h={"70%"}>
      <TextComp t={t} m={"auto"} fs={"18px"}/>
      <BtnBasic t={"확인"} onPress={onPress} w={"100%"}/>
    </ColumnWrapper>
  )
}