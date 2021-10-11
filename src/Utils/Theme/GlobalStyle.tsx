import React from "react"
import styled from "styled-components/native"

const Wrapper = styled.View`
    width: 100%;
    height: 100%;
color: white;
    
`

export const GlobalStyle:React.FC = ({children}) => {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
}