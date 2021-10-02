import { useState } from "react"
import styled from "styled-components/native"
import React from "react"
import { subjectDatas } from "../../../Utils/Data/subjectLists"
import { SubjectSelecter } from "./SubjectSelecter"


const Wrapper = styled.View`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
const SubjectText = styled.Text`
    width: 70%;
`

const BtnChangeSubject = styled.Button`
    width: 20%;
`


type props={
    subjectText : string,
    setSubjectText : Function,
    selectModal : boolean,
    setSelectModal : Function
}



export const Subject:React.FC<props> = ({subjectText, setSubjectText, selectModal, setSelectModal}) =>{
    const subjects = subjectDatas;


    const subjectHandler = (subject : string) => {
        setSubjectText(subject)
        setSelectModal(false)
    }



    
    const BtnSubject = () =>{
        setSelectModal(true)
    }

    return(
        <Wrapper>
            <SubjectText>{subjectText}</SubjectText>
            <BtnChangeSubject title={"변경"} onPress={BtnSubject}/>
            {selectModal && <SubjectSelecter lists={subjects} setSubjectText={subjectHandler}/>}
        </Wrapper>
    )
}