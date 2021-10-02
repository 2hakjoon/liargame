import styled from "styled-components/native"
import React from "react"
import { Subject } from "../components/Templates/Subject"


const Wrapper = styled.View`
    display: flex;
    flex-direction: column;
    position: relative;
`
const Text = styled.Text`
    
`

export const GameSetting:React.FC = () => {
    return(
        <Wrapper>
            <Subject/>
            <Text>제시어</Text>
            <Text>모드선택</Text>
            <Text>게임시작</Text>
        </Wrapper>
    )
}