import React from "react"
import styled from "styled-components/native"



const Wrapper = styled.View`
    width: 100%;
    height: 100%;
`

const Text = styled.Text`
    width: 200px;
    height: 40px;
`



export const PressStart:React.FC = () => {
    return(
        <Wrapper>
            <Text>시작버튼을 눌러주세요</Text>
        </Wrapper>
    )
}