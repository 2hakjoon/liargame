import styled from "styled-components/native"
import React from "react"
import { getRandomWord } from "../Utils/Logic/subjectFunc"
import { subjectDatas } from "../Utils/Data/subjectLists"
import { setPlayerRole } from "../Utils/Logic/setPlayer"
import { useState } from "react"



const Wrapper = styled.View`
    display: flex;
    flex-direction: column;
`

const Board = styled.Button`
    width: 90%;
    height: 500px;
`


const Text = styled.Text`
    
`


type props = {
    subjectText: string
    playerCnt : number
    liarNumber : number | null
    playWord : string | null
}

export const GiveRole:React.FC<props> = ({subjectText, playerCnt, liarNumber, playWord}) => {
    const [roleStep, setRoleStep] = useState(-1);
    const [showInfo, setShowInfo] = useState(false);
    const playerArray = Array.apply(null, Array(playerCnt)).map((val, idx) => idx);
    console.log(playerArray)

    const toNextRoleStep = () =>{
        setRoleStep(prev=>prev+1)
        setShowInfo(true)
    }

    const hideInfo = () =>{
        setShowInfo(false)
    }

    return(
        <Wrapper>
            <Text>{subjectText}</Text>
            <Text>라이어 : {liarNumber}</Text>

            {showInfo ?
            <>
                {playerArray.map((player, idx)=>{
                    if(idx === roleStep){
                        if(liarNumber === player){
                            return(
                                <Board title={"당신은 라이어입니다."} onPress={hideInfo}/>
                            )
                        }
                        else{
                            return(
                                <Board title={`제시어는 ${playWord}입니다!`} onPress={hideInfo}/>
                            )
                        }
                    }
                })}
            </>
            :
            <Board title={"이곳을 눌러 역할을 확인해주세요!"} onPress={toNextRoleStep}/>
            }
        </Wrapper>
    )
}