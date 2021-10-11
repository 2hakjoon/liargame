import React from "react"
import styled from "styled-components/native"
import { BtnBasic } from "../Atoms/Button/BtnBasic"
import { FlexWrapper } from "../Atoms/Layout/FlexWrapper"
import { TextComp } from "../Atoms/Text/TextComp"



const Wrapper = styled.View`
    width: 100%;
    position :relative;
    display: flex;
    flex-direction: row;
`





type props={
    count : number,
    setCount : Function,
    display? : boolean
}

export const Counter:React.FC<props> = ({count, setCount, display}) => {

    const plusCountHandler = () => {
        if(count < 10){
            setCount(prev=>prev+1)
        }
    }

    const minusCountHandler = () => {
        if(count > 3){
            setCount(prev=>prev-1)
        }
    }

    return(
        <>
        {display&&
            <FlexWrapper w={"100%"}>
                <TextComp t={"인원 수"}/>
                <FlexWrapper w={"40%"}>
                    <BtnBasic t={"-"} onPress={minusCountHandler}/>
                    <TextComp t={count}/>
                    <BtnBasic t={"+"} onPress={plusCountHandler}/>
                </FlexWrapper>
            </FlexWrapper>
        }
        </>
    )
}