import React, { useState } from "react";
import styled from "styled-components/native";
import { WordContainer } from "../../Atoms/Text/WordContainer";


const Wrapper = styled.View`
    width: 90vw;
    height: 90vh;
    background-color: rebeccapurple;
    position: absolute;
    top: 5vh;
    left: 5vw;
    padding: 16px;
    z-index: 2;
`



const GridWrapper = styled.View`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 50px);
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