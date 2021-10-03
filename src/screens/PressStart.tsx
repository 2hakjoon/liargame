import React from "react"
import { Button } from "react-native"
import styled from "styled-components/native"



const Wrapper = styled.View`
    width: 100%;
    height: 50%;
`

const Text = styled.Text`
    width: 200px;
    height: 40px;
`


type props={
    toNextStep:Function
}


export const PressStart:React.FC<props> = ({toNextStep}) => {
    return(
        <>
            <Wrapper>
                <Text>시작버튼을 눌러주세요</Text>
            </Wrapper>
            <Button title={"시작하기"} onPress={()=>toNextStep()}/>
        </>
    )
}