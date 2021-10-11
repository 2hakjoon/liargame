import React from "react"
import styled from "styled-components/native"
import { BtnBasic } from "../components/Atoms/Button/BtnBasic"
import { TextComp } from "../components/Atoms/Text/TextComp"
import { theme } from "../Utils/Theme/theme"



const Wrapper = styled.View`
    width: 100%;
    height: 100%;
    padding : 10%;
    justify-content: space-around;
`

const Text = styled.Text`
    width: 200px;
    height: 40px;
    color: white;
`



type props={
    toNextStep:Function
}


export const PressStart = ({toNextStep} : props) => {
    return(
        <Wrapper>
            <TextComp fc={"red"} t={"라이어게임"} fs={"35px"} m={"0 auto"}/>
            <TextComp fc={"white"} t={"시작버튼을 눌러 게임을 시작하세요"} fs={"18px"} m={"100px auto 0 auto"}/>
            <BtnBasic onPress={toNextStep} t={"시작하기"}/>
        </Wrapper>
    )
}