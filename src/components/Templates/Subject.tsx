import { useState } from "react"
import styled from "styled-components/native"
import React from "react"
import { subjectDatas } from "../../Utils/Data/subjectLists"
import { SubjectSelecter } from "../Organisms/Viewer/SubjectSelecter"


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




export const Subject:React.FC = () =>{
    const subjects = subjectDatas;

    const [subjectText, setSubjectText] = useState("기본값");
    const [selectModal, setSelectModal] = useState(false);

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