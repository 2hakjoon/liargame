import React from "react"
import styled from "styled-components/native"
import i18n from "../../../Utils/LangPack/i18nConfig"


const Wrapper = styled.Text<TextProps>`
    color: ${p=>p.theme[p.fc]};
    font-size: ${p=>p.fs};
    margin: ${p=>p.m};
`

type props = {
    fc?: string,
    t: string,
    m?: string
    fs? :string
}
type TextProps ={
    fc?:string,
    fs?:string,
    m?:string
}
const rgxCheckWord = /^[ㅏ-ㅣㄱ-ㅎ가-힣a-zA-Z ]+$/gm
export const TextComp = ({fc, t, m, fs} : props) => {
    //console.log(t.match(rgxCheckWord))
    return(
        <Wrapper fc={fc} fs={fs} m={m}>
            {t.match(rgxCheckWord) ? i18n(t) : t}
        </Wrapper>
    )
}

TextComp.defaultProps ={
    fc : "white",
    fs : "16px",
    m : "0 0 0 0",
    t : " "
}