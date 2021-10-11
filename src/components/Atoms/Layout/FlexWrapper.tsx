import React from "react"
import styled from "styled-components/native"



const Wrapper = styled.View<wrapperProps>`
    width: ${p=>p.w};
    height:  ${p=>p.h};
    margin: ${p=>p.m};
    padding: ${p=>p.p};
    align-items: ${p=>p.ai};
    justify-content: ${p=>p.jc};
    flex-direction: row;
    flex-shrink: 0;
`


type props ={
    children : React.ReactNode
    w? : string
    h? : string
    m? : string
    p? : string
    ai? : string
    jc? : string
}

type wrapperProps = {
    w : string
    h : string
    m : string
    p : string
    ai : string
    jc : string
}


export const FlexWrapper = ({children, w, h, m, p, ai, jc}:props) =>{
    return(
        <Wrapper w={w} h={h} m={m} p={p} ai={ai} jc={jc}>
            {children}
        </Wrapper>
    )
}

FlexWrapper.defaultProps = {
    w : "auto",
    h : "auto",
    m : "0 0 0 0",
    p : "0 0 0 0",
    ai : "center",
    jc : "space-between"
}