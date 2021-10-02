import React from "react"
import styled from "styled-components/native"



const Wrapper = styled.View`
    width: 100%;
    height: 100px;
    position :relative;
    `
const CountText = styled.Text`
    height: 100%;
    `
const CountBtn = styled.Button`
    position: absolute;
    z-index: -1;
    height: 80px;
    width: 80px;
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
            <Wrapper>
            <CountBtn title={"+"} onPress={plusCountHandler}/>
            <CountText>{count}</CountText>
            <CountBtn title={"-"} onPress={minusCountHandler}/>
            </Wrapper>
        }
        </>
    )
}