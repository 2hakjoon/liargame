import React from "react";
import styled from "styled-components/native";



const Wrapper = styled.Button`
    width: 40px;
    height: 20px;
`

type props = {
    text : string,
    onPress : () => void;
}


export const SmallBtn:React.FC<props> = ({text, onPress}) => {
    return(
        <Wrapper title={text} onPress={onPress}/>
    )
}