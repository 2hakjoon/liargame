import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";



const Wrapper = styled.TouchableOpacity`
    width: 200px;
    height: 100px;
    margin : 0 auto;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
`

type props = {
    text : string,
    onPress : () => void;
}


export const SmallBtn:React.FC<props> = ({text, onPress}) => {
    return(
        <Wrapper onPress={onPress}>
            <Text>
                {text}
            </Text>
        </Wrapper>
    )
}