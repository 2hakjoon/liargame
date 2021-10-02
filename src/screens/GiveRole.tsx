import styled from "styled-components/native"
import React from "react"



const Wrapper = styled.View`
    display: flex;
    flex-direction: column;
`
const Text = styled.Text`
    
`




export const GiveRole:React.FC = () => {
    return(
        <Wrapper>
            <Text>종이를 걷어내고 제시어를 확인하세요!</Text>
        </Wrapper>
    )
}