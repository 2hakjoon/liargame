import React from "react"
import styled from "styled-components/native"


const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${p=>p.theme["black"]};
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`



export const Modal = ({children}) => {
  return(
    <Wrapper>
      {children}
    </Wrapper>
  )
}