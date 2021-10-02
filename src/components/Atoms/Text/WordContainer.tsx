import React from "react";
import styled from "styled-components/native";


const Wrapper = styled.Button`
    width: 70px;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;
    height: 30px;
    display: flex;
    justify-content: center;
`

type props = {
    text : string,
    setSubjectText : Function
}


export const WordContainer:React.FC<props> = ({text, setSubjectText}) => {
    return(
        <Wrapper title={text} onPress={()=>setSubjectText(text)}> </Wrapper>
    )
}