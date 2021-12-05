import styled from "styled-components/native"
import React from "react"
import { BtnBasic } from "../Atoms/Button/BtnBasic"
import { TextComp } from "../Atoms/Text/TextComp"
import { ColumnWrapper } from "../Atoms/Layout/ColumnWrapper"
import { FlexWrapper } from "../Atoms/Layout/FlexWrapper"





type props = {
  t : string
  onPress : Function
  type? : string
}


export const Board = ({t, onPress, type} : props) => {
  return (
    <ColumnWrapper w={"100%"} h={"70%"}>
      <>
        {type ?
          <>
            {type === "word" &&
            <>
              <FlexWrapper m={"auto 0"}>
                <TextComp t={"제시어는"} m={"auto"} fs={"18px"}/>
                <TextComp t={'"'} m={"auto"} fs={"18px"}/>
                <TextComp t={t} m={"auto"} fs={"18px"}/>
                <TextComp t={'"'} m={"auto"} fs={"18px"}/>
                <TextComp t={"입니다"} m={"auto"} fs={"18px"}/>
              </FlexWrapper>
              <BtnBasic t={"숨기기"} onPress={onPress} w={"100%"}/>
            </>
            }
            {type === "liar" &&
              <>
                <TextComp t={t} m={"auto"} fs={"18px"}/>
                <BtnBasic t={"숨기기"} onPress={onPress} w={"100%"}/>
              </>
            }
          </>
          :
          <>
            <TextComp t={t} m={"auto"} fs={"18px"}/>
            <BtnBasic t={"확인"} onPress={onPress} w={"100%"}/>
          </>
        }
      </>
    </ColumnWrapper>
  )
}