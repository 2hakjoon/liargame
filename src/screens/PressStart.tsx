import React, { useState } from "react"
import styled from "styled-components/native"
import { BtnBasic } from "../components/Atoms/Button/BtnBasic"
import { ColumnWrapper } from "../components/Atoms/Layout/ColumnWrapper"
import { FlexWrapper } from "../components/Atoms/Layout/FlexWrapper"
import { TextComp } from "../components/Atoms/Text/TextComp"
import { BasicHelp } from "../components/Templates/ModalComponent/BasicHelp"
import { changLangtoEn, changLangtoKr, currentLocale, LangEN, LangKR } from "../Utils/LangPack/i18nConfig"


const Wrapper = styled.View`
    width: 100%;
    height: 100%;
    padding : 5%;
    display: flex;
`

type props={
    toNextStep:Function
}


export const PressStart = ({toNextStep} : props) => {

    const [language, setLanguage] = useState(currentLocale())
    const [basicModalState, setBasicModalState] = useState(false);

    //console.log(language)

    const toggleLanguage = (lang) => {
        //console.log(language)
        if(lang === LangKR){
            changLangtoKr()
            setLanguage(LangKR)
        }
        else if(lang === LangEN){
            changLangtoEn()
            setLanguage(LangEN)
        }
    }

    return(
        <>
            <BasicHelp modal={basicModalState} setModal={setBasicModalState}/>
            <Wrapper>
                <FlexWrapper jc={"flex-end"} m={"0 0 35% 0"}>
                    <TextComp t={"언어"} fs={"20px"} m={"0"}/>
                    <TextComp t={" : "} fs={"20px"} m={"0 8px"}/> 
                    <BtnBasic onPress={()=>toggleLanguage(LangKR)} bc={language === LangKR ? "red" : "gray"} w={"40px"} h={"40px"} t={"한"} p={"10px"}/>
                    <BtnBasic onPress={()=>toggleLanguage(LangEN)} bc={language === LangEN ? "red" : "gray"} w={"40px"} h={"40px"} t={"en"} m={"0 0 0 10px"} p={"8px"}/>
                </FlexWrapper>
                <ColumnWrapper w={"100%"} jc={"space-around"}>
                    <TextComp fc={"red"} t={"라이어 게임"} fs={"40px"} m={"0 auto"}/>
                    <TextComp fc={"white"} t={"시작버튼을 눌러 게임을 시작하세요"} fs={"18px"} m={"100px auto 100px auto"}/>
                    <BtnBasic onPress={toNextStep} t={"시작하기"} w={"100%"}/>
                </ColumnWrapper>
            </Wrapper>
        </>
    )
}