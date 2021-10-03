import React from "react";
import { useState } from "react";
import styled from "styled-components/native";
import { subjectDatas } from "../Utils/Data/subjectLists";






const Wrapper = styled.View`
    width: 100%;
    height: 100%;
`

const Text = styled.Text`
    width: 100px;
    height: 30px;
`

const GridWrapper = styled.View`
    width: 90%;
    height: 90%;
    margin : 0 auto;
    border : 1px solid black;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 40px);
`

const VoteCard = styled.Button`
    width : 20px;
    height: 20px;
`

const ResultWrapper = styled.View`
    width: 100%;
    height: 100%;
`


type props ={
    playerCnt :number
    liarNumber : number
    subjectText : string
    playWord : string
}



export const Vote:React.FC<props> =({playerCnt, liarNumber, subjectText, playWord}) => {

    const [voteDisplay, setVoteDisplay] = useState(true);
    const [liarGuess, setLiarGuess] = useState(false);
    const [voteResult, setVoteResult] = useState(false);
    const [liarSelect, setLiarSelect] = useState("")
    const [guessResult, setguessResult] = useState(false);


    const playerArray = Array.apply(null, Array(playerCnt)).map((val, idx) => idx);



    const selectLiarHander = (select:number) => {
        if(select === liarNumber){
            setVoteDisplay(false)
            setLiarGuess(true)
        }
        else if(select !== liarNumber){
            setVoteDisplay(false)
            setVoteResult(true)
        }
    }

    const guessLiarHandler = (select:string) => {
            setLiarGuess(false)
            setLiarSelect(select)
            setguessResult(true)
    }

    console.log(subjectDatas[subjectText])

    return(
        <Wrapper>
            <Text>투표 페이지</Text>
            {voteDisplay &&
                <GridWrapper >
                    {playerArray.map((player, idx)=>{
                        return(
                            <VoteCard key={idx} title={player+1} onPress={()=>selectLiarHander(idx)} />
                            )
                        })
                    }
                </GridWrapper>
            }

            {voteResult &&
                <ResultWrapper>
                    <Text>라이어는 {liarNumber + 1}번이었습니다!</Text>
                    <Text>라이어의 승리입니다.</Text>
                </ResultWrapper>
            }

            {liarGuess && 
                <>
                    <Text>카테고리 : {subjectText}</Text>
                    <GridWrapper>
                        {subjectDatas[subjectText].map((text, idx)=>{
                            return(
                                <VoteCard key={idx} title={text} onPress={()=>guessLiarHandler(text)} />
                            )
                        })}
                    </GridWrapper>
                </>
            }

            {guessResult &&
                <>
                <ResultWrapper>
                    <Text>제시어 : {playWord}</Text>
                    <Text>선택한 단어 : {liarSelect}</Text>
                </ResultWrapper>
                </>
            }

        </Wrapper>
    )
}