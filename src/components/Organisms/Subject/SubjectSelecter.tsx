import React, { useState } from "react";
import styled from "styled-components/native";
import { WordContainer } from "../../Atoms/Text/WordContainer";


const Wrapper = styled.View`
    width: 90%;
    height: 90%;
    background-color: rebeccapurple;
`



const GridWrapper = styled.View`
    width: 100%;
    height: 100%;
`




type props={
    lists : object,
    setSubjectText : Function,
}

export const SubjectSelecter:React.FC<props> = ({lists, setSubjectText}) =>{


    return(
        <Wrapper>
        {lists && 
            <GridWrapper>
            {Object.keys(lists).map((list, idx)=>{
                return(
                    <WordContainer key={idx} text={list} setSubjectText={setSubjectText} />
                )
            })}
            </GridWrapper>
        }
        </Wrapper>
    )
}