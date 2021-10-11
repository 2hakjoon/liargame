import React from "react"
import styled from "styled-components/native"
import { theme } from "../../../Utils/Theme/theme"


const Wrapper = styled.Text<TextProps>`
    color: ${p=>p.theme[p.fc]};
    font-size: ${p=>p.fs};
    margin: ${p=>p.m};
`

type props = {
    fc?: string,
    t: string|number,
    m?: string
    fs? :string
}

type TextProps = {
    fc : string
    fs : string
    m : string
}

export const TextComp = ({fc, t, m, fs} : props) => {
    return(
        <Wrapper fc={fc} fs={fs} m={m}>
            {t}
        </Wrapper>
    )
}

TextComp.defaultProps ={
    fc : "white",
    fs : "16px",
    m : "0 0 0 0"
}